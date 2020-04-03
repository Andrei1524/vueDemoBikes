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

<style lang="scss">
$menu_width: 240px;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  height: 100%;
  background: #F0F3F8;
}

.app-wrap {
  display: flex; 
  height: 90vh;
}

.page-view {
  padding: 0 3em;
  margin-top: 3em;
  width: calc(100% - #{$menu_width});
}

.space-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
/* icons (size,etc.) */

.icons {
  font-size: 24px;
}
</style>
