<template>
  <select v-model="select" @change="change" class="select">
    <option v-for="item in options" :key="item.code" :value="item.code">
      {{ item.name }}
    </option>
  </select>
</template>

<script>
import { computed, ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  props: {
    ind: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();
    const second = props.ind === 0 ? 1 : 0;
    const pair = computed(() => store.state.converter.pair);
    const options = computed(() =>
      store.getters["converter/options"].filter(
        (el) => el.code !== pair.value[second]
      )
    );
    const value = computed(() => pair.value[props.ind]);
    const select = ref(`${value.value}`);
    function change() {
      store.commit("converter/changePair", [props.ind, select.value]);
    }
    watch(
      () => value.value,
      () => {
        select.value = value.value;
      }
    );

    return { options, select, change };
  },
};
</script>
