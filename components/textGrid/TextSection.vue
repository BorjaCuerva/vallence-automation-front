<script setup lang="ts">
import GreenCheck from '@/components/svg/GreenCheck.vue'
defineProps<{ image: string; title: string; description: string }>()
</script>
<template>
  <article class="text-section">
    <div class="text-section__image">
      <GreenCheck></GreenCheck>
    </div>
    <div class="text-section__texts">
      <h2 class="text-section__title">{{ title }}</h2>
      <p class="text-section__description">{{ description }}</p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.text-section {
  @include flex($align_items: flex-start);
  gap: 1em;
  &__image {
    min-width: 4em;
    max-width: 4em;
  }
  &__texts {
    @include flex(column);
    gap: 1em;
  }
  &__title {
    width: 100%;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: -0.1406rem;
    line-height: 3.125rem;
    color: map.get($atlantis, 500);
    text-wrap: pretty;
  }
  &__description {
    width: 100%;
    font-size: 1.25rem;
    letter-spacing: -0.0313rem;
    text-wrap: pretty;
  }
}
</style>
