
import { forEach } from 'lodash';
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

  changeTeam(newTeam) {
    this._team = newTeam;
    this.team.next(this._team);
    this.calculateTotal();
  }

  addMate(key, mate) {
    if (mate.name !== '') {
      this._team[key] = mate;
      this.team.next(this._team);
      this.calculateTotal();
    }
  }

  deleteMate(key) {
    delete this._team[key];
    this.team.next(this._team);
    this.calculateTotal();
  }

  changeValue(mateKey, key, value) {
    const newMate = {
      ...this._team[mateKey],
      [key]: value
    };
    this._team[mateKey] = newMate;
    this.team.next(this._team);
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