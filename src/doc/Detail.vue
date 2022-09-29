<template>
  <main>
    <nav class="fixed flex flex-col h-full p-4 space-y-4 font-semibold text-white bg-slate-600">
      <button
        v-for="(btn,i) of btnArr"
        :key="i"
        @click="btn.handler"
      >
        {{ btn.label }}
      </button>
    </nav>
    <component :is="components[is]" />
  </main>
</template>
<script setup>
import { ref } from 'vue'
import BaseBtn from './components/DbaseBtn.vue'
import Icon from './components/DIcon.vue'
// const components = ref(BaseBtn)
const components = {
  BaseBtn,
  Icon
}
const is = ref('BaseBtn')
const btnArr = [
  {
    label: 'BaseBtn',
    handler: () => { is.value = 'BaseBtn' }
  },
  {
    label: 'Icon',
    handler: () => { is.value = 'Icon' }
  }
]
</script>
