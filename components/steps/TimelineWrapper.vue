<script setup lang="ts">
defineProps<{
  numberStep: string
  title?: string
  description?: string
  icon: string
}>()
</script>
<template>
  <div class="flex">
    <div class="flex items-center rtl:mr-0 flex-col mr-4 rtl:ml-4">
      <div>
        <div class="flex justify-center items-center">
          <svg
            class="text-primary border-solid border-2 border-primary dark:border-catalina-blue-700 dark:text-slate-200 h-10 p-2 rounded-full w-10"
            :data-icon="icon"
            height="1em"
            viewBox="0 0 24 24"
            width="1em"
          >
            <symbol :id="`ai:${icon}`">
              <path
                d="m12 3l8 4.5v9L12 21l-8-4.5v-9zm0 9l8-4.5M12 12v9m0-9L4 7.5m12-2.25l-8 4.5"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </symbol>
            <use :xlink:href="`#ai:${icon}`"></use>
          </svg>
        </div>
      </div>
      <div class="bg-black/10 dark:bg-slate-400/50 h-full w-px"></div>
    </div>
    <div class="pt-1 pb-8">
      <p class="font-bold text-xl">
        {{ numberStep }}
        <span v-if="title" class="font-medium">{{ title }}</span>
      </p>
      <p v-if="description" class="text-muted mt-2">
        {{ description }}
      </p>
    </div>
  </div>
</template>
