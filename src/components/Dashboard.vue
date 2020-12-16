<template>
    <div id="Dashboard">
        <h1>Hola {{usuario}}, en este momento tu balance neto es de VALOR</h1>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data: function(){
        return{
            usuario: "none"
        }
    },

    created: function(){
        this.usuario=localStorage.getItem('current_user')
    }
}
</script>

<style>
#Dashboard h1{
    text-align: center;
}
</style>