<script setup lang="ts"></script>
<template>
  <section class="relative not-prose scroll-mt-[72px]">
    <div class="inset-0 absolute pointer-events-none -z-[1]" aria-hidden="true">
      <div class="inset-0 absolute"></div>
    </div>
    <div
      class="relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-5xl"
    >
      <div class="flex flex-col md:flex-row gap-8 md:gap-12">
        <div class="md:basis-1/2 md:py-4 md:self-center">
          <StepsStepTitle :title="$t('STEPS.TITLE')" />
          <StepsTimeLine />
        </div>
        <StepsImage
          :image="$t('STEPS.IMAGE.SRC')"
          :alternative-text="$t('STEPS.IMAGE.ALT')"
        />
      </div>
    </div>
  </section>
</template>
