<template>
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