<template>
    <div v-if="pajaro" class="container row justify-content-center">
        
        <div class="card w-50 h-50 mt-5" style="width: 18rem;">
            <img :src="pajaro.images.main" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> {{ pajaro.name.spanish }}</h5>
                <p v-if="pajaro.iucn.description" class="card-text">{{ pajaro.iucn.description }}</p>
                <p v-else class="card-text">SIN DESCRIPCION</p>
                <h5 class="card-title">tamaño</h5>
                <p class="card-text">{{ pajaro.size }}</p>
                <p class="card-text"></p>

            </div>
        </div>

        <div class="card j mt-5" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="pajaro.map.image" height="1000px" class="img-fluid rounded-start" alt="...">
                    <p class="card-text">{{ pajaro.map.title }}</p>
                    
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Habitat</h5>
                        <p class="card-text">{{ pajaro.habitat }}</p>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Sabias que...</h5>
                        <p class="card-text">{{ pajaro.didyouknow }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" v-else>
        <p>Cargando...</p>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { obtenerPajaroPorId } from '@/services/pajarosService'

let pajaro = ref(null)

onMounted(async () => {
    const route = useRoute()

    pajaro.value = await obtenerPajaroPorId(route.params.id)
})
</script>