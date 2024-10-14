<script setup>
import { ref } from 'vue';

const userName = ref('');
const password = ref('');
const userIsLoggedIn = ref(false);

const handleSubmit = (event) => {
  event.preventDefault(); 
  sessionStorage.setItem('userName', userName.value);
  sessionStorage.setItem('loggedIn', 'true'); // login status to use in tasks.vue
  userIsLoggedIn.value = true; // Update login status
  alert(`Thank you, ${userName.value}`);
  userName.value = '';
  password.value = '';


};

</script>


<template>
  <div id="form_login" class="form_container">
    <p>Please Note: To create, add, edit, or delete items on the list, kindly log in. 
      This enables us to ensure that only authorized users can make changes. Thank you for your understanding!</p>
      <br><br>
    <h2>Please sign in:</h2>
    <br><br>
    <form @submit="handleSubmit">
      <label for="name">Fill in your name:</label>
      <input type="text" id="name" v-model="userName" required><br><br>
      <label for="password">Choose your password:</label>
      <input type="password" id="password" v-model="password" required><br><br>
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>



<style scoped>
 .form_container {
    max-width: 1000px; 
    margin: 0 auto; 
    padding: 200px 40px 40px;
    font-size: 1.2em; 
    color: #590A4C;
  }
  
  h2 {
    color: #590A4C; 
  }
  
  p {
    line-height: 1.6; 
  }
  button {
  background-color:#590A4C; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #32062a; 
  transform: translateY(-2px); /* cool lift effect */
}

</style>
  