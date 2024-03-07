<template>
  <div class="mx-auto container">
    <MenuComponent />
    <router-view />    
  </div>
</template>

<script>

import MenuComponent from './components/MenuComponent.vue'

export default {
  name: 'App',
  components: {    
    MenuComponent,
  }
}
</script>

<style>
</style>
