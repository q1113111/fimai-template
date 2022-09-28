<template>
  <main>
    <nav class="fixed flex flex-col h-full p-4 space-y-4 font-semibold text-white bg-slate-600">
      <a href="#color">Color</a>
      <a href="#fontSize">fontSize</a>
      <a href="#icon">Icon</a>
      <a href="#button">Button</a>
    </nav>
    <div class="p-16 ml-20">
      <section class="pb-4 border-b border-solid border-neutral-500">
        <h1 class="mb-4 text-3xl font-semibold ">
          Button
        </h1>
        <div class="flex items-center space-x-6 ">
          <BaseBtn
            before-icon="cog"
            label="button"
            rounded="rounded-md"
          />
          <Code />
        </div>
      </section>
    </div>
  </main>
</template>
<script setup>
import Code from './components/Code.vue'

const buttonCode = {

}
</script>
