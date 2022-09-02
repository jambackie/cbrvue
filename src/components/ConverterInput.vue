<template>
  <label class="input">
    <input type="number" v-model="value" @input="input" :disabled="ind === 1" />
    {{ label }}
  </label>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import useDebounce from '@/use/useDebounce'

export default {
  props: {
    ind: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const store = useStore()
    const inputValue = computed(() => store.state.converter.inputValue)
    const nominal = computed(() => store.getters['converter/nominal'])
    const target = computed(() => store.getters['converter/target'])
    const ratio = computed(() =>
      (nominal.value.value / target.value.value).toFixed(4)
    )
    const reverseRatio = computed(() =>
      (target.value.value / nominal.value.value).toFixed(4)
    )
    const result = computed(() => {
      return inputValue.value > 0
        ? (ratio.value * inputValue.value).toFixed(4)
        : 0
    })
    const value = props.ind === 0 ? ref(inputValue.value) : ref(result)
    const leftLabel = computed(() => {
      return `1 ${nominal.value.CharCode} = ${ratio.value} ${target.value.CharCode}`
    })
    const rightLabel = computed(() => {
      return `1 ${target.value.CharCode} = ${reverseRatio.value} ${nominal.value.CharCode}`
    })
    const label = props.ind === 0 ? leftLabel : rightLabel
    const input = useDebounce(() => {
      store.commit('converter/changeInputValue', value.value)
    }, 500)

    return { value, input, label }
  },
}
</script>
