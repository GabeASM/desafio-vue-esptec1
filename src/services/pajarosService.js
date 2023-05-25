import axios from 'axios'; 

const BASE_URL = 'https://aves.ninjas.cl/api/birds'

function obtenerPajaros(){
    return axios.get(BASE_URL).then((result) =>{
        return result.data;
    })
}

function obtenerPajaroPorId(id){
    return axios.get(`${BASE_URL}/${id}`).then((result) =>{
        return result.data;
    })
}
export {obtenerPajaros, obtenerPajaroPorId}