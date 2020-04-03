<template>
  <div id="app">

    <div class="app-wrap">
      <SideMenu />
      <router-view class="page-view" />
    </div>
    
  </div>
</template>

<script>
import SideMenu from './components/SideMenu/SideMenu'

export default {
  name: 'app',
  components: {
    SideMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}

.app-wrap {
  display: flex; 
  height: 90vh;
}

.page-view {
  padding: 0 3em;
  margin-top: 3em;
}
</style>
