<script setup lang="ts">
import WhatsappIcon from '@/components/svg/WhatsappIcon.vue'
const phone = ''
const message = ''
</script>
<template>
  <a
    class="fixed bottom-3 right-3 cursor-pointer hover:scale-110 transition duration-200"
    :href="`https://wa.me/${phone}?text=${message}`"
    rel="noopener noreferrer"
    target="_blank"
    title="Bot de WhatsApp"
  >
    <WhatsappIcon />
  </a>
</template>
