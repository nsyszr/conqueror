import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#08a5e0',
        secondary: '#FF8C00',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
      dark: {
        primary: '#08a5e0',
      },
    },
  },
});
