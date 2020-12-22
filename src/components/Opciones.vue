<template>
    <div id="Opciones">
        <div id="navegacion">
            <nav>
                <button v-on:click="irADashboard"><strong> Dashboard </strong></button>
                <button v-on:click="irARegistro"> <strong>Registrar movimientos</strong></button>
                <button v-on:click="irAConsulta"><strong> Ver movimientos </strong></button>
                <button><strong> Opciones </strong></button>
                <button v-on:click="cerrarSesion"><strong> Cerrar sesión </strong></button>
            </nav>
        </div>
        <div id="eliminar">
            <h1>Eliminar cuenta (Todos los registros guardados se perderán):</h1>
            <button v-on:click="eliminarCuenta">Eliminar</button>
        </div>    
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Opciones',

    data: function(){
        return{
            user: localStorage.getItem('current_user')
        }
    },

    methods:{
        irARegistro: function(){
            if(this.$route.name != "registro_mov"){
            this.$router.push({name: "registro_mov"});
            }    
        }, 
        irADashboard: function(){
            if(this.$route.name != "dashboard"){
            this.$router.push({name: "dashboard", params:{user:this.user}});
            }    
        }, 
        irAConsulta: function(){
            if(this.$route.name != "consultar_mov"){
            this.$router.push({name: "consultar_mov", params:{user:this.user}});
            }    
        },
        cerrarSesion: function(){
            this.$router.push({name: "autenticar_usuario"});
            localStorage.setItem('current_user', null)
        },
        eliminarCuenta: function(){
            axios.delete("https://quebrados-api.herokuapp.com/user/options/" + this.user)
            .then(response => {
                alert(response.data.respuesta);
                this.$router.push({name: "autenticar_usuario"});
                localStorage.setItem('current_user', null)
            })
            .catch((error) => {
                alert("No se pudo eliminar el usuario");
            })
            
            
        }
    }
}
</script>

<style>
#Opciones{
    text-align: center;
}

#eliminar button{
    height: 30%;
    font-size: 100%;
    position: relative;
    top: 2vh;
}

</style>