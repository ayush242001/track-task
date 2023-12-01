<template>
  <img class="logo" src="../assets/tasks.png" alt="tasklogo" />
  <h3>Login</h3>
  <div class="login">
    <input type="text" v-model="username" placeholder="Enter Username" />
    <input
      type="password"
      v-model="ConformPassword"
      placeholder="Conform Password"
    />
    <button v-on:click="login"><strong>Login</strong></button>
    <p><router-link to="/sign-up">Sign Up</router-link></p>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      ConformPassword: "",
      isAuthenticated: store.getters.isAuthenticated,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.get(
          `http://localhost:3000/users?username=${this.username}&password=${this.ConformPassword}`
        );

        if (response.status === 200 && response.data.length > 0) {
          localStorage.setItem('user-info', JSON.stringify(response.data[0]));
          this.$router.push({ name: 'Home' });
        } else {
          // Handle failed login
          alert('Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Error during login:', error);
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

<style></style>
