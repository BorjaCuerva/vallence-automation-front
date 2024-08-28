<script setup lang="ts">
import SeparatorBar from '@/components/separatorBar/SeparatorBar.vue'
import CardsBlock from '@/components/cardsGrid/CardsBlock.vue'
import TextGridBlock from '@/components/textGrid/TextGridBlock.vue'
import TheHero from '@/components/TheHero.vue'
import InfoBlock from '@/components/InfoBlock.vue'
import type { Section } from '@/interfaces/sections'

const { tm } = useI18n()

const SECTIONSFAQ = computed(() => tm('FAQS_GRID.SECTIONS') as Section[])
const SECTIONS = computed(() => tm('TEXT_GRID.SECTIONS') as Section[])
</script>
<template>
  <div :style="{ margin: '2rem' }"></div>
  <TheHero />
  <TextGridBlock
    :sections="SECTIONS"
    :header-data="{
      preTitle: $t('TEXT_GRID.PRE_TITLE'),
      title: $t('TEXT_GRID.TITLE'),
      postTitle: $t('TEXT_GRID.POST_TITLE'),
    }"
  />
  <SeparatorBar />
  <CardsBlock />
  <InfoBlock />
  <TextGridBlock
    :sections="SECTIONSFAQ"
    :header-data="{
      preTitle: $t('FAQS_GRID.PRE_TITLE'),
      title: $t('FAQS_GRID.TITLE'),
      postTitle: $t('FAQS_GRID.POST_TITLE'),
    }"
  />
  <Steps />
</template>

<!-- <style scoped lang="scss"></style> -->
