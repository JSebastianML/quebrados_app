<template>
  <div id="app">
    <div class="header">
      <h1>Quebrados.com</h1>
    </div>
    <div class="main-component">
      <router-view></router-view>
    </div>
    <div class="footer">
      <h2>G2M2 Equipo 10</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {},

  methods: {
    irARegistro: function(){
      if(this.$route.name != "registro_mov"){
        this.$router.push({name: "registro_mov"});
      }    
    }, 
    irADashboard: function(){
      if(this.$route.name != "dashboard"){
        this.$router.push({name: "dashboard"});
      }    
    }, 
    irAConsulta: function(){
      if(this.$route.name != "consultar_mov"){
        this.$router.push({name: "consultar_mov"});
      }    
    }
  },

  beforeCreate: function(){
    localStorage.setItem("current_user", null)
    this.$router.push({name: "autenticar_usuario"});
  }
}
</script>

<style>
body{
  margin: 0 0 0 0;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.header{
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color:#063286;
  color:#E5E7E9 ;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.header h1{
  width: 30%;
  text-align: center;
  font-size: 70px;
  justify-content: space-between;
  text-align: center;
  position: relative;
  left:32%;
  bottom: 7vh;
}
.header h2{
  font-size: 23px;
}
.header nav {
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}
.header nav button{
  font-size: 100%;
  color:#FFA500;
  background: #060606;
  height: 45%;
  border-style: none;
}

.header nav button:hover{
  color:#FFA500;
  background: #060606;
  border: solid ;
  height: 45%;
  border-top-width: thin;
  border-bottom-width: thin;
  border-right-width: thin;
  border-left-width: thin;
}

.main-component{
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background-color: #FDFEFE;
}
.footer{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 5vh;
  min-height: 100px;
  background-color: #060606 ;
  color: #E5E7E9;
}
.footer h2{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#main-component{
  background-image: url('https://1685481792.rsc.cdn77.org/wp-content/uploads/2016/05/finance-845x321.jpg');
}

</style>