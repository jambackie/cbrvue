<template>
  <Search />
  <div class="list">
    <CurrencyItem v-for="item in items" :key="item.ID" :item="item" />
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import CurrencyItem from "../components/CurrencyItem.vue";
import Search from "@/components/Search.vue";

export default {
  components: { CurrencyItem, Search },

  setup() {
    const store = useStore();
    const items = computed(() => store.getters["list/valuteList"]);
    return { items };
  },
};
</script>
