import { observable, action } from "mobx";

export default class DeviceModel {
  @observable.ref devices = [];
  @observable selected = null;

  @action.bound async fetchDevices() {
    this.devices = await fetch("devices.json")
      .then(res => res.json())
      .then(response => response.devices);
  }

  @action.bound selectDevice(deviceId:String) {
    let temp = this.devices
      .filter(device => device.id == deviceId)[0];
    this.selected = temp;
  }
}