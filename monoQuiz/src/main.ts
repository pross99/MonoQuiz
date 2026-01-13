import { createApp } from 'vue'
import router from './router'
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { OhVueIcon } from 'oh-vue-icons';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import store from './store'

library.add(fas);

const app = createApp(App)
.component('fa', FontAwesomeIcon)
.component('v-icon', OhVueIcon)
app.use(router)
app.use(Toast)
app.use(store)
app.mount('#app')
