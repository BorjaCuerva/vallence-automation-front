<script setup lang="ts">
import WhatsappIcon from '@/components/svg/WhatsappIcon.vue'
const phone = '34919996507'
const message = '¿Busca una pieza de automatización y control?'
</script>
<template>
  <a
    class="fixed bottom-16 right-10 cursor-pointer hover:scale-110 transition duration-200"
    :href="`https://wa.me/${phone}?text=${message}`"
    rel="noopener noreferrer"
    target="_blank"
    title="Bot de WhatsApp"
  >
    <WhatsappIcon />
  </a>
</template>
