import App from './App.vue';
import AppModel from '@/AppModel';
import DevicesScope from './devices/DevicesScope';
import StaffScope from './staff/StaffScope';
import AssignScope from '@/assign/AssignScope';

export default class AppScope {

  constructor() {

    let state:AppModel = new AppModel();

    let vm = new App({
      data: {
        setMode: state.setMode
      }
    });

    vm.$on('mounted', function () {
      let devices = new DevicesScope(state);
      let staff = new StaffScope(state);
      new AssignScope(devices.state, staff.state, state);
    });
    
    vm.$mount('#app');
  }
}