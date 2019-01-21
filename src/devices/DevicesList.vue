<style>
.devices_list {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
}

.device_item {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 0;
}

.device_item:hover {
    background-color: lightgrey;
}

.device_icon {
    height:80px;
}
</style>

<template>
  <portal to="dest-list">
    <span>Devices</span>
    <ul class="devices_list">
        <li class="device_item" 
            v-for="device in devicesList" 
            :key="device.id"
            v-on:click=selectDevice(device.id)
        >
            <img class="device_icon" v-bind:src="device.icon">
            <span>{{device.id}}</span>
        </li>
    </ul>
  </portal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    props:{
        devicesList: Array,
        selectDevice: Function
    }
})
export default class DevicesList extends Vue {}
</script>