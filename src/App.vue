<template>
  <div id="app">
    
    <aside class="sidebar">
      <div class="buttons">
        <button v-on:click="setMode('devices')">Devices</button>
        <button v-on:click="setMode('staff')">Staff</button>
      </div>
      <portal-target name="dest-list">
        here sidebar
      </portal-target>
    </aside>

    <div class="content">
      <portal-target name="dest-content">
        here content 11
      </portal-target>

      <portal-target name="dest-subcontent">
        here content 22
      </portal-target>
    </div>

    <div class="hidden_area"></div>
    <div class="hidden_area1"></div>
    <div class="hidden_area2"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  mounted() {
    this.$emit("mounted");
  }
}
</script>

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
  width: 100%;
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