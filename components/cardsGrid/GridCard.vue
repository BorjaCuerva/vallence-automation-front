<script setup lang="ts">
import GreenCheck from '@/components/svg/GreenCheck.vue'
</script>
<template>
  <article class="card">
    <div class="card__icon">
      <GreenCheck></GreenCheck>
    </div>
    <h3 class="card__title">Features</h3>
    <p class="card__description">
      Where websites strut their stuff and show off superpowers. No holding back on the
      bragging rights here!
    </p>
  </article>
</template>

<style scoped lang="scss">
.card {
  @include flex(column, flex-start);
  padding: 1.5rem;
  border-radius: 0.625rem;
  background-color: map.get($catalina-blue, 900);

  &__icon {
    margin-bottom: 1.5rem;
    width: 5rem;
  }
  &__title {
    font-weight: bold;
    font-size: 1.5625rem;
    letter-spacing: -0.0313rem;
    line-height: 2.1875rem;
  }
  &__description {
    font-size: 1.25rem;
    letter-spacing: -0.0313rem;
    line-height: 1.875rem;
  }
}
</style>
