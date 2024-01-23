<template>
    <button @click="toggleBackground">Promijeni boju pozadine</button>
</template>
  
<script>
  export default {
    name: 'BackgroundToggler',
    methods: {
      toggleBackground() {
        this.$emit('backgroundToggled'); // 9
      }
    }
  }
</script>

<!-- 5 -->
<style scoped>
  button {
    margin: 10px;
    padding: 5px 15px;
  }
</style>
  