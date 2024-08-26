<script setup lang="ts">
import TextSection from '@/components/textGrid/TextSection.vue'
import type { Section } from '@/interfaces/sections'
defineProps<{ sections: Array<Section> }>()
</script>
<template>
  <section class="text-grid">
    <TextSection
      v-for="(section, index) in sections"
      :key="index"
      v-bind="{
        image: section.IMAGE,
        title: section.TITLE,
        description: section.DESCRIPTION,
      }"
    />
  </section>
</template>

<style scoped lang="scss">
.text-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  @include responsive(37.5rem) {
    grid-template-columns: 1fr;
  }
}
</style>
