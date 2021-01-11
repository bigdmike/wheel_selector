<template src="./template.html"></template>

<script>
export default {
  name: "CheckoutAside",
  props: {
    option: {
      require
    }
  },
  data() {
    return {
      body_colors: [
        { name: "black", text: "黑色" },
        { name: "gray", text: "灰色", },
        { name: "white", text: "白色" },
        { name: "blue", text: "藍色" },
        { name: "red", text: "紅色" },
      ],
      cliper_colors: [
        { name: "black", text: "黑色" },
        { name: "gray", text: "灰色", },
        { name: "orange", text: "橘色" },
        { name: "blue", text: "藍色" },
        { name: "red", text: "紅色" },
      ],
      wheels: [
        { id: 1, text: "M款雙輻式705M型輪圈" },
        { id: 2, text: "M款雙輻式810M型輪圈", },
        { id: 3, text: "M款雙輻式706M型輪圈(黑)" },
      ]
    }
  }
}
</script>