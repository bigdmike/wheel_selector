<template>
  <div id="Home">
    <transition name="fade">
      <div class="page" :class="{ active: step == 1 }">
        <transition name="fade-left">
          <BodyColorView :class="{ active: step == 1 }" :option="option" />
        </transition>
        <BodyColorAside
          :class="{ active: step == 1 }"
          v-on:set-body-color="SetBodyColor"
          v-on:set-step="SetStep"
          :option="option"
        />
      </div>
    </transition>
    <transition name="fade">
      <div class="page" :class="{ active: step == 2 }">
        <transition name="fade-left">
          <WheelView :class="{ active: step == 2 }" :option="option" />
        </transition>
        <WheelAside
          :class="{ active: step == 2 }"
          v-on:set-wheel="SetWheel"
          v-on:set-step="SetStep"
          :option="option"
        />
      </div>
    </transition>
    <transition name="fade">
      <div class="page" :class="{ active: step == 3 }">
        <transition name="fade-left">
          <ClipersView :class="{ active: step == 3 }" :option="option" />
        </transition>
        <ClipersAside
          :class="{ active: step == 3 }"
          v-on:set-clipers-color="SetCliper"
          v-on:set-step="SetStep"
          :option="option"
        />
      </div>
    </transition>
    <transition name="fade">
      <div class="page" :class="{ active: step == 4 }">
        <transition name="fade-left">
          <CheckoutView
            :class="{ active: step == 4 }"
            :option="option"
            v-on:set-step="SetStep"
          />
        </transition>
        <CheckoutAside
          :class="{ active: step == 4 }"
          v-on:set-clipers-color="SetCliper"
          :option="option"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import BodyColorView from "../components/BodyColorView/index"
import BodyColorAside from "../components/BodyColorAside/index"
import WheelView from "../components/WheelView/index"
import WheelAside from "../components/WheelAside/index"
import ClipersView from "../components/ClipersColorView/index"
import ClipersAside from "../components/ClipersColorAside/index"
import CheckoutView from "../components/CheckoutView/index"
import CheckoutAside from "../components/CheckoutAside/index"

export default {
  name: 'Home',
  components: {
    BodyColorView,
    BodyColorAside,
    WheelView,
    WheelAside,
    ClipersView,
    ClipersAside,
    CheckoutView,
    CheckoutAside
  },
  data() {
    return {
      option: {
        wheel: 1,
        body_color: "black",
        clipers_color: "blue"
      },
      screenWidth: document.body.clientWidth
    }
  },
  methods: {
    SetBodyColor(color) {
      this.option.body_color = color
    },
    SetWheel(wheel) {
      this.option.wheel = wheel
    },
    SetCliper(color) {
      this.option.clipers_color = color
    },
    SetStep(step) {
      this.$store.commit("SetStep", step)
      if (step == 4) {
        document.getElementById("CheckOutAside").scrollIntoView()
      }
    }
  },
  computed: {
    step() {
      return this.$store.state.step
    }
  },
  mounted() {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  }
}
</script>
