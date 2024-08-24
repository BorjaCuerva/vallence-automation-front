<script setup lang="ts">
import SeparatorBar from '@/components/separatorBar/SeparatorBar.vue'
import CardsBlock from '@/components/cardsGrid/CardsBlock.vue'
import TheHero from '@/components/TheHero.vue'
import InfoBlock from '@/components/InfoBlock.vue'
</script>
<template>
  <div :style="{ margin: '2rem' }"></div>
  <TheHero />
  <SeparatorBar />
  <CardsBlock />
  <InfoBlock />
</template>

<!-- <style scoped lang="scss"></style> -->
