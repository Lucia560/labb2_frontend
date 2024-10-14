<script setup>
import { ref } from 'vue';

const navList = ref([
  { name: "Home", route: "/" },
  { name: "Tasks", route: "/tasks" },
  { name: "Login", route: "/login" }
]);
</script>


<template>
  <nav class="nav-bar">
    <ul>
      <li v-for="nav in navList" :key="nav.name">
    <router-link :to="{ name: nav.name }" class="nav-link">{{ nav.name }}</router-link>
      </li>

     </ul>
   </nav>
 </template>


<style scoped>
/* Navigation bar */
.nav-bar {
  padding: 20px;
  display: flex;
  align-items: center; 
  justify-content: flex-end;
  position: fixed;
  top: 0;
  right: 0; 
  left: auto; 
  width:auto; 
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: large;
  
}

/* List */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

/* List item */
li {
  margin-right: 30px;
}


li:last-child {
  margin-right: 0;
}

.nav-link {
  color: #590A4C;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
}


.nav-link:hover {
  background-color: #F26699;
}
</style>



