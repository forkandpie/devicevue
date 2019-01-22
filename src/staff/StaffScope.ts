import Staff from './Staff.vue';
import StaffModel from './StaffModel';
import { reaction } from 'mobx';
import AppModel from '../AppModel';
export default class StaffScope {

  constructor(appModel:AppModel) {

    let state:StaffModel = new StaffModel();
    var data = {
      staff: state.staff,
      selected: state.selected,
      selectPerson: state.selectPerson,
      isActive: false
    };

    reaction(
      () => state.staff,
      staff => {data.staff = staff;}
    );
    
    reaction(
        () => state.selected,
        selected => {data.selected = selected;}
    );
    
    reaction(
        () => appModel.mode,
        mode => data.isActive = mode=="staff"
    );

    new Staff({
      el: ".hidden_area1",
      data: data
    });

    state.fetchStaff();
  }
}