<template>
  <div class="item list__item">
    <p class="item__title">{{ item.Name }}</p>
    <span class="item__value">1 {{ leftCode }}</span>
    <button class="item__btn" @click="togleReverse"></button>
    <span class="item__value">{{ value }} {{ rightCode }}</span>
    <span v-if="prevValue !== 0" class="item__title" :class="prevClasses">
      {{ prevValue }}
    </span>
  </div>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const reverse = ref(false);
    const moveUp = ref(props.item.value > props.item.prevValue);
    const togleReverse = () => {
      reverse.value = !reverse.value;
      moveUp.value = !moveUp.value;
    };
    const leftCode = computed(() => {
      return reverse.value ? "RUR" : props.item.CharCode;
    });
    const rightCode = computed(() => {
      return reverse.value ? props.item.CharCode : "RUR";
    });
    const value = computed(() => {
      return reverse.value ? props.item.ratio : props.item.value;
    });
    const prevValue = computed(() => {
      return reverse.value
        ? Math.abs((props.item.ratio - props.item.prevRatio).toFixed(4))
        : Math.abs((props.item.value - props.item.prevValue).toFixed(4));
    });
    const prevClasses = computed(() => {
      return moveUp.value ? "list__item-up" : "list__item-down";
    });

    return {
      leftCode,
      togleReverse,
      rightCode,
      value,
      prevValue,
      prevClasses,
    };
  },
};
</script>
