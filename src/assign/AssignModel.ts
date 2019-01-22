import { observable, action } from 'mobx';

export default class AssignModel {

  @observable assignments = [];

  @action.bound async fetchData() {
    this.assignments = await fetch("assignments.json")
      .then(res => res.json())
      .then(response => response.log);
  }

  // getDevicesByPerson(personId: String):Array<any> {
  //   return this.assignments
  //     .filter(assignment => assignment.personId == personId);
  // }

  // getStaffByDevice(deviceId: String):Array<any> {
  //   return this.assignments
  //     .filter(assignment => assignment.deviceId == deviceId);
  // }
}