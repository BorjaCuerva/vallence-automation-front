<script setup lang="ts">
defineProps<{ preTitle: string; title: string; postTitle?: string }>()
</script>
<template>
  <header class="header-grid">
    <span class="header-grid__pre-title" v-if="preTitle">{{ preTitle }}</span>
    <h2 class="header-grid__title" v-if="title">{{ title }}</h2>
    <span class="header-grid__post-title" v-if="postTitle">{{ postTitle }} </span>
  </header>
</template>

<style scoped lang="scss">
.header-grid {
  @include flex(column);
  &__pre-title {
    color: map.get($atlantis, 500);
    letter-spacing: 0.0313rem;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
  &__title {
    font-size: 2.8125rem;
    font-weight: bold;
    letter-spacing: -0.1406rem;
    line-height: 3.125rem;
  }
  &__post-title {
    font-size: 1.5625rem;
    margin-top: 1.25rem;
    letter-spacing: -0.0313rem;
  }
}
</style>
