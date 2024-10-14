<script setup>
import Nav_bar from './Nav_bar.vue';

  </script>

<template>
    <header class="header_1">
      <Nav_bar /> 
      <h1>Task Tracker</h1>
    </header>
  </template>
  


  <style scoped>
  .header {
    display: flex;
    padding: 20px 40px; 
  }
  h1 {
    margin:0; 
    color:#590A4C; 
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0; 
    right: auto; 
    width: auto;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 3rem; 
    font-weight: bold;
}

  </style>