<template>
  <Navigation />
  <router-view></router-view>
</template>

<script>
import Navigation from "./components/navigation/Navigation.vue";

export default {
  components: { Navigation },
};
</script>
