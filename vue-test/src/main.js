import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCookies from 'vue-cookies'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import qs from 'qs'
import './utils/dayjs'

var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueCookies)
Vue.use(iView);

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
      if (store.state.user.username) {
        next()
      } else {
        next({
          path: 'login',
          query: {redirect: to.fullPath}
        })
      }
    } else {
      next()
    }
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
