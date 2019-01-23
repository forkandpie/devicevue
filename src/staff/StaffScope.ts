import Staff from './Staff.vue';
import StaffModel from './StaffModel';
import { reaction } from 'mobx';
import AppModel from '../AppModel';
export default class StaffScope {

  public state:StaffModel;

  constructor(appModel:AppModel) {

    this.state = new StaffModel();
    var data = {
      staff: this.state.staff,
      selected: this.state.selected,
      selectPerson: this.state.selectPerson,
      isActive: false
    };

    reaction(
      () => this.state.staff,
      staff => {data.staff = staff;}
    );
    
    reaction(
        () => this.state.selected,
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

    this.state.fetchStaff();
  }
}