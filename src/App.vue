<template>
  <div id="app" :class="{ 'dark-background': isDark }">
    <div class="nav-container">
      <nav>
        <router-link to="/">Početna</router-link> | 
        <router-link to="/tasks">Zadaci</router-link>
      </nav>
      <BackgroundToggler @backgroundToggled="toggleBackground"/>
    </div>
      <router-view/>
  </div>
  <!--
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  -->
</template>

<script>
import BackgroundToggler from './components/BackgroundToggler.vue';

export default {
  name: 'App',
  components: {
    BackgroundToggler
  },
  data() {
    return {
      isDark: false
    };
  },
  methods: {
    toggleBackground() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.body.classList.add('dark-background');
      } else {
        document.body.classList.remove('dark-background');
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.dark-background {
  background-color: #333;
  color: white;
}

.dark-background nav a {
  color: #fff;
}

.dark-background nav a.router-link-exact-active {
  color: #42b983; /* Ovo mijenja boju aktivnog linka, ako je potrebno */
}

.dark-background .home,
.dark-background .task-list {
  color: white; /* mijenja boju teksta na bijelu u tamnoj temi */
}

.dark-background .task-list li {
  border-color: white; /* Opcionalno: mijenja boju granica na bijelu u tamnoj temi */
}
</style>
