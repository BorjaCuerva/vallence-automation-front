<script setup></script>
<template>
  <section class="relative not-prose">
    <div class="inset-0 absolute pointer-events-none" aria-hidden="true"></div>
    <div class="relative mx-auto px-4 max-w-7xl sm:px-6">
      <div class="pointer-events-none md:pt-[4.75rem] pt-0"></div>
      <div class="md:py-20 py-12">
        <div class="mx-auto max-w-5xl md:pb-16 pb-10 text-center">
          <h1
            class="font-bold font-heading leading-tighter tracking-tighter mb-4 dark:text-gray-200 md:text-6xl text-5xl"
          >
            {{ $t('HERO.TITLE') }}
          </h1>
          <div class="mx-auto max-w-3xl">
            <p class="text-muted text-xl dark:text-slate-300 mb-6">
              {{ $t('HERO.SUBTITLE') }}
            </p>
            <div
              class="flex flex-col flex-nowrap gap-4 m-auto max-w-xs sm:flex-row sm:justify-center sm:max-w-md"
            ></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </section>
</template>
