import { createApp } from 'vue'
import NarcissusDesignVue from '@narcissus-design-vue/narcissus-design-vue';
import router from '../src/router/index';
import App from './App.vue'
const app = createApp(App);
app.use(router);
app.use(NarcissusDesignVue);
app.mount('#app');
