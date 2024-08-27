<script setup lang="ts">
import SeparatorBar from '@/components/separatorBar/SeparatorBar.vue'
import CardsBlock from '@/components/cardsGrid/CardsBlock.vue'
import TextGridBlock from '@/components/textGrid/TextGridBlock.vue'
import TheHero from '@/components/TheHero.vue'
import InfoBlock from '@/components/InfoBlock.vue'
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

const SECTIONSFAQ = [
  {
    TITLE: 'Why AstroWind?',
    DESCRIPTION:
      "Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels.",
  },
  {
    TITLE: 'How to install the Astro + Tailwind CSS template?',
    DESCRIPTION:
      "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows.",
  },
  {
    TITLE: 'What is something that you would like to try again?',
    DESCRIPTION:
      "A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in.",
  },
  {
    TITLE: 'What do I need to start?',
    DESCRIPTION:
      'Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
  },
  {
    TITLE: "What's something that you don't understand?",
    DESCRIPTION:
      "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear.",
  },
  {
    TITLE:
      'If you could only ask one question to each person you meet, what would that question be?',
    DESCRIPTION:
      "This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know. About four years. I got tired of hearing how young I looked.",
  },
]
</script>
<template>
  <div :style="{ margin: '2rem' }"></div>
  <TheHero />
  <TextGridBlock
    :sections="SECTIONS"
    :header-data="{
      preTitle: $t('TEXT_GRID.PRE_TITLE'),
      title: $t('TEXT_GRID.TITLE'),
      postTitle: $t('TEXT_GRID.POST_TITLE'),
    }"
  />
  <SeparatorBar />
  <CardsBlock />
  <InfoBlock />
  <TextGridBlock
    :sections="SECTIONSFAQ"
    :header-data="{
      preTitle: $t('FAQS_GRID.PRE_TITLE'),
      title: $t('FAQS_GRID.TITLE'),
      postTitle: $t('FAQS_GRID.POST_TITLE'),
    }"
  />
  <Steps />
</template>

<!-- <style scoped lang="scss"></style> -->
