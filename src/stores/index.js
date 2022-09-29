import { createPinia, defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'
import storeReset from './plugins/storeReset'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const settings = reactive({
    dates: new Set()
  })
  const doubleCount = computed(() => count.value * 2)
  function increment (v) {
    count.value++
    settings.dates.add(v)
  }

  return { count, doubleCount, settings, increment }
})

const store = createPinia()
store.use(storeReset)

export default store
