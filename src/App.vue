<template>
  <router-view />
</template>

<script>

export default {
  name: "App",
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 90px;
}
.login input,.regestr input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
.login button ,.regestr button{
  width: 300px;
  height: 40px;
  border-radius: 70px;
  color: rgb(240, 237, 237);
  font-weight: bold;
  background-color: rgb(14, 130, 176);
  border: 1px solid skyblue;
  cursor: pointer;
}

</style>
