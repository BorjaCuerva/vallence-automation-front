<script setup>
import LogoSvg from '../svg/LogoSvg.vue'
</script>
<template>
  <div
    class="mx-auto left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 md:px-6 text-default rounded-2xl mt-10 fixed max-w-6xl md:grid md:grid-cols-3 md:items-center px-3 py-3 w-full bg-white dark:bg-gray-800 dark:text-white"
  >
    <div class="flex justify-between">
      <NuxtLink href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <LogoSvg />
      </NuxtLink>
    </div>
    <nav
      aria-label="Main navigation"
      class="items-center md:w-auto w-full hidden md:flex md:justify-self-center md:mx-5 md:overflow-x-auto md:overflow-y-visible overflow-x-hidden overflow-y-auto text-default"
    ></nav>
    <div
      class="items-center md:w-auto w-full hidden md:flex bottom-0 fixed justify-end left-0 md:justify-self-end md:mb-0 md:p-0 md:self-center md:static p-3 rtl:left-auto rtl:right-0"
    >
      <div class="flex items-center justify-between md:w-auto w-full">
        <span class="rtl:ml-0 ml-4 rtl:mr-4"
          ><NuxtLink
            to="/contacto"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            {{ $t('NAVBAR.CONTACT') }}
          </NuxtLink></span
        >
      </div>
    </div>
  </div>
</template>
