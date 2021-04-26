import Vue from 'vue'
import App from '@/App.vue'
import '@/registerServiceWorker'
import router from '@/router'
import VueAnalytics from 'vue-analytics'
import VueMeta from 'vue-meta'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faFacebook,
  faGithub,
  faLinkedin,
  faWordpress
} from '@fortawesome/free-brands-svg-icons'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.use(VueMeta)

library.add(
  faFacebook,
  faGithub,
  faLinkedin,
  faWordpress
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-169027561-1',
  router
});

require("./assets/main.scss");

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
