<template>
  <div class="p-16 ml-20">
    <section class="pb-4">
      <h1 class="mb-4 text-3xl font-semibold ">
        Icon
      </h1>
      <Icon
        name="cog"
        size="w-5 h-5"
        color="text-teal-600"
      />
      <div class="inline-block pr-5 mt-5 bg-neutral-800 text-amber-500">
        <pre><code>
  <span class="text-indigo-500">&lt;<span class=" text-rose-500">Icon</span></span>
     <span>name<span class="text-sky-500">=</span><span class="text-teal-500">"cog"</span></span>
     <span>size<span class="text-sky-500">=</span><span class="text-teal-500">"w-5 h-5"</span></span>
     <span>color<span class="text-sky-500">=</span><span class="text-teal-500">"text-teal-600"</span></span>
  <span class="text-indigo-500">/&gt;</span>
</code>
</pre>
      </div>
      <DetailTable :table-data="attributesTable" />
      <DetailTable :table-data="slotsTable" />
      <DetailTable :table-data="eventTable" />
      <DetailTable :table-data="methodTable" />
    </section>
  </div>
</template>
<script setup>
import DetailTable from '../DetailTable.vue'
import { attributesArr, slotsArr, eventsArr, methodArr } from '../utils'

const attributesTable = {
  title: 'Attributes',
  theadArr: attributesArr,
  list: [
    { item: ['name', '圖示名稱', 'string', '-', 'required'] },
    { item: ['size', '圖示大小', 'string', 'class', 'w-6 h-6'] },
    { item: ['color', '圖示顏色', 'string', 'class', 'text-hint'] },
    { item: ['disable', '禁止', 'boolean', '-', 'false'] },
    { item: ['disableColor', '禁止顏色', 'string', 'class', 'text-load'] },
    { item: ['iconClass', '圖示樣式客製', 'string', 'class', '-'] }
  ]
}

const slotsTable = {
  title: 'Slots',
  theadArr: slotsArr,
  list: [
    { item: ['-', '-'] }
  ]
}

const eventTable = {
  title: 'Event',
  theadArr: eventsArr,
  list: [
    { item: ['-', '-', '-'] }
  ]
}

const methodTable = {
  title: 'method',
  theadArr: methodArr,
  list: [
    { item: ['-', '-', '-'] }
  ]
}
</script>
