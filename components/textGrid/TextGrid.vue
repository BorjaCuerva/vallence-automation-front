<script setup lang="ts">
import TextSection from '@/components/textGrid/TextSection.vue'

const SECTIONS = [
  {
    IMAGE: '1',
    TITLE: 'Astro + Tailwind CSS Integration',
    DESCRIPTION:
      'A seamless integration between two great frameworks that offer high productivity, performance and versatility.',
  },
  {
    IMAGE: '2',
    TITLE: 'Ready-to-use Components',
    DESCRIPTION:
      'Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...',
  },
  {
    IMAGE: '3',
    TITLE: 'Best Practices',
    DESCRIPTION:
      'Creating secure, efficient, and user-friendly websites that deliver exceptional experiences and lasting value.',
  },
  {
    IMAGE: '4',
    TITLE: 'Excellent Page Speed',
    DESCRIPTION:
      'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
  },
  {
    IMAGE: '5',
    TITLE: 'Search Engine Optimization (SEO)',
    DESCRIPTION:
      "SEO lies in its ability to enhance a website's visibility, driving organic traffic and enabling it to reach a wider audience.",
  },
  {
    IMAGE: '6',
    TITLE: 'Open to new ideas and contributions',
    DESCRIPTION:
      'Embracing a culture that is open to new ideas and contributions is integral fostering innovation, collaboration, and a dynamic user experience.',
  },
]
</script>
<template>
  <section class="text-grid">
    <TextSection
      v-for="(section, index) in SECTIONS"
      :key="index"
      v-bind="{
        image: section.IMAGE,
        title: section.TITLE,
        description: section.DESCRIPTION,
      }"
    />
  </section>
</template>

<style scoped lang="scss">
.text-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  @include responsive(37.5rem) {
    grid-template-columns: 1fr;
  }
}
</style>
