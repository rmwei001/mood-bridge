
<template>
  <v-sheet color="white">
    <!-- Page heading -->
    <v-sheet color="primary" class="py-16 position-relative overflow-hidden">
      <v-img src="/parallax1.jpg" cover class="position-absolute top-0 left-0 w-100 h-100" alt="" />
      <div class="position-absolute top-0 left-0 w-100 h-100 bg-primary" style="opacity: 0.75"></div>
      <v-container class="text-center position-relative">
        <h1 class="text-h2 font-weight-bold text-white mb-5">Contact Us</h1>
        <v-breadcrumbs :items="[{ title: 'Home', href: '/' }, { title: 'Contact Us', disabled: true }]" color="white" class="justify-center pa-0" density="compact" />
      </v-container>
    </v-sheet>

    <!-- Contact section -->
    <v-container class="py-16">
      <v-row align="stretch">
        <!-- Left: Contact information -->
        <v-col cols="5">
          <v-card color="buttons" rounded="lg" elevation="0" class="pa-6 h-100">
            <h2 class="text-h5 font-weight-bold text-black mb-3">Get In Touch</h2>
            <p class="text-body-2 text-black mb-5">Have a question about MoodBridge? Get in touch with our team and we'll help you find the right information.</p>
            <v-divider color="secondary" class="mb-5" />

            <!-- Email -->
            <v-row no-gutters class="mb-5" align="start">
              <v-col cols="2">
                <v-avatar color="primary"><v-icon icon="mdi-email-outline" color="buttons" /></v-avatar>
              </v-col>
              <v-col cols="10" class="pl-3">
                <h3 class="text-subtitle-2 font-weight-bold text-black">Email us</h3>
                <a href="mailto:hello@moodbridge.com" class="text-body-2 text-black text-decoration-none">hello@moodbridge.com</a>
              </v-col>
            </v-row>

            <!-- Phone -->
            <v-row no-gutters class="mb-5" align="start">
              <v-col cols="2">
                <v-avatar color="primary"><v-icon icon="mdi-phone-outline" color="buttons" /></v-avatar>
              </v-col>
              <v-col cols="10" class="pl-3">
                <h3 class="text-subtitle-2 font-weight-bold text-black">Call us</h3>
                <a href="tel:+254712345678" class="text-body-2 text-black text-decoration-none">+254 712 345 678</a>
              </v-col>
            </v-row>

            <!-- Location -->
            <v-row no-gutters align="start">
              <v-col cols="2">
                <v-avatar color="primary"><v-icon icon="mdi-map-marker-outline" color="buttons" /></v-avatar>
              </v-col>
              <v-col cols="10" class="pl-3">
                <h3 class="text-subtitle-2 font-weight-bold text-black">Our location</h3>
                <p class="text-body-2 text-black">Nairobi, Kenya</p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <!-- Right: Contact form -->
        <v-col cols="7" class="pl-8">
          <p class="text-subtitle-2 text-secondary mb-3">Contact Us</p>
          <h2 class="text-h4 font-weight-bold text-black mb-4">Send us a message</h2>
          <p class="text-body-2 text-grey-darken-1 mb-6">Have a question about MoodBridge, our platform, or working with us? Fill out the form below.</p>
          <v-card color="grey-lighten-5" rounded="lg" elevation="0" class="pa-5">
            <v-form @submit.prevent>
              <v-text-field placeholder="Enter your full name" variant="outlined" rounded="pill" bg-color="white" density="comfortable" hide-details="auto" class="mb-3" aria-label="Full name" />
              <v-text-field placeholder="Enter your email" type="email" variant="outlined" rounded="pill" bg-color="white" density="comfortable" hide-details="auto" class="mb-3" aria-label="Email address" />
              <v-textarea placeholder="Write us your question here..." variant="outlined" rounded="lg" bg-color="white" rows="4" auto-grow hide-details="auto" class="mb-4" aria-label="Your message" />
              <v-btn type="button" color="buttons" rounded="pill" elevation="0" class="text-black font-weight-bold px-6">Send Message</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
