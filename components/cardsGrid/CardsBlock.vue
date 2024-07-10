<script setup lang="ts">
import HeadederOfGrid from './HeaderOfGrid.vue'
import CardsGrid from './CardsGrid.vue'
</script>
<template>
  <section class="grid-block">
    <HeadederOfGrid />
    <CardsGrid />
  </section>
</template>

<style scoped lang="scss">
.grid-block {
  padding: 0 9.4688rem;
  display: grid;
  gap: 3.75rem;
}
</style>
