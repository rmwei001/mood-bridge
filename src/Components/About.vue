<script>
export default {
  data() {
    return {
      hoveredCard: null,
    }
  },
  methods: {
    setHoveredCard(card) {
      this.hoveredCard = card
    },
    clearHoveredCard() {
      this.hoveredCard = null
    },
  },
}
</script>

<template>
  <div>
    <!-- Hero -->
    <v-sheet style="height: 800px" class="position-sticky top-0 d-flex align-center">
      <v-container class="py-16">
        <v-fade-transition appear>
          <v-card color="primary" flat rounded="lg" class="text-white">
            <v-row no-gutters>
              <v-col cols="6" class="pa-16 d-flex flex-column justify-center">
                <h1 class="text-h3 font-weight-light mb-8">Better mental healthcare should not end when the session does.</h1>
                <v-responsive max-width="460">
                  <p class="text-body-1 text-white opacity-70 mb-10">MoodBridge connects people and their clinicians between sessions, through ongoing tracking, communication and a clear view of progress.</p>
                </v-responsive>
                <v-btn color="buttons" variant="flat" size="large" rounded="lg" append-icon="mdi-arrow-right" to="/features">See how it works</v-btn>
              </v-col>
              <v-col cols="6">
                <v-img src="image/image3.jpg" height="100%" cover></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-fade-transition>
      </v-container>
    </v-sheet>

    <!-- Story -->
    <v-sheet color="secondary" elevation="8" style="height: 800px" class="position-sticky top-0 d-flex align-center">
      <v-container class="py-16">
        <v-card flat rounded="lg">
          <v-row no-gutters>
            <v-col cols="6">
              <v-img src="image/image4.jpg" height="500" cover></v-img>
            </v-col>
            <v-col cols="6" class="pa-16 d-flex flex-column justify-center">
              <h2 class="text-h4 font-weight-light mb-8"> A session lasts an hour. The weeks around it do not</h2>
              <v-responsive max-width="460">
                <p class="text-body-1 mb-4">Between sessions, the work gets tested and often forgotten. The clinician hears a summary, not the week.</p>
                <p class="text-body-1 text-medium-emphasis">MoodBridge joins those pieces, so care feels continuous</p>
              </v-responsive>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-sheet>

    <!-- Beliefs -->
    <v-sheet theme="dark" elevation="8" style="height: 800px" class="position-sticky top-0 d-flex align-center">
      <v-container class="py-16">
        <h2 class="text-h4 font-weight-light mb-16">What we hold to</h2>
        <v-row>
          <v-col cols="6" class="pb-6 pr-12">
            <v-divider color="buttons" opacity="0.6" class="mb-6"></v-divider>
            <h3 class="text-h5 font-weight-regular mb-2">Care does not stop at the door.</h3>
            <p class="text-body-1 text-medium-emphasis">The weeks between sessions count too.</p>
          </v-col>
          <v-col cols="6" class="pb-6 pr-12">
            <v-divider color="buttons" opacity="0.6" class="mb-6"></v-divider>
            <h3 class="text-h5 font-weight-regular mb-2">Nobody retells their week.</h3>
            <p class="text-body-1 text-medium-emphasis">The picture is already in the room.</p>
          </v-col>
          <v-col cols="6" class="pr-12">
            <v-divider color="buttons" opacity="0.6" class="mb-6"></v-divider>
            <h3 class="text-h5 font-weight-regular mb-2">Progress deserves to be seen.</h3>
            <p class="text-body-1 text-medium-emphasis">Slow change is easy to miss from the inside.</p>
          </v-col>
          <v-col cols="6" class="pr-12">
            <v-divider color="buttons" opacity="0.6" class="mb-6"></v-divider>
            <h3 class="text-h5 font-weight-regular mb-2">People first, software second.</h3>
            <p class="text-body-1 text-medium-emphasis">Technology supports the relationship. It never replaces it.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Approach -->
    <v-sheet elevation="8" style="height: 800px" class="position-sticky top-0 d-flex align-center">
      <v-container class="py-16">
        <div class="mb-16">
          <h2 class="text-h4 font-weight-light mb-3">
            How we think about care
          </h2>
          <p class="text-body-1 text-medium-emphasis">
            We start from the space between.
          </p>
        </div>

        <v-row>
          <v-col cols="3">
            <v-card @mouseenter="setHoveredCard('person')" @mouseleave="clearHoveredCard" :elevation="hoveredCard === 'person' ? 6 : 0" color="primary" rounded="lg" class="pa-8 text-black" height="100%" min-height="240">
              <v-icon icon="mdi-account-outline" color="buttons" size="40" class="mb-6"></v-icon>
              <h3 class="text-h6 font-weight-medium mb-3">The person</h3>
              <p class="text-body-2">Living with depression or anxiety between appointments.</p>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card @mouseenter="setHoveredCard('awareness')" @mouseleave="clearHoveredCard":elevation="hoveredCard === 'awareness' ? 6 : 0" color="secondary" rounded="lg" class="pa-8 text-black" height="100%" min-height="240">
              <v-icon icon="mdi-head-heart-outline" color="buttons" size="40" class="mb-6"></v-icon>
              <h3 class="text-h6 font-weight-medium mb-3">Ongoing self awareness</h3>
              <p class="text-body-2">Small, regular moments of noticing.</p>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card @mouseenter="setHoveredCard('clinician')" @mouseleave="clearHoveredCard" :elevation="hoveredCard === 'clinician' ? 6 : 0" color="primary" rounded="lg" class="pa-8 text-black" height="100%" min-height="240">
              <v-icon icon="mdi-stethoscope" color="buttons" size="40" class="mb-6"></v-icon>
              <h3 class="text-h6 font-weight-medium mb-3">The clinician</h3>
              <p class="text-body-2">Sees more than the hour they are given.</p>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card @mouseenter="setHoveredCard('continuity')" @mouseleave="clearHoveredCard" :elevation="hoveredCard === 'continuity' ? 6 : 0" color="secondary" rounded="lg" class="pa-8 text-black"height="100%" min-height="240">
              <v-icon icon="mdi-link-variant" color="buttons" size="40" class="mb-6"></v-icon>
              <h3 class="text-h6 font-weight-medium mb-3">Better continuity of care</h3>
              <p class="text-body-2">Each session picks up where the last one left off.</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-img
      src="parallax2.jpg" height="800" class="position-sticky top-0" cover></v-img>

    <!-- Clinicians -->
    <v-sheet color="primary" elevation="8" style="height: 800px" class="position-sticky top-0 d-flex align-center text-black">
      <v-container class="py-16">
        <v-row align="center">
          <v-col cols="6">
            <h2 class="text-h4 font-weight-light mb-6">Built with the people who do the work.</h2>
            <v-responsive max-width="460">
              <p class="text-body-1 text-medium-emphasis">MoodBridge is being developed with mental health professionals and shaped by what they need in practice.</p>
            </v-responsive>
          </v-col>
          <v-col cols="5" offset="1">
            <v-card theme="dark" flat rounded="lg" class="pa-10">
              <p class="text-h6 font-weight-light">We are early. We only claim what is true.</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Closing -->
    <v-sheet elevation="8" style="height: 800px" class="position-relative d-flex align-center">
      <v-container class="py-16">
        <v-card color="secondary" flat rounded="lg" class="pa-16 text-center text-black">
          <h2 class="text-h4 font-weight-light mb-6">Mental healthcare deserves continuity.</h2>
          <v-responsive max-width="460" class="mx-auto">
            <p class="text-body-1 mb-8">We want consistent, quality care to be more accessible and manageable, for people receiving it and the professionals supporting them.</p>
          </v-responsive>
          <v-btn color="buttons" variant="flat" size="large" rounded="lg" append-icon="mdi-arrow-right" to="/contact">
            Contact Us
          </v-btn>
        </v-card>
      </v-container>
    </v-sheet>
  </div>
</template>