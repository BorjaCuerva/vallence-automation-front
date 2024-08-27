<script setup lang="ts">
defineProps<{
  image: string
  alternativeText: string
}>()
</script>
<template>
  <div class="relative md:basis-1/2">
    <NuxtImg
      :alt="alternativeText"
      class="w-full shadow-lg bg-gray-400 dark:bg-slate-700 md:h-full inset-0 md:absolute object-cover object-top rounded-md"
      loading="lazy"
      :src="image"
      crossorigin="anonymous"
      decoding="async"
      height="768"
      referrerpolicy="no-referrer"
      style="
        object-fit: cover;
        object-position: center;
        max-width: 100%;
        max-height: 100%;
      "
      width="432"
    />
  </div>
</template>
