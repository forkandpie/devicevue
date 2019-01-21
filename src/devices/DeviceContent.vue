<style>
.description {
    text-align: left;
}
</style>

<template>
  <portal to="dest-content">
    <div class="description" v-if="this.selectedDevice != null">
      <p>Selected device:</p>
      <p>Id: {{this.selectedDevice.id}}</p>
      <p>Type: {{this.selectedDevice.type}}</p>
      <p>Model: {{this.selectedDevice.model}}</p>
      <p>OS: {{this.selectedDevice.os}}</p>
      <p>Screen size: {{this.selectedDevice.screen}}</p>
      
    </div>
    <div v-if="this.selectedDevice == null">
        Select a device from menu
    </div>
  </portal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({props:{
    selectedDevice:Object
}})
export default class DeviceContent extends Vue {}
</script>