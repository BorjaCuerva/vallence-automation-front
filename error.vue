<template>
  <div class="grid h-screen place-content-center bg-white px-4">
    <div class="text-center">
      <h2 class="text-9xl font-black text-gray-200">404</h2>
      <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">¡¡Oh no!!</p>
      <p class="mt-4 text-gray-500">{{ $t('ERROR.NOT_FOUND') }}</p>

      <NuxtLink
        :to="'/'"
        class="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
      >
        {{ $t('ERROR.BUTTON') }}
      </NuxtLink>
    </div>
  </div>
</template>
