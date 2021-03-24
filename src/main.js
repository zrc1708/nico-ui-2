import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Nicoui2 from './libs/nico-ui-2'

createApp(App).use(router).use(Nicoui2).mount('#app')
