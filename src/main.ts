import Vue from 'vue'
import PortalVue from 'portal-vue'
import AppScope from '@/AppScope';

Vue.config.productionTip = false;
Vue.use(PortalVue);

new AppScope();