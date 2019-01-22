import { Component, Vue } from 'vue-property-decorator';
import Devices from './Devices.vue';

export default class DevicesScope {
    constructor() {

        console.log("created scope");

        new Vue({
            render: h => h(Devices)
        }).$mount('.hidden_area');
    }
}