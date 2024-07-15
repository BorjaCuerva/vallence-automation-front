<script lang="ts" setup>
import WhatsappBot from '@/components/common/WhatsappBot.vue'
const MainNavar = defineAsyncComponent(() => import('@/components/common/MainNavbar.vue'))
</script>

<template>
  <section>
    <MainNavar />
    <slot />
    <WhatsappBot />
  </section>
</template>
