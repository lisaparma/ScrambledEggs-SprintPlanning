import React from 'react';
import PropTypes from 'prop-types';
import {forEach} from 'lodash'

import "../style/App.scss";
import {TeamMate} from "./TeamMate";
import {DataBlock} from "../DataBlock";

export class HoursPlanning extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    dataBlock: PropTypes.instanceOf(DataBlock)
  };

  _subscriptions;

  constructor(props) {
    super(props);
    this._subscriptions = [];
    this.state = {
      team: [],
      total: 0,
      emergency: 0
    }
  }

  componentDidMount() {
    this._subscriptions.push(
      this.props.dataBlock.team.subscribe((team) => {
        this.setState(() => ({ team }));
      })
    );
    this._subscriptions.push(
      this.props.dataBlock.total.subscribe((total) => {
        this.setState(() => ({ total }));
      })
    );
    this._subscriptions.push(
      this.props.dataBlock.emergency.subscribe((emergency) => {
        this.setState(() => ({ emergency }));
      })
    );
  }

  componentWillUnmount() {
    forEach(this._subscriptions, (subscription) => {
      subscription.unsubscribe();
    })
  }

  _onChangeEmergency = (ev) => {
    const value = ev.target.value ? parseFloat(ev.target.value) : parseFloat(0);
    if (0 <= value && value <= 100) {
      this.props.dataBlock.changeEmergency(value);
    }
  };

  render() {

    const table = [];
    forEach(this.state.team, (mate) => {
      table.push(
        <TeamMate
          key={mate.name}
          mate={mate}
          dataBlock={this.props.dataBlock}
        />
      );
    });

    return (
      <div className="hoursPlanning">
        <h3>{this.props.title}</h3>
        <div className="tableHeader">
          <span className="column">Nome</span>
          <span className="column">Ore lavorative</span>
          <span className="column">Efficienza</span>
          <span className="column">Emergenza</span>
        </div>
        <div className="tableContent">
          <div className="team">
            {table}
          </div>
          <div className="column emergency">
            <span>-</span>
            <input
              type="number"
              value={this.state.emergency}
              min={0}
              max={100}
              onChange={this._onChangeEmergency}
            />
            <span>%</span>
          </div>
        </div>
        <div className="total">
          <p>Totale: {parseInt(this.state.total)}</p>
        </div>
      </div>
    )
  }
}
