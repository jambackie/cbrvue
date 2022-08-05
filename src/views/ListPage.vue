<template>
  <list-search />
  <div class="list">
    <CurrencyItem v-for="item in items" :key="item.ID" :item="item" />
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import CurrencyItem from "../components/CurrencyItem.vue";
import ListSearch from "@/components/ListSearch.vue";

export default {
  components: { CurrencyItem, ListSearch },

  setup() {
    const store = useStore();
    const items = computed(() => store.getters["list/valuteList"]);
    return { items };
  },
};
</script>
