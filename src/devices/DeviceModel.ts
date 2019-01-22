import { observable, action } from "mobx";
import Device from './Device';

export default class DeviceModel {
  @observable.ref devices: Array<Device> = [];
  @observable selected: Device | null = null;

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