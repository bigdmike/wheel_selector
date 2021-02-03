<template src="./template.html"></template>

<script>
export default {
  name: "Dialog",
  methods: {
    CloseDialog() {
      this.$store.commit("SetDialog", [false, ""])
    }
  }
}
</script>

<style lang="scss" src="./_yxDialog.scss"></style>