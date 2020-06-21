import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'G-FGH7MHPYYY',
  router
});

require("./assets/main.scss");

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
