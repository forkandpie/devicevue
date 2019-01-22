<template>
  <div v-if="this.isActive">
    <StaffList
        v-bind:staff-list="this.staff"
        v-bind:select-person="this.selectPerson"
    />
    <StaffContent 
        v-bind:selected-person="this.selected"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StaffList from './StaffList.vue';
import StaffContent from './StaffContent.vue';
import StaffModel from './StaffModel';

@Component({
  components: {
    StaffList,
    StaffContent
  },
})
export default class Devices extends Vue {}
</script>