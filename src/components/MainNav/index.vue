<template src="./template.html"></template>

<script>
export default {
  name: "MainNav",
  computed: {
    step() {
      return this.$store.state.step
    }
  },
}
</script>