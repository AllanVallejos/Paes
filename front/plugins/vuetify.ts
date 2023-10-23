import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({

  })

  const myCustomLightTheme = {
    dark: false,
    colors: {
        background: '#e3eafc',
        surface: '#e3eafc',
        primary: '#de2e02',
        secondary: '#bbcdf7',
        accent: '#3861c2',
    },
}

const myCustomDarkTheme = {
    dark: true,
    colors: {
        background: '#030a1c',
        surface: '#030a1c',
        primary: '#fd4d21',
        secondary: '#081a44',
        accent: '#3d67c7',
    },
}

  app.vueApp.use(vuetify)
})
