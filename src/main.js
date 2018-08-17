// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import 'vue-awesome/icons/external-link-alt';

import Icon from 'vue-awesome/components/Icon';

import moment from 'moment';

Vue.component('icon', Icon);
Vue.prototype.moment = moment;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
