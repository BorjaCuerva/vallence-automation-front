<script setup lang="ts">
type Step = {
  TITLE: string
  DESCRIPTION?: string
  ICON: string
}
const { tm } = useI18n()

const steps: Step[] = tm('STEPS.ITEMS')
</script>
<template>
  <section>
    <StepsTimelineWrapper
      v-for="{ ICON, TITLE, DESCRIPTION } in steps"
      :key="$rt(ICON)"
      :description="DESCRIPTION && $rt(DESCRIPTION)"
      :icon="$rt(ICON)"
      :number-step="$rt(TITLE[0])"
      :title="TITLE[1] && $rt(TITLE[1])"
    />
  </section>
</template>
