import React from 'react';
import PropTypes from 'prop-types';
import { forEach, max, keys } from 'lodash'

import "../style/App.scss";
import {TeamMate} from "./TeamMate";
import {DataBlock} from "../DataBlock";

export class HoursPlanning extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    dataBlock: PropTypes.instanceOf(DataBlock)
  };

  _subscriptions;
  newKey;

  constructor(props) {
    super(props);
    this.state = {
      team: {},
      total: 0,
      emergency: 0,
      editMode: false,
      inputName: ''
    };
    this._subscriptions = [];
    this.newKey = 0;
  }

  componentDidMount() {
    this._subscriptions.push(
      this.props.dataBlock.team.subscribe((team) => {
        this.setState(() => ({ team }));
        this.newKey = this.calcNewKey(team);
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

  calcNewKey = (team) => {
    return (max(keys(team))+1);
  };

  _onChangeEmergency = (ev) => {
    const value = ev.target.value ? parseFloat(ev.target.value) : parseFloat(0);
    if (0 <= value && value <= 100) {
      this.props.dataBlock.changeEmergency(value);
    }
  };

  _editMode = () => {
    this.setState((prevState) => ({ editMode: !prevState.editMode}))
  };

  _onChangeInput = (ev) => {
    ev.persist();
    this.setState(() => ({ inputName: ev.target.value }));
  };

  _onKeyDown = (ev) => {
    if (ev.key === "Enter") {
      this._onPlusClick();
    }
  };

  _onPlusClick = () => {
    this.props.dataBlock.addMate(this.newKey, { name: this.state.inputName, d: 0, h: 0, efficiency: 100 });
    this.setState(() => ({ inputName: '' }));
  };

  render() {
    const { team, editMode, inputName, emergency, total } = this.state;

    const table = [];
    forEach(team, (mate, key) => {
      table.push(
        <TeamMate
          key={key}
          mateKey={key}
          mate={mate}
          dataBlock={this.props.dataBlock}
          edit={editMode}
        />
      );
    });

    return (
      <div className="hoursPlanning">
        <div className="title-end">
          <h3>{this.props.title}</h3>
          <i
            className="fas fa-pencil-alt icon"
            onClick={this._editMode}
          />
        </div>
        <div className="tableHeader">
          <span className="column name">Nome</span>
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
              value={emergency}
              min={0}
              max={100}
              onChange={this._onChangeEmergency}
            />
            <span>%</span>
          </div>
        </div>
        {editMode &&
          <div className="add">
            <i className="fas fa-plus-circle plus" onClick={this._onPlusClick} />
            <input
              type={'text'}
              value={inputName}
              onChange={this._onChangeInput}
              onKeyDown={this._onKeyDown}
            />
          </div>
          }
        <div className="total">
          <p>Totale: {parseInt(total)}</p>
        </div>
      </div>
    )
  }
}
