<template>
  <div class="mt-10">
    <h1 class="text-3xl text-neutral-500">
      {{ tableData.title }}
    </h1>
    <table class="text-center">
      <thead>
        <tr>
          <th
            v-for="(thead,i) of tableData.theadArr"
            :key="i"
            class="p-4 border-b border-solid border-neutral-300"
          >
            {{ thead }}
          </th>
        </tr>
      </thead>
      <tbody class="text-base ">
        <tr
          v-for="(list,j) of tableData.list"
          :key="j"
        >
          <td
            v-for="(item,i) of list.item"
            :key="i"
            class="px-4 py-3 border-b border-solid border-neutral-300"
          >
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
defineProps({
  tableData: {
    type: Object,
    required: true
  }
})
</script>
