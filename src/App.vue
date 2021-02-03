<template>
  <div id="app">
    <Loading />
    <Dialog />
    <MainNav />
    <router-view class="router_view" />
  </div>
</template>


<style lang="scss" src="@/assets/css/app.scss"></style>

<script>
import MainNav from "./components/MainNav/index"
import Loading from "./components/YxLoading/index"
import Dialog from "./components/YxDialog/index"
export default {
  name: "App",
  components: {
    MainNav,
    Loading,
    Dialog
  }
}
</script>