import Assign from './Assign.vue'
import AssignModel from '@/assign/AssignModel';
import DeviceModel from '@/devices/DeviceModel'; //should be injected or replaced with interface
import AppModel from '@/AppModel';
import { reaction } from 'mobx';
import StaffModel from '@/staff/StaffModel';
//need to get observable TS type


export default class AssignScope {

  constructor(deviceState:DeviceModel, staffState:StaffModel, appState:AppModel) {

    let state:AssignModel = new AssignModel();

    var data = { //should observe state instead of this data object
        selectedDevice: deviceState.selected,
        selectedPerson: staffState.selected,
        getByDeviceId: state.getByDeviceId,
        getByPersonId: state.getByPersonId,
        mode: appState.mode
    };

    new Assign({
      el: ".hidden_area2",
      data: data
    });

    reaction(
        () => appState.mode,
        mode => data.mode = mode,
    );

    reaction(
        () => deviceState.selected,
        selectedDevice => data.selectedDevice = selectedDevice,
    );
    
    reaction(
        () => staffState.selected,
        selectedPerson => data.selectedPerson = selectedPerson,
    );

    state.fetchData();
  }
}