<template>
  <div class="search">
    <input
      class="search__input"
      @input="searchItems"
      type="text"
      v-model="value"
      placeholder="Начать поиск..."
    />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import useDebounce from '@/use/useDebounce'

export default {
  setup() {
    const store = useStore()
    const value = ref('')
    function filterList() {
      store.dispatch('list/filterList', value.value)
    }
    const searchItems = useDebounce(() => {
      filterList()
    }, 500)

    return { value, searchItems }
  },
}
</script>
