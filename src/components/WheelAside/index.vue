<template src="./template.html"></template>

<script>
export default {
  name: "WheelAside",
  props: {
    option: {
      require
    }
  },
  data() {
    return {
      wheels: [
        { id: 1, text: "M款雙輻式705M型輪圈" },
        { id: 2, text: "M款雙輻式810M型輪圈", },
        { id: 3, text: "M款雙輻式706M型輪圈(黑)" },
      ]
    }
  }
}
</script>