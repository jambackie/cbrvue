<template>
  <Navigation />
  <router-view></router-view>
</template>

<script>
import { mapActions } from "vuex";
import Navigation from "./components/navigation/Navigation.vue";

export default {
  components: { Navigation },

  mounted() {
    this.loadValute();
  },

  methods: {
    ...mapActions(["loadValute"]),
  },
};
</script>
