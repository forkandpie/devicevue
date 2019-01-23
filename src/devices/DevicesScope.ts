import Devices from './Devices.vue';
import DeviceModel from './DeviceModel';
import { reaction } from 'mobx';
import AppModel from '../AppModel';

export default class DevicesScope {

  public state:DeviceModel;

  constructor(appModel:AppModel) {

    this.state = new DeviceModel();

    var data = {
      selected: this.state.selected,
      devices: this.state.devices,
      selectDevice: this.state.selectDevice,
      isActive: true
    };

    reaction(
      () => this.state.devices,
      devices => {data.devices = devices;}
    );
    
    reaction(
      () => this.state.selected,
      selected => {data.selected = selected;}
    );

    reaction(
      () => appModel.mode,
      mode => data.isActive = mode=="devices"
    );
    
    new Devices({
      el: ".hidden_area",
      data: data,
    });

    this.state.fetchDevices();
  }

  getState():DeviceModel { return this.state; }
}