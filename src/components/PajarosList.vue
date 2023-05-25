<template>
    <body>
        <div v-if="pajaros.length !== 0" class="container row justify-content-center">
            <div v-for="(pajaro, index ) in pajaros " :key="index" class="card mx-5 my-5 " style="width: 18rem;">
                <img :src="pajaro.images.main" />
                <div class="card-body">
                    <h4>Nombres</h4>
                    <h5 class="card-title"> {{ pajaro.name.spanish }}</h5>
                    <h5 class="cart-title">  {{ pajaro.name.english }}</h5>
                    <router-link class="btn btn-primary mt-5" :to="{
                        name: 'detallePajaro',
                        params: {
                            id: pajaro.uid
                        }
                    }">detalle</router-link>
                </div>
            </div>
        </div>
        <div class="container row justify-content-center" v-else>
            <div class="spinner-border" role="status">

            </div>
        </div>

    </body>
</template>
<script setup>

import { ref, onMounted } from 'vue'
import { obtenerPajaros } from '@/services/pajarosService'

let pajaros = ref([])


onMounted(async () => {
    pajaros.value = await obtenerPajaros()
})


</script>

<style scoped>

</style>
