
<script setup>
import { ref } from 'vue'

const openPanels = ref([0, 1, 2, 3])

const faqs = [
  {
    question: 'What is MoodBridge?',
    answer:
      'MoodBridge is a mental health platform designed to connect patients and clinicians through mood tracking and continued support between therapy sessions.',
  },
  {
    question: 'How does it work?',
    answer:
      'MoodBridge is designed to help patients record their emotional experiences and share relevant updates with their clinician between therapy sessions.',
  },
  {
    question: 'Is my data safe?',
    answer:
      'Your privacy matters. Please refer to the MoodBridge privacy policy for confirmed information about how personal data is collected, used, stored, and protected.',
  },
  {
    question: 'Can I connect with my clinician?',
    answer:
      'MoodBridge is designed to support patient-clinician connections. Contact your care provider for guidance on the connection process available in your version of the platform.',
  },
]
</script>

<template>
  <v-sheet color="white">
    <!-- Page heading -->
    <v-sheet color="primary" class="py-16 position-relative overflow-hidden">
      <v-img src="/parallax2.jpg" cover class="position-absolute top-0 left-0 w-100 h-100" alt="" />
      <div class="position-absolute top-0 left-0 w-100 h-100 bg-primary" style="opacity: 0.75"></div>
      <v-container class="text-center position-relative">
        <h1 class="text-h2 font-weight-bold text-white mb-5">Frequently Asked Questions</h1>
        <v-breadcrumbs :items="[{ title: 'Home', href: '/' }, { title: 'FAQs', disabled: true }]" color="white" class="justify-center pa-0" density="compact" />
      </v-container>
    </v-sheet>

    <v-sheet color="cream" class="pa-6 pa-md-12">
      <v-container>
        <v-card color="primary" rounded="0" elevation="0" class="pa-6 pa-md-10">
          <v-row>
            <!-- Left column -->
            <v-col cols="12" md="6" class="pr-md-10">
              <v-chip color="secondary" size="small" class="mb-4">
                <v-icon icon="mdi-chat-question-outline" size="small" class="mr-2" color="buttons" />
                Your Questions, Answered
              </v-chip>

              <h1 class="text-h3 text-md-h2 font-weight-bold text-white mb-4">
                Frequently<br />Asked <span class="text-buttons">Questions</span>
              </h1>

              <p class="text-body-2 text-grey-lighten-1">MoodBridge is a mental health platform designed to connect patients and clinicians through mood tracking and continued support between therapy sessions. Discover more about how the platform works.</p>

              <!-- Request a Demo card -->
              <v-card color="secondary" variant="flat" rounded="lg" class="mt-8 pa-5">
                <h2 class="text-h6 text-white mb-3">Request a Demo</h2>

                <p class="text-body-2 text-grey-lighten-2 mb-4">Discover how MoodBridge can support continued communication between patients and clinicians throughout the mental health journey.</p>

                <v-btn color="buttons" variant="flat" rounded="pill" class="text-black font-weight-bold px-6" to="/contact">Request a Demo</v-btn>
              </v-card>
            </v-col>

            <!-- Right column: FAQ accordion -->
            <v-col cols="12" md="6">
              <v-expansion-panels v-model="openPanels" multiple variant="accordion">
                <v-expansion-panel v-for="(faq, index) in faqs" :key="faq.question" :value="index" bg-color="secondary" elevation="0" rounded="lg" class="mb-3">
                  <v-expansion-panel-title class="text-white" expand-icon="mdi-chevron-up" collapse-icon="mdi-chevron-up">{{ faq.question }}</v-expansion-panel-title>

                  <v-expansion-panel-text>
                    <p class="text-body-2 text-grey-lighten-2">{{ faq.answer }}</p>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-sheet>
  </v-sheet>
</template>
