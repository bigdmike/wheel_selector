<template src="./template.html"></template>

<script>
export default {
  name: "BodyColorView",
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
      ],
      form: {
        name: "",
        phone: "",
        email: "",
        address: "",
        comment: ""
      },
      errors: []
    }
  },
  methods: {
    FormValid() {
      this.errors = []
      let valid_result = [
        {
          id: "name",
          result: this.validName(this.form.name)
        },
        {
          id: "phone",
          result: this.validPhone(this.form.phone)
        },
        {
          id: "email",
          result: this.validEmail(this.form.email)
        },
        {
          id: "address",
          result: this.validNotEmpty(this.form.address)
        },
      ]

      valid_result.forEach(item => {
        if (item.result != true) {
          this.errors.push({
            id: item.id,
            msg: item.result
          })
        }
      })

      if (this.errors.length <= 0) {
        this.SendOrder()
      }
    },
    SendOrder() {
      this.$store.commit("SetLoading", true)

      setTimeout(() => {
        this.$store.commit("SetLoading", false)
        this.$store.commit("SetDialog", [true, "訂單已送出"])
      }, 3000);
    }
  }
}
</script>