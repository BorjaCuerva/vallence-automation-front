<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
<template>
  <div class="mb-8 md:mb-12 md:mx-auto rtl:text-right text-left">
    <h2
      class="font-bold font-heading leading-tighter tracking-tighter text-heading text-3xl lg:text-4xl"
    >
      {{ title }}
    </h2>
  </div>
</template>
