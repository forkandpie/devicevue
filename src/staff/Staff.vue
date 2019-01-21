<template>
  <div v-if="this.isActive">
    <StaffList
        v-bind:staff-list="state.staff"
        v-bind:select-person="state.selectPerson"
    />
    <StaffContent 
        v-bind:selected-person="state.selected"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StaffList from './StaffList.vue';
import StaffContent from './StaffContent.vue';
import StaffModel from './StaffModel';
import { Observer } from 'mobx-vue';

@Observer
@Component({
  components: {
    StaffList,
    StaffContent
  },
  props: {
    isActive: Boolean
  }
})
export default class Devices extends Vue {

  state:StaffModel = new StaffModel();

  created() {
    this.state.fetchStaff();
  }
}
</script>