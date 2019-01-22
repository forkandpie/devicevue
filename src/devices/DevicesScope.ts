import Devices from './Devices.vue';
import DeviceModel from './DeviceModel';
import { reaction } from 'mobx';
import AppModel from '../AppModel';

export default class DevicesScope {
  
  constructor(appModel:AppModel) {

    let state:DeviceModel = new DeviceModel();
    var data = {
      selected: state.selected,
      devices: state.devices,
      selectDevice: state.selectDevice,
      isActive: true
    };

    reaction(
      () => state.devices,
      devices => {data.devices = devices;}
    );
    
    reaction(
      () => state.selected,
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

    state.fetchDevices();
  }
}