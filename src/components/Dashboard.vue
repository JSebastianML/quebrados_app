<template>
    <div id="Dashboard">
        <h2>Hola {{user}}</h2>
        <h2>En este momento tus movimientos dan un neto de ${{netoUsuario}}</h2>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Dashboard",
    data: function(){
        return{
            user: localStorage.getItem('current_user'),
            netoUsuario: 0,
        }
    },

    created: function(){
        let mivariable=this;
        axios.get("http://localhost:8000/user/dashboard/" + this.user )
        .then(response =>{
            mivariable.netoUsuario=response.data.total
        })
        .catch((error)=>{
            alert("error al acceder a la DB")
        })
    }
}
</script>

<style>
#Dashboard h2{
    text-align: center;
}
</style>