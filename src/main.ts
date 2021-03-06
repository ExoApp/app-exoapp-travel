import { createApp } from 'vue'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register';

import './index.css';

import router from './router';
import store from './store';

const updateSW = registerSW({
   onNeedRefresh() {
      // show a prompt to user
   },
   onOfflineReady() {
      // show a ready to work offline to user
   },
})

createApp(App)
   .use(router)
   .use(store)
   .mount('#app');
