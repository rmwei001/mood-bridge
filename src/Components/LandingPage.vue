<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue'
import { VParallax } from 'vuetify/components'

const inputValue = ref('')
const year = new Date().getFullYear()

const visible = reactive({
  why: [false, false, false, false],
  info: [false, false, false, false],
})

const revealOptions = { threshold: 0.2 }

function showCards(group, isIntersecting) {
  visible[group].forEach((_, i) => {
    const delay = isIntersecting ? i * 150 : 0
    setTimeout(() => {
      visible[group][i] = isIntersecting
    }, delay)
  })
}

const onWhyScroll = (isIntersecting) => showCards('why', isIntersecting)
const onInfoScroll = (isIntersecting) => showCards('info', isIntersecting)

const partners = [
  'Chiromo',
  'CBT kenya',
  'Nairobi Hospital',
  'Nairobi West Hospital',
  'Mathari Teaching & Referral Hospital',
]

const scrollingPartners = [...partners, ...partners]

const partnersEl = ref(null)
const partnersPaused = ref(false)
let partnersFrame
let lastTime = 0
let position = 0

function movePartners(time) {
  if (partnersEl.value && !partnersPaused.value) {
    const seconds = lastTime === 0 ? 0 : Math.min((time - lastTime) / 1000, 0.1)
    position += 40 * seconds
    const halfWidth = partnersEl.value.scrollWidth / 2
    if (position >= halfWidth) position -= halfWidth
    partnersEl.value.scrollLeft = position
  }
  lastTime = time
  partnersFrame = requestAnimationFrame(movePartners)
}

const headline = "Bridging Care. Tracking Progress."
const typedCount = ref(0)
const typed = computed(() => headline.slice(0, typedCount.value))
const untyped = computed(() => headline.slice(typedCount.value))
let typingTimer

onMounted(() => {
  partnersFrame = requestAnimationFrame(movePartners)
  typingTimer = setInterval(() => {
    typedCount.value++
    if (typedCount.value >= headline.length) clearInterval(typingTimer)
  }, 55)
})

onBeforeUnmount(() => {
  clearInterval(typingTimer)
  cancelAnimationFrame(partnersFrame)
})
</script>

<template>
  <!-- Hero section -->
  <v-container max-width="100%">
    <v-sheet color="secondary" rounded="lg" class="position-relative overflow-hidden">
      <video src="/hero.mp4" class="w-100 d-block" autoplay muted loop aria-hidden="true"></video>
      <v-overlay :model-value="true" contained persistent no-click-animation scroll-strategy="none" scrim="primary" opacity="0.6" z-index="1" class="align-center justify-center">
        <v-container max-width="800" class="text-center text-on-primary">
          <h1 class="text-h2" :aria-label="headline">
            <span aria-hidden="true">{{ typed }}</span><span aria-hidden="true" class="text-transparent">{{ untyped }}</span>
          </h1>
          <p class="mt-4">MoodBridge empowers clinicians and patients with seamless mood tracking, instant alerts, reminders and data driven insights for better real time monitoring.</p>
          <v-btn to="/about" color="surface" rounded="pill" class="ma-3 mt-6">Explore MoodBridge</v-btn>
          <v-btn rounded="pill" variant="outlined" class="ma-3 mt-6">For Clinicians</v-btn>
        </v-container>
      </v-overlay>
    </v-sheet>
  </v-container>

  <!--Partners-->
  <v-container max-width="100%">
    <div class="d-flex align-center border-t border-b py-3">
      <span class="text-caption opacity-70 mx-6 flex-shrink-0">Our partners</span>
      <div ref="partnersEl" class="d-flex flex-grow-1 overflow-hidden" @mouseenter="partnersPaused = true" @mouseleave="partnersPaused = false">
        <div v-for="(name, i) in scrollingPartners" :key="i" :aria-hidden="i >= partners.length" class="d-flex align-center ga-2 mr-12 flex-shrink-0 opacity-70">
          <v-icon icon="mdi-hexagon-outline" size="small"></v-icon>
          <span class="text-subtitle-1 text-no-wrap">{{ name }}</span>
        </div>
      </div>
    </div>
  </v-container>

  <!-- Why Choose MoodBridge-->
  <v-container max-width="100%">
    <h2 class="text-center mb-6">Why Choose MoodBridge?</h2>
    <v-sheet color="transparent" min-height="440" v-intersect="{ handler: onWhyScroll, options: revealOptions }">
      <v-row>
        <v-col md="3">
          <v-slide-y-reverse-transition>
            <v-card v-show="visible.why[0]" width="100%" height="100%" color="primary">
              <div class="d-flex flex-column">
                <v-img src="/image/image1.jpg" height="200" cover></v-img>
                <v-card-title>Stay Connected</v-card-title>
                <v-card-text>Track your mood and progress between sessions. Bring those insights into your next appointment.</v-card-text>
                <v-btn color="white" variant="flat" width="120" height="32" class="ma-4 text-black">Learn More</v-btn>
              </div>
            </v-card>
          </v-slide-y-reverse-transition>
        </v-col>

        <v-col md="3">
          <v-slide-y-reverse-transition>
            <v-card v-show="visible.why[1]" width="100%" height="100%" color="primary">
              <div class="d-flex flex-column">
                <v-img src="/image/image2.jpg" height="200" cover></v-img>
                <v-card-title>Reflect</v-card-title>
                <v-card-text>Write down important thoughts and experiences while they are fresh. Review your reflections before your next session.</v-card-text>
                <v-btn color="white" variant="flat" width="120" height="32" class="ma-4 text-black">Learn More</v-btn>
              </div>
            </v-card>
          </v-slide-y-reverse-transition>
        </v-col>

        <v-col md="3">
          <v-slide-y-reverse-transition>
            <v-card v-show="visible.why[2]" width="100%" height="100%" color="primary">
              <div class="d-flex flex-column">
                <v-img src="/image/image3.jpg" height="200" cover></v-img>
                <v-card-title>Better Context</v-card-title>
                <v-card-text>Keep your clinician informed about what happens between visits. These updates can help guide your next conversation.</v-card-text>
                <v-btn color="white" variant="flat" width="120" height="32" class="ma-4 text-black">Learn More</v-btn>
              </div>
            </v-card>
          </v-slide-y-reverse-transition>
        </v-col>

        <v-col md="3">
          <v-slide-y-reverse-transition>
            <v-card v-show="visible.why[3]" width="100%" height="100%" color="primary">
              <div class="d-flex flex-column">
                <v-img src="/image/image4.jpg" height="200" cover></v-img>
                <v-card-title>Your Choice</v-card-title>
                <v-card-text>Choose what information you share with your clinician. You stay in control of your personal reflections.</v-card-text>
                <v-btn color="white" variant="flat" width="120" height="32" class="ma-4 text-black">Learn More</v-btn>
              </div>
            </v-card>
          </v-slide-y-reverse-transition>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>

  <v-container max-width="100%">
    <VParallax src="/parallax2.jpg" height="520" rounded="lg" cover></VParallax>
  </v-container>

  <!-- Information -->
  <v-container max-width="100%">
    <h2 class="text-center">Be informed</h2>
    <p class="text-center mb-6">Find what you need to get started with MoodBridge.</p>
    <v-sheet color="transparent" min-height="440" v-intersect="{ handler: onInfoScroll, options: revealOptions }">
      <v-row>
        <v-col md="3">
          <v-slide-y-reverse-transition>
            <v-card v-show="visible.info[0]" width="100%" height="100%" color="primary">
              <div class="d-flex flex-column">
                <v-img src="/image/image5.jpg" height="200" cover></v-img>
                <v-card-title>Getting Started</v-card-title>
                <v-card-text>Discover the tools MoodBridge offers between sessions. Find out how to get started at your own pace.</v-card-text>
                <v-btn color="white" variant="flat" width="120" height="32" class="ma-4 text-black">Get Started</v-btn>
              </div>
            </v-card>
          </v-slide-y-reverse-transition>
        </v-col>

        <v-col md="3">
          <v-slide-y-reverse-transition>
            <v-card v-show="visible.info[1]" width="100%" height="100%" color="primary">
              <div class="d-flex flex-column">
                <v-img src="/image/image6.jpg" height="200" cover></v-img>
                <v-card-title>Privacy</v-card-title>
                <v-card-text>Learn how your personal information is handled. Find out what you can share and who can see it.</v-card-text>
                <v-btn color="white" variant="flat" width="120" height="32" class="ma-4 text-black">View Privacy</v-btn>
              </div>
            </v-card>
          </v-slide-y-reverse-transition>
        </v-col>

        <v-col md="3">
          <v-slide-y-reverse-transition>
            <v-card v-show="visible.info[2]" width="100%" height="100%" color="primary">
              <div class="d-flex flex-column">
                <v-img src="/image/image7.jpg" height="200" cover></v-img>
                <v-card-title>Patient Support</v-card-title>
                <v-card-text>Get help with questions about using MoodBridge. Patient Support is not an emergency service.</v-card-text>
                <v-btn color="white" variant="flat" width="120" height="32" class="ma-4 text-black">Learn More</v-btn>
              </div>
            </v-card>
          </v-slide-y-reverse-transition>
        </v-col>

        <v-col md="3">
          <v-slide-y-reverse-transition>
            <v-card v-show="visible.info[3]" width="100%" height="100%" color="primary">
              <div class="d-flex flex-column">
                <v-img src="/image/image8.jpg" height="200" cover></v-img>
                <v-card-title>For Clinicians</v-card-title>
                <v-card-text>Explore how MoodBridge can fit into your clinical practice. Learn how between-session updates can support your conversations with patients.</v-card-text>
                <v-btn color="white" variant="flat" width="120" height="32" class="ma-4 text-black">For Clinicians</v-btn>
              </div>
            </v-card>
          </v-slide-y-reverse-transition>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>

  <!-- FINAL CTA -->
  <v-container max-width="100%">
    <VParallax src="/parallax1.jpg" gradient="to bottom, #0000008C, #0000008C" height="520" rounded="lg" cover>
      <div class="d-flex flex-column align-center justify-center fill-height text-center text-white pa-6">
        <h2 class="text-h3">A more connected approach to mental healthcare.</h2>
        <p class="mt-4">MoodBridge supports the work you already do with your clinician.</p>
        <v-btn to="/about" color="surface" class="ma-3 mt-6">Explore MoodBridge</v-btn>
      </div>
    </VParallax>
  </v-container>

  <!-- Footer -->
  <v-sheet color="primary" class="mt-8">
    <v-container class="py-8">
      <v-row>
        <v-col md="5">
          <h2 class="text-h6 mb-2">Subscribe to our mailing list</h2>
          <p class="text-body-2 mb-4 opacity-70">Product news and updates from MoodBridge.</p>
          <v-text-field v-model="inputValue" label="Email address" outlined class="ma-4" bg-color="white">
            <template v-slot:append-inner>
              <v-btn color="primary" >Subscribe</v-btn>
            </template>
          </v-text-field>
        </v-col>

        <!-- Quick links -->
        <v-col md="2" offset-md="1">
          <h3 class="text-subtitle-2 mb-3">Quick Links</h3>
          <div class="d-flex flex-column ga-2 text-body-2 opacity-70">
            <a href="#">About Us</a>
            <a href="#">For Patients</a>
            <a href="#">For Clinicians</a>
            <a href="#">News</a>
          </div>
        </v-col>

        <!-- Contact -->
        <v-col md="3">
          <h3 class="text-subtitle-2 mb-3">Contact</h3>
          <div class="d-flex flex-column ga-2 text-body-2 opacity-70">
            <span>Madaraka, Nairobi</span>
            <span>+254712345678</span>
            <span>hello@moodbridge.com</span>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-6"></v-divider>

      <!-- Bottom line -->
      <div class="d-flex align-center">
        <span class="text-caption opacity-70 flex-grow-1">&copy; {{ year }} MoodBridge</span>
        <div class="d-flex justify-center ga-1 flex-grow-1">
          <v-btn icon="mdi-instagram" variant="text" size="small" aria-label="Instagram"></v-btn>
          <v-btn icon="mdi-twitter" variant="text" size="small" aria-label="Twitter"></v-btn>
          <v-btn icon="mdi-facebook" variant="text" size="small" aria-label="Facebook"></v-btn>
        </div>
        <div class="flex-grow-1"></div>
      </div>
    </v-container>
  </v-sheet>
</template>