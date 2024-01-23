<template>
    <div class="not-found">
      <h1>404</h1>
      <p>Stranica nije pronađena.</p>
      <router-link to="/">Povratak na početnu stranicu</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  }
  </script>
  
  <!-- 5 -->
  <style scoped>
  .not-found {
    text-align: center;
    padding: 20px;
  }
  </style>
  