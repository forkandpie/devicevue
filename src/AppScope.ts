import Vue from 'vue';
import App from './App.vue';
import AppModel from '@/AppModel';

export default class AppScope {

    constructor() {

        let state:AppModel = new AppModel();

        let vm = new Vue({
            render: h => h(App),
          }).$mount('#app');
    }
}