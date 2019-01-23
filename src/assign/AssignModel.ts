import { observable, action } from 'mobx';

export default class AssignModel {

  @observable.ref assignments:Array<AssignmentData> = [];

  @action.bound async fetchData() {
    this.assignments = await fetch("assignments.json")
      .then(res => res.json())
      .then(response => response.log);
  }

  @action.bound getByPersonId(personId:string):Array<AssignmentData> {
    return this.assignments
      .filter(assignment => assignment.personId == personId);
  }

  @action.bound getByDeviceId(deviceId:string):Array<AssignmentData> {
    console.log(this.assignments, deviceId);
    return this.assignments
      .filter(assignment => assignment.deviceId == deviceId);
  }
}

interface AssignmentData {
  personId:string;
  deviceId:string;
  date:string;
  id:number;
}