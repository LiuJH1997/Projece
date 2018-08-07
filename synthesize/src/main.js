// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import '../static/css/common.css'
import 'iview/dist/styles/iview.css';
import Axios from 'axios'
import $ from 'jquery'
import 'iview/dist/styles/iview.css';
import iView from 'iview';
import './assets/js/key'
import { 
  InputNumber
} from 'element-ui';

Vue.use(InputNumber)


Vue.use(iView);
Vue.use(iView)


Vue.config.productionTip = false
Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
