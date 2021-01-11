<template>
  <div id="Home">
    <transition name="fade">
      <div class="page" :class="{ active: step == 1 }">
        <transition name="fade-left">
          <BodyColorView v-if="step == 1" :option="option" />
        </transition>
        <BodyColorAside
          v-if="step == 1"
          v-on:set-body-color="SetBodyColor"
          v-on:set-step="SetStep"
          :option="option"
        />
      </div>
    </transition>
    <transition name="fade">
      <div class="page" :class="{ active: step == 2 }">
        <transition name="fade-left">
          <WheelView v-if="step == 2" :option="option" />
        </transition>
        <WheelAside
          v-if="step == 2"
          v-on:set-wheel="SetWheel"
          v-on:set-step="SetStep"
          :option="option"
        />
      </div>
    </transition>
    <transition name="fade">
      <div class="page" :class="{ active: step == 3 }">
        <transition name="fade-left">
          <ClipersView v-if="step == 3" :option="option" />
        </transition>
        <ClipersAside
          v-if="step == 3"
          v-on:set-clipers-color="SetCliper"
          v-on:set-step="SetStep"
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

export default {
  name: 'Home',
  components: {
    BodyColorView,
    BodyColorAside,
    WheelView,
    WheelAside,
    ClipersView,
    ClipersAside
  },
  data() {
    return {
      step: 1,
      option: {
        wheel: 1,
        body_color: "black",
        clipers_color: "blue"
      }
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
      this.step = step
    }
  }
}
</script>
