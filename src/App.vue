<template>
  <Navigation />
  <router-view></router-view>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import Navigation from "./components/Navigation.vue";

export default {
  components: { Navigation },

  setup() {
    onMounted(() => useStore().dispatch("loadValute"));
  },
};
</script>
