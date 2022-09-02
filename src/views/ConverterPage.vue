<template>
  <div class="converter">
    <div class="converter__item item">
      <converter-select :ind="0" />
      <converter-input :ind="0" />
    </div>
    <button class="converter__btn item__btn" @click="swap"></button>
    <div class="converter__item item">
      <converter-select :ind="1" />
      <converter-input :ind="1" />
    </div>
  </div>
</template>

<script>
import ConverterSelect from '../components/ConverterSelect.vue'
import ConverterInput from '../components/ConverterInput.vue'
import { useStore } from 'vuex'

export default {
  components: { ConverterSelect, ConverterInput },
  setup() {
    const store = useStore()
    function swap() {
      store.commit('converter/swapPair')
    }
    return { swap }
  },
}
</script>
