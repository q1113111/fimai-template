<template>
  <div class="p-16 ml-20">
    <section class="pb-4">
      <h1 class="mb-4 text-3xl font-semibold ">
        BaseBtn
      </h1>
      <BaseBtn
        before-icon="cog"
        label="button"
        rounded="rounded-md"
      />
      <div class="inline-block pr-5 mt-5 bg-neutral-800 text-amber-500">
        <pre><code>
  <span class="text-indigo-500">&lt;<span class=" text-rose-500">BaseBtn</span></span>
     <span>before-icon<span class="text-sky-500">=</span><span class="text-teal-500">"cog"</span></span>
     <span>label<span class="text-sky-500">=</span><span class="text-teal-500">"button"</span></span>
     <span>rounded<span class="text-sky-500">=</span><span class="text-teal-500">"rounded-md"</span></span>
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
    { item: ['height', '按鈕高度', 'string', 'class', 'h-10'] },
    { item: ['color', '按鈕顏色', 'string', 'class', 'text-white'] },
    { item: ['rounded', '按鈕圓角', 'string', 'class', 'rounded-full'] },
    { item: ['size', '按鈕大小', 'string', 'small/default/large', 'default'] },
    { item: ['label', '按鈕名稱', 'string', '-', '-'] },
    { item: ['beforeIcon', '前方圖示', 'string', '-', '-'] },
    { item: ['afterIcon', '後方圖示', 'string', '-', '-'] },
    { item: ['type', '按鈕種類', 'string', 'primary/secondary/error/default/disable', 'primary'] }
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
