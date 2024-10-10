<script setup lang="ts">
import GridCard from './GridCard.vue'
const IMAGES = [
  '/images/pexels-hyundaimotorgroup-19233057.jpg',
  '/images/pexels-hyundaimotorgroup-19319639.jpg',
  '/images/pexels-ludodelot-18471441.jpg',
  '/images/pexels-ludodelot-18471537.jpg',
  '/images/pexels-ludodelot-18471551.jpg',
  '/images/pexels-pavel-danilyuk-8438918.jpg',
  '/images/pexels-pavel-danilyuk-8439008.jpg',
  '/images/pexels-pavel-danilyuk-8439093.jpg',
]
</script>
<template>
  <section class="cards-grid">
    <GridCard v-for="IMAGE in IMAGES" :image="IMAGE" />
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
