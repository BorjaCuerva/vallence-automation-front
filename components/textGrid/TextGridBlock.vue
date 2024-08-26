<script setup lang="ts">
import HeaderOfGrid from '@/components/common/HeaderOfGrid.vue'
import TextGrid from '@/components/textGrid/TextGrid.vue'
defineProps<{ sections: object; headerData: object }>()
</script>
<template>
  <section class="grid-block">
    <HeaderOfGrid v-bind="headerData" />
    <TextGrid class="grid-block__grid" :sections="sections" />
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
