<template>
    <div id="Registro_mov">
        <h1 id="usuario">{{user}}</h1>
        <h1>Registra tus movimientos! </h1>
        <h3>Por favor indica si es ingreso o egreso:</h3>
        <select v-model="tipo">
            <option value="ingreso" selected>Ingreso</option>
            <option value="egreso" >Egreso</option>
        </select>
        <h3>Descripción:</h3>
        <input type="text" style="width:30vw" v-model="desc"/><br/>
        <h3>Valor:</h3>
        <input type="text" v-model="valor"/><br/>
        <button v-on:click="guardarRegistro">Guardar registro</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Registro_mov",
    data: function(){
        return{
            user: localStorage.getItem('current_user')
        }
    },
    methods:{
        guardarRegistro: function(){
            
            var datosDelRegistro = {
                user: this.user, 
                category: this.tipo, 
                concept: this.desc, 
                value: this.valor}

            axios.post("https://quebrados-api.herokuapp.com/register/create", datosDelRegistro)
            .then(response => {
                alert("Registro guardado correctamente");
            })
            .catch((error) => {
                alert("No se pudo realizar el registro");
            })
            this.$router.push({name: "registro_mov"});
        }
    }
}
</script>

<style>
#Registro_mov input{
    height: 40%;
    position: relative;
    left: 30px;
    bottom: 10px;
    font-size: 100%;
}

#Registro_mov select{
    height: 40%;
    position: relative;
    left: 30px;
    bottom: 10px;
    font-size: 100%;
}

#usuario{
    color:blue;
}

#Registro_mov h1{
    position: relative;
    left: 10px;
}

#Registro_mov h3{
    position: relative;
    left: 20px;
}
#Registro_mov button{
    height: 30%;
    position: relative;
    left: 30px;
    top: 10px;
    font-size: 100%;
}
</style>