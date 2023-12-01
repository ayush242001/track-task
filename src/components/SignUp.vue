<template>
  <img class="logo" src="../assets/tasks.png" alt="tasklogo" />
  <h3>Sign Up</h3>
  <div class="regestr">
    <input type="text" v-model="username" placeholder="Enter Username" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <input
      type="password"
      v-model="ConformPassword"
      placeholder="Conform Password"
    />
    <button v-on:click="signUp"><strong>Sign Up Here</strong></button>
    <p><router-link to="/login">Login</router-link></p>
  </div>
</template>


<script>
import axios from "axios";
import store from "@/store";
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      Password: "",
      ConformPassword: "",
      isAuthenticated: store.getters.isAuthenticated,
    };
  },

  methods: {
    async signUp() {
      console.warn(
        "signUp",
        this.username,
        this.password,
        this.conformPassword
      );
      try {
        let result = await axios.post("http://localhost:3000/users", {
          username: this.username,
          password: this.password,
          conformPassword: this.conformPassword,
        });
        console.warn(result);
        if (result.status === 201) {
          alert("signup done");
        }
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({name:'Home'})
      } catch (error) {
        console.error("Error during signup:", error);
        // Handle the error appropriately (e.g., show an error message)
      }
    },
  },
  mounted()
    {
        const user = localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'Home'})
        }
    }
  
};
</script>

<style>
.logo {
  width: 90px;
}
.regestr input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
.regestr button {
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
