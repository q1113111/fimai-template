<template>
  <button
    class="flex items-center"
    :class="[height,spacing,btnColor,rounded,color]"
  >
    <Icon
      v-show="beforeIcon"
      size="w-5 h-5"
      :name="beforeIcon"
      class="mr-2"
    />
    <p class="text-base ">
      {{ label }}
    </p>
    <Icon
      v-show="afterIcon"
      size="w-5 h-5"
      :name="afterIcon"
      class="ml-2"
    />
  </button>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  height: {
    type: String,
    default: 'h-10'
  },
  color: {
    type: String,
    default: 'text-white'
  },
  rounded: {
    type: String,
    default: 'rounded-full'
  },
  size: {
    type: String,
    default: 'default'
  },
  label: {
    type: String,
    default: ''
  },
  beforeIcon: {
    type: String,
    default: ''
  },
  afterIcon: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'primary'
  }
})
const spacing = computed(() => {
  return {
    large: 'px-6',
    default: 'px-5',
    small: 'px-3'
  }[props.size]
})

const btnColor = computed(() => {
  return {
    primary: 'bg-teal-600 hover:bg-teal-800',
    secondary: 'bg-sky-600 hover:bg-sky-800',
    error: 'bg-rose-600 hover:bg-rose-800',
    default: 'text-black hover:bg-neutral-400 hover:text-white',
    disable: 'bg-neutral-400 text-neutral-700 pointer-events-none'
  }[props.type]
})
</script>
