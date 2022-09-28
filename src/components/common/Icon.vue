<template>
  <svg :class="[iconClass,size,useColors]">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'w-6 h-6'
  },
  color: {
    type: String,
    default: 'text-hint dark:text-regular'
  },
  disable: {
    type: Boolean,
    default: false
  },
  disableColor: {
    type: String,
    default: 'text-load dark:text-disable-dark'
  },
  iconClass: {
    type: String,
    default: ''
  }
})
const useColors = computed(() => props.disable ? props.disableColor : props.color)
</script>
