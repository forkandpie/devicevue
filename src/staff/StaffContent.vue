<style>
.description {
    text-align: left;
}
</style>

<template>
  <portal to="dest-content">
    <div class="description" v-if="this.selectedPerson != null">
      <p>Selected person:</p>
      <p>Name: {{this.selectedPerson.name}} {{this.selectedPerson.lastname}}</p>
      <p>Position: {{this.selectedPerson.position}}</p>
      <p>Team: {{this.selectedPerson.team}}</p>
    </div>
    <div v-if="this.selectedPerson == null">
        Select a person from menu
    </div>
  </portal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({props:{
    selectedPerson:Object
}})
export default class StaffContent extends Vue {}
</script>