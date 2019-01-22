import App from './App.vue';
import AppModel from '@/AppModel';
import DevicesScope from './devices/DevicesScope';
import StaffScope from './staff/StaffScope';

export default class AppScope {

  constructor() {

    let state:AppModel = new AppModel();

    let vm = new App({
      data: {
        setMode: state.setMode
      }
    });

    vm.$on('mounted', function () {
      new DevicesScope(state);
      new StaffScope(state);
    });
    
    vm.$mount('#app');
  }
}