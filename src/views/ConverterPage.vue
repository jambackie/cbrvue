<template>
  <div class="converter">
    <div class="converter__item item">
      <Select :ind="0" />
      <Input :ind="0" />
    </div>
    <button class="converter__btn item__btn" @click="swap"></button>
    <div class="converter__item item">
      <Select :ind="1" />
      <Input :ind="1" />
    </div>
  </div>
</template>

<script>
import Select from "../components/Select.vue";
import Input from "../components/Input.vue";
import { useStore } from "vuex";

export default {
  components: { Select, Input },
  setup() {
    const store = useStore();
    function swap() {
      store.commit("converter/swapPair");
    }
    return { swap };
  },
};
</script>
