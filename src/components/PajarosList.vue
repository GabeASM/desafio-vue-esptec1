<template>
    <div>
        
        <div v-for="(pajaro, index ) in pajaros " :key="index" class="card" style="width: 18rem;">
            <img :src="pajaro.images.main" class="card-img-top" />
            <div class="card-body">
                <h5 class="card-title">{{ pajaro.name.spanish }}</h5>
                <p class="card-text">Definitivamente un pajaro muy bonito</p>
                <p>{{ pajaro.uid }}</p>
                <router-link
                class="btn btn-primary" :to="{
                    name: 'detallePajaro',
                    params:{
                        id:pajaro.uid 
                    }
                }">About</router-link>
            </div>
        </div>
    </div>
</template>
<script setup>

import { ref, onMounted } from 'vue'
import { obtenerPajaros } from '@/services/pajarosService'

let pajaros = ref([])


onMounted(async () => {
    pajaros.value = await obtenerPajaros()
})


// function detallePajaro() {
//     console.log(pajaros.value)
// }


</script>
