<template>
  <navigation-links />
  <router-view></router-view>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import NavigationLinks from '@/components/NavigationLinks.vue'

export default {
  components: { NavigationLinks },

  setup() {
    onMounted(() => useStore().dispatch('loadValute'))
  },
}
</script>
