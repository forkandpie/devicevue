import { observable, computed, action } from "mobx";

export default class AppModel {

  @observable mode:String = "devices";

  // @computed isDevicesMode:Boolean = this.mode == "devices";
  // @computed isStaffMode:Boolean = this.mode == "staff";

  @action.bound setMode(mode:String) {
    this.mode = mode;
  }
}