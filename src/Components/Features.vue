<script>
import { ref, onMounted } from 'vue'

const revealObservers = new WeakMap()
const floatAnimations = new WeakMap()

const vReveal = {
  mounted(el, binding) {
    if (binding.value === false) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    Object.assign(el.style, {
      opacity: '0',
      transform: 'translateY(18px)',
      transition: 'opacity 0.7s ease, transform 0.7s ease',
    })
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      el.style.opacity = '1'
      el.style.transform = 'none'
      io.disconnect()
    }, { threshold: 0.2 })
    revealObservers.set(el, io)
    io.observe(el)
  },
  unmounted(el) {
    revealObservers.get(el)?.disconnect()
    revealObservers.delete(el)
  },
}

const vFloat = {
  mounted(el, binding) {
    if (binding.value === false) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof el.animate !== 'function') return
    const animation = el.animate(
      [{ transform: 'translateY(0)' }, { transform: 'translateY(-12px)' }, { transform: 'translateY(0)' }],
      { duration: 6000, iterations: Infinity, easing: 'ease-in-out' },
    )
    floatAnimations.set(el, animation)
  },
  unmounted(el) {
    floatAnimations.get(el)?.cancel()
    floatAnimations.delete(el)
  },
}

export default {
  emits: ['start'],
  directives: {
    reveal: vReveal,
    float: vFloat,
  },
  setup(_props, { emit }) {

const features = [
  {
    key: 'mood', icon: 'mdi-pulse', title: 'Mood Tracking',
    text: 'Record how you feel and monitor changes over time.',
    shots: [
      { src: '/image/mock2.png', caption: 'Start a check-in' },
      { src: '/image/mock3.png', caption: 'Choose how you feel' },
      { src: '/image/mock4.png', caption: 'Add a note and save' },
    ],
  },
  {
    key: 'progress', icon: 'mdi-chart-line', title: 'Mental Health Progress',
    text: 'A clear view of patterns and progress in your emotional wellbeing.',
    shots: [{ src: '/image/mock5.png', caption: 'Your patterns over time' }],
  },
  {
    key: 'journal', icon: 'mdi-notebook-outline', title: 'Thought and Emotion Journaling',
    text: 'A private space for thoughts, emotions, experiences and reflections.',
    shots: [
      { src: '/features/journal-1.png', caption: 'Your entries' },
      { src: '/features/journal-2.png', caption: 'Write a new entry' },
    ],
  },
  {
    key: 'connect', icon: 'mdi-message-text-outline', title: 'Professional Connection',
    text: 'Stay connected with your mental health professional between sessions.',
    shots: [
      { src: '/features/connect-1.png', caption: 'Your care team' },
      { src: '/features/connect-2.png', caption: 'Message between sessions' },
    ],
  },
  {
    key: 'insights', icon: 'mdi-chart-donut', title: 'Progress Insights',
    text: 'Mood and wellbeing data turned into simple visual insights.',
    shots: [{ src: '/features/insights-1.png', caption: 'Insights at a glance' }],
  },
  {
    key: 'care', icon: 'mdi-heart-pulse', title: 'Consistent Care',
    text: 'Professionals see how a patient has been doing, so each session continues where the last one ended.',
    shots: [{ src: '/features/care-1.png', caption: 'What your professional sees' }],
  },
]

const sections = [
  { id: 'hero', type: 'hero' },
  { id: 'showcase', type: 'showcase', soft: true },
]

const active = ref('mood')
const step = ref(0)

const shotsFor = (s) => (s.type === 'hero' ? [{ src: '/image/mock1.png' }] : features.find((f) => f.key === active.value).shots)
const shotOf = (s) => shotsFor(s)[s.type === 'hero' ? 0 : step.value]

const ready = ref(false)
onMounted(() => setTimeout(() => (ready.value = true), 100))

    return { emit, features, sections, active, step, shotsFor, shotOf, ready }
  },
}
</script>

<template>
  <div class="text-body-1 text-primary overflow-x-hidden">
    <v-sheet
      v-for="s in sections"
      :key="s.id"
      tag="section"
      :color="s.soft ? 'secondary' : 'white'"
      :class="['py-16', { 'text-white': s.soft }]"
    >
      <v-container class="py-md-8">
        <v-row align="center" justify="center">
          <!-- TEXT -->
          <v-col cols="12" :md="s.soft ? 5 : 6" :class="s.soft ? 'order-2 order-md-1' : 'text-center text-md-left'">
            <v-slide-y-transition v-if="!s.soft">
              <div v-if="ready">
                <h1 class="text-h4 text-md-h3 text-lg-h2 font-weight-bold">Everything you need to stay connected to your mental wellbeing.</h1>
                <p class="mt-5 text-h6 font-weight-regular text-secondary">MoodBridge brings everyday mental health tracking, reflection, and professional support into one connected experience.</p>
              </div>
            </v-slide-y-transition>

            <div v-else v-reveal>
              <h2 class="mb-6 text-h5 text-md-h4 font-weight-bold">See how it works</h2>
              <v-list bg-color="transparent" class="pa-0">
                <v-list-item
                  v-for="f in features"
                  :key="f.key"
                  rounded="xl"
                  class="mb-2 px-4 py-3"
                  :class="active === f.key ? 'bg-white text-primary' : 'text-white'"
                  :elevation="active === f.key ? 8 : 0"
                  @click="active = f.key; step = 0"
                >
                  <template #prepend><v-icon :color="active === f.key ? 'buttons' : 'white'">{{ f.icon }}</v-icon></template>
                  <v-list-item-title class="font-weight-semibold">{{ f.title }}</v-list-item-title>
                  <v-expand-transition>
                    <div v-show="active === f.key" class="mt-1 text-body-2 text-wrap text-primary">{{ f.text }}</div>
                  </v-expand-transition>
                </v-list-item>
              </v-list>
            </div>
          </v-col>

          <!-- PHONE -->
          <v-col cols="12" md="5" class="d-flex justify-center" :class="{ 'order-1 order-md-2': s.soft }">
            <v-scale-transition>
              <div v-if="s.soft || ready" class="d-flex flex-column align-center">
                <v-sheet v-float="!s.soft" color="#1c2523" width="280" class="pa-2 position-relative elevation-12" style="border-radius: 44px">
                  <v-fade-transition mode="out-in">
                    <v-img :key="shotOf(s).src" :src="shotOf(s).src" :aspect-ratio="9 / 19" cover position="top center" style="border-radius: 34px">
                      <template #error>
                        <div class="d-flex flex-column align-center justify-center h-100 pa-6 text-caption text-center text-secondary border-md border-dashed rounded-xl">
                          <v-icon size="28">mdi-image-plus-outline</v-icon>{{ shotOf(s).src }}
                        </div>
                      </template>
                    </v-img>
                  </v-fade-transition>
                  <v-sheet color="#1c2523" width="80" height="22" class="position-absolute top-0 left-0 right-0 mx-auto mt-5 rounded-lg" />
                </v-sheet>

                <div v-if="shotsFor(s).length > 1" class="d-flex ga-2 mt-6">
                  <v-btn
                    v-for="(_, n) in shotsFor(s)"
                    :key="n"
                    :width="n === step ? 26 : 9"
                    :color="n === step ? 'buttons' : 'secondary'"
                    :aria-label="`Step ${n + 1}`"
                    height="9"
                    min-width="0"
                    rounded="pill"
                    class="pa-0"
                    @click="step = n"
                  />
                </div>
                <v-fade-transition mode="out-in">
                  <p v-if="shotOf(s).caption" :key="shotOf(s).src" class="mt-3 text-body-2 text-center text-secondary">{{ shotOf(s).caption }}</p>
                </v-fade-transition>
              </div>
            </v-scale-transition>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- CTA -->
    <v-sheet tag="section" color="white" class="py-16 text-primary">
      <v-container class="py-8 text-center">
        <div v-reveal>
          <h2 class="text-h4 text-md-h3 font-weight-bold">Your mental health deserves continuity.</h2>
          <v-responsive max-width="520" class="mx-auto mt-4">
            <p class="text-h6 font-weight-regular text-secondary">Discover a more connected way to understand your progress and stay engaged with your care.</p>
          </v-responsive>
          <div class="d-flex flex-wrap justify-center ga-3 mt-8">
            <v-btn class="text-none" color="buttons" size="x-large" rounded="xl" variant="outlined" @click="emit('start')">Get Started</v-btn>
          </div>
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>