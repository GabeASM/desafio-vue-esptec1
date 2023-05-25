<template>
    <div v-if="pajaro" class="container row justify-content-center">
        
        <div class="card w-50 h-50 mt-5" style="width: 18rem;">
            <img :src="pajaro.images.main" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">{{ pajaro.iucn.description }}</p>
            </div>
        </div>

        <div class="card  mt-5" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="pajaro.map.image" height="1000px" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Habitat</h5>
                        <p class="card-text">{{ pajaro.habitat }}</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
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