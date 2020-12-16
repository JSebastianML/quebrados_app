<template>
    <div id="Consultar_mov">
        <h1>Estos son los registros financieros que tienes hasta el momento:</h1>
        <table>
            <tr>
                <th>ID Reg</th>
                <th >Usuario</th>
                <th >Tipo</th>
                <th >Descripción</th>
                <th >Valor</th>
                <th >Fecha</th>
            </tr>
            <tr v-for="registro in registrosGuardados" :key="registro.id_register">
                <td >{{registro.id_register}}</td>
                <td >{{registro.user}}</td>
                <td >{{registro.category}}</td>
                <td >{{registro.concept}}</td>
                <td >{{registro.value}}</td>
                <td >{{registro.fecha}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Consultar_mov",
    data: function(){
        return{
            user: localStorage.getItem('current_user'),
            registrosGuardados: []
        }
    },
    created: function(){
        let mivariable = this;
        axios.get("http://localhost:8000/register/find/"+this.user)
        .then(response =>{
            mivariable.registrosGuardados=response.data
        })
        .catch((error)=>{
            alert("No se pudo obtener la información de la base de datos")
        })
    }
}
</script>

<style>
#Consultar_mov{      
    text-align: center;
}
#Consultar_mov table{      
    margin: auto;
}
</style>