<template>
  <div id="app">

    <div class="app-wrap">

      <div v-if="PopUpState.show" class="pop-up-wrapper">
        <div class="pop-up">
          <AddBike v-if="PopUpState.name == 'add'" />
          <EditBike v-if="PopUpState.name == 'edit'" />
          <DeleteBike v-if="PopUpState.name == 'delete'" />
        </div>

      </div>

      <SideMenu />
      <router-view class="page-view" />
    </div>
    
  </div>
</template>

<script>
import SideMenu from './components/SideMenu/SideMenu'
import AddBike from './components/PopUpActions/AddBike'
import EditBike from './components/PopUpActions/EditBike'
import DeleteBike from './components/PopUpActions/DeleteBike'

export default {
  name: 'app',
  components: {
    SideMenu,
    AddBike,
    EditBike,
    DeleteBike
  },
  created() {
    // load posts
    this.$store.dispatch('loadBikesFromApi')
  },
  computed: {
    PopUpState() {
      return this.$store.getters.PopUpState
    }
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

.pop-up-wrapper {
  content: "";
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
    background: #353535ad;
    z-index: 99;
}

.pop-up {
    z-index: 9999;
    position: absolute;
    width: fit-content;
    right: 50%;
    transform: translateX(50%);
    background: #FFF;
    padding: 20px;
    top: 100px;
}

.title-x {
    display: flex;
    justify-content: space-between;

    h2 {
        text-align: center;
        width: 100%;
    }
}

/* icons (size,etc.) */

.icons {
  font-size: 24px;
}
</style>
