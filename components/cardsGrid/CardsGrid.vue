<script setup lang="ts">
import GridCard from './GridCard.vue'
</script>
<template>
  <section class="cards-grid">
    <GridCard v-for="i in 9" />
  </section>
</template>

<style scoped lang="scss">
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.875rem;
  @include responsive(77.5rem) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include responsive(37.5rem) {
    grid-template-columns: 1fr;
  }
}
</style>
