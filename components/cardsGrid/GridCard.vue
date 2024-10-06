<script setup lang="ts">
import GreenCheck from '@/components/svg/GreenCheck.vue'
defineProps<{ image: string }>()
</script>
<template>
  <article :style="`background-image: url('${image}')`" class="card"></article>
</template>

<style scoped lang="scss">
.card {
  background-repeat: no-repeat;
  background-size: cover;
  @include flex(column, flex-start);
  padding: 1.5rem;
  border-radius: 0.625rem;
  background-color: map.get($catalina-blue, 900);
  min-height: 20em;

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
