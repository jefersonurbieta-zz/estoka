import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify, {
    lang: {
        locales: { pt },
        current: 'pt'
    },
    theme: {
        primary: '#3a6861',
        secondary: '#d79641'
    }
})
