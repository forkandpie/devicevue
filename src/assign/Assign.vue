<template>
  <div>
    <div v-if="this.mode == 'devices'">
      <portal to="dest-subcontent">
        <div class="sub_description" v-if="this.selectedDevice != null">
          <p>State of {{this.selectedDevice.id}}</p>

          <div class="columns-3" v-for="data in getByDeviceId(this.selectedDevice.id)" :key="data.id">
            <span class="column-element">{{data.date}} > {{data.personId}}</span>
          </div>
        </div>

        <div v-if="this.selectedDevice == null">
        </div>
      </portal>
    </div>
    
    <div v-if="this.mode == 'staff'">
      <portal to="dest-subcontent">
        <div class="sub_description" v-if="this.selectedPerson != null">
          <p>State of {{this.selectedPerson.id}}</p>

          <div class="columns-3" v-for="data in getByPersonId(this.selectedPerson.id)" :key="data.id">
            <span class="column-element">{{data.date}} > {{data.deviceId}}</span>
          </div>
        </div>

        <div v-if="this.selectedPerson == null">
        </div>
      </portal>
    </div>

  </div>
  
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Observer } from "mobx-vue";
import AssignModel from "./AssignModel";

@Observer
@Component({})
export default class Assign extends Vue {
  state:AssignModel = new AssignModel();

  created() {
    this.state.fetchData();
  }
}
</script>

<style>
.sub_description {
  border-top-width: 1px;
  border-top-color: #ccc;
  border-top-style: solid;
}

.columns-3 {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 16vh;
  overflow: hidden;
}

.column-element {
  flex-grow: 0;
  width: 34%;
}
</style>