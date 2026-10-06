import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    VBtn: {
      class: 'text-none',
    },
  },
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
  theme: { 
    defaultTheme: 'light',
    themes: {
        light: {
            colors: {
                primary: "#000000",
                secondary: "#3D3D3D",
                buttons: "#A2CA3C",
            }
        }
    }
  } 
})

const app = createApp(App)



app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
