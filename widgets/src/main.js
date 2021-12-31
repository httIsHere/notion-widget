import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './less/app.less';
import VueClipboard from 'vue-clipboard2'
import 'lib-flexible/flexible'
import axios from 'axios';

Vue.use(VueClipboard)
Vue.prototype.$axios = axios;
Vue.prototype.$global_path = window.location.origin + '/notion-widget/widgets/dist/index.html'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
