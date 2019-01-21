<template>
  <div v-if="this.isActive">
    <DevicesList
        v-bind:devices-list="state.devices"
        v-bind:select-device="state.selectDevice"
    />
    <DeviceContent 
        v-bind:selected-device="state.selected"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DevicesList from './DevicesList.vue';
import DeviceContent from './DeviceContent.vue';
import DeviceModel from './DeviceModel';
import { Observer } from 'mobx-vue';
import { Signal } from "signal-ts";

@Observer
@Component({
  components: {
    DevicesList,
    DeviceContent
  },
  props: {
    isActive: Boolean
  }
})
export default class Devices extends Vue {

  public onSelectedSignal:Signal<any> = new Signal();
  
  state:DeviceModel = new DeviceModel();

  created() {
    this.state.fetchDevices();
  }
}
</script>