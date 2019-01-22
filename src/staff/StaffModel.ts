import { observable, action } from "mobx";
import Person from './Person';

export default class StaffModel {
  @observable.ref staff:Array<Person> = [];
  @observable selected:Person | null = null;

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