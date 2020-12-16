<template>
    <div id="Registro_mov">
        <h1>¡REGISTRA TUS MOVIMIENTOS!</h1>
        <h3>Por favor indica si es ingreso o egreso:</h3>
        <input type="text" v-model="tipo"/><br/>
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
    methods:{
        guardarRegistro: function(){
            
            var datosDelRegistro = {
                user: localStorage.getItem('current_username'), 
                category: this.tipo, 
                concept: this.desc, 
                value: this.valor}

            axios.post("http://localhost:8000/register/create", datosDelRegistro)
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