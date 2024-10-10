<script setup lang="ts">
import HeaderOfGrid from '@/components/common/HeaderOfGrid.vue'
import CardsGrid from './CardsGrid.vue'
</script>
<template>
  <section class="grid-block">
    <HeaderOfGrid
      v-bind="{
        preTitle: '',
        title: 'Marcas',
        postTitle: '',
      }"
    />
    <CardsGrid />
  </section>
</template>

<style scoped lang="scss">
.grid-block {
  padding: 0 9.4688rem;
  display: grid;
  gap: 3.75rem;
  margin: 0 0 4em;

  @include responsive() {
    padding: 0 1em;
    grid-template-columns: repeat(auto-fill, minmax(20.625em, 1fr));
  }
}
</style>
