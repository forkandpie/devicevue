<template>
  <div v-if="this.isActive">
    <DevicesList
        v-bind:devices-list="this.devices"
        v-bind:select-device="this.selectDevice"
    />

    <DeviceContent 
        v-bind:selected-device="this.selected"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DevicesList from './DevicesList.vue';
import DeviceContent from './DeviceContent.vue';

@Component({
  components: {
    DevicesList,
    DeviceContent
  },
})
export default class Devices extends Vue {}
</script>