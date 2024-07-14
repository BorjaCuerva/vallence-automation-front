<script lang="ts" setup>
const MainNavar = defineAsyncComponent(() => import('@/components/common/MainNavbar.vue'))
</script>

<template>
  <section>
    <MainNavar />
    <slot />
  </section>
</template>
