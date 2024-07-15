<script setup lang="ts">
import SeparatorBar from '@/components/separatorBar/SeparatorBar.vue'
import CardsBlock from '@/components/cardsGrid/CardsBlock.vue'
</script>
<template>
  <div :style="{ margin: '2rem' }">{{ $t('PRINCIPAL_TITLE') }}</div>
  <SeparatorBar />
  <CardsBlock />
</template>

<!-- <style scoped lang="scss"></style> -->
