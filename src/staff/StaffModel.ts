import { observable, action } from "mobx";

export default class StaffModel {
  @observable.ref staff = [];
  @observable selected = null;

  @action.bound async fetchStaff() {
    this.staff = await fetch("staff.json")
      .then(res => res.json())
      .then(response => response.staff);
  }

  @action.bound selectPerson(personId:String) {
    let temp = this.staff
      .filter(person => person.id == personId)[0];
    this.selected = temp;
  }
}