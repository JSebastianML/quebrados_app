<template>
    <div id="Dashboard">
        <h2>Hola <span id="usuario"> {{user}} </span></h2>
        <h2>Tu balance es de ${{netoUsuario}}</h2>
        <h1 v-if="netoUsuario>0" id="positivo">No tienes deudas en el momento</h1>
        <h1 v-if="netoUsuario<0" id="negativo">Cuida de tu presupuesto! </h1>
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
        axios.get("https://quebrados-api.herokuapp.com/user/dashboard/" + this.user )
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
#usuario{
    color:blue;
}

#Dashboard h2{
    text-align: center;
}

#positivo{
    color: blue;
    text-align: center;
}

#negativo{
    color:red; 
    text-align: center;
}
</style>