<template>
  <div id="app">
    <MainNav />
    <router-view class="router_view" />
  </div>
</template>


<style lang="scss" src="@/assets/css/app.scss"></style>

<script>
import MainNav from "./components/MainNav/index"
export default {
  name: "App",
  components: {
    MainNav
  }
}
</script>