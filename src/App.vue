<template>
  <div id="restaurant-forum">
    <NavbarItem />

    <main role="main" class="mt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>

<script>
/* eslint-disable  */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import NavbarItem from "./components/NavbarItem.vue";

export default {
  components: {
    NavbarItem,
  },

}
</script>

<style>

</style>
