import { observable, computed, action } from "mobx";

export default class AppModel {

  @observable mode:String = "devices";

  @action.bound setMode(mode:String) {
    this.mode = mode;
  }
}