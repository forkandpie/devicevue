<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

.hidden_area {
  height: 0;
  width: 0;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
}

.content {
  padding: 20px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 16rem;
  padding: 3rem 1rem;
  background: #f5f5f5;
  height: 100vh;
  padding: 0;
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 15px;
}

.buttons button {
  border-width: 0;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  background: none;
  background-color: thistle;
}

.buttons button:focus,
.buttons button:active {
  outline: 0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: blue;
}
</style>

<template>
  <div id="app">
    <aside class="sidebar">
      <div class="buttons">
        <button v-on:click="state.setMode('devices')">Devices</button>
        <button v-on:click="state.setMode('staff')">Staff</button>
      </div>
      <portal-target name="dest-list">
        here sidebar
      </portal-target>
    </aside>

    <div class="content">
      <portal-target name="dest-content">
        here content 11
      </portal-target>
    </div>

    <div class="hidden_area">
      <!-- <Devices v-bind:is-active="state.mode == 'devices'"/> -->
      <!-- <Staff v-bind:is-active="state.mode == 'staff'"/> -->
      <Assign/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Devices from './devices/Devices.vue';
import DevicesScope from './devices/DevicesScope';
import Staff from './staff/Staff.vue';
import Assign from './assign/Assign.vue';
import { Observer } from "mobx-vue";
import AppModel from './AppModel';

@Observer
@Component({
  components: {
    Devices,
    Staff,
    Assign
  }
})
export default class App extends Vue {
  state:AppModel = new AppModel();

  mounted() {
    let devices = new DevicesScope();
  }
}

/**
 * Can't rely on Vue tree to compose features, should be just ts objects.
 */
</script>
