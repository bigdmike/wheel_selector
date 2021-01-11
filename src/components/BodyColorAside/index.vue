<template src="./template.html"></template>

<script>
export default {
  name: "BodyColorAside",
  props: {
    option: {
      require
    }
  },
  data() {
    return {
      colors: [
        { name: "black", text: "黑色" },
        { name: "gray", text: "灰色", },
        { name: "white", text: "白色" },
        { name: "blue", text: "藍色" },
        { name: "red", text: "紅色" },
      ]
    }
  }
}
</script>