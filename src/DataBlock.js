
import {concat, findIndex, forEach, remove} from 'lodash';
import { BehaviorSubject } from 'rxjs';

export class DataBlock {

  team;
  _team;

  total;
  emergency;

  constructor(team) {
    this.team = new BehaviorSubject(team);
    this._team = team;
    this.total = new BehaviorSubject(0);
    this.emergency = new BehaviorSubject(20);

    this.calculateTotal();
  }

  changeValue(mateName, key, value) {
    const index = findIndex(this._team, (mate) => {return mate.name === mateName});
    if (index !== undefined) {
      const newMate = {
        ...this._team[index],
        [key]: value
      };
      this._team[index] = newMate;
      this.team.next(this._team);
    }
    this.calculateTotal();
  }

  changeEmergency(value) {
    this.emergency.next(value);
    this.calculateTotal();
  }
  calculateTotal() {
    let total = 0;
    forEach(this._team, (mate) => {
      const mateTotal = (((mate.d*8) + mate.h)/100 * mate.efficiency)/100*(100-this.emergency.getValue());
      total = total + mateTotal;
    });
    this.total.next(total);
  }

}