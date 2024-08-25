<script setup lang="ts">
import HeaderOfGrid from '@/components/common/HeaderOfGrid.vue'
import TextGrid from '@/components/textGrid/TextGrid.vue'
</script>
<template>
  <section class="grid-block">
    <HeaderOfGrid
      v-bind="{
        preTitle: $t('TEXT_GRID.PRE_TITLE'),
        title: $t('TEXT_GRID.TITLE'),
        postTitle: $t('TEXT_GRID.POST_TITLE'),
      }"
    />
    <TextGrid class="grid-block__grid" />
  </section>
</template>

<style scoped lang="scss">
.grid-block {
  padding: 0 9.4688rem;
  @include responsive() {
    padding: 0 1em;
  }
  &__grid {
    margin: 3em 0;
  }
}
</style>
