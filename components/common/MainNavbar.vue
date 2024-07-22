<script setup lang="ts">
import { STORE_SLUGS } from '@/constants/navbarItem'
</script>
<template>
  <nav class="dark:bg-black fixed w-full z-20 top-0 start-0 border-b">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <NuxtImg
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Vallence automation"
        />
      </NuxtLink>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:dark:bg-black"
        >
          <li v-for="links in STORE_SLUGS">
            <NuxtLink
              :to="links.slug"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              {{ links.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
