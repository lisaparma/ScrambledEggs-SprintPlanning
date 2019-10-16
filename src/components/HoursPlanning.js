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
      team: {},
      total: 0,
      emergency: 0,
      editMode: false,
      inputName: ''
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

  _editMode = () => {
    this.setState((prevState) => ({ editMode: !prevState.editMode}))
  };

  _onChangeInput = (ev) => {
    ev.persist();
    this.setState(() => ({ inputName: ev.target.value }));
  };

  _onPlusClick = () => {
    let key = 0;
    while (this.state.team[key]) {
      key++;
    }
    this.props.dataBlock.addMate(key, { name: this.state.inputName, d: 0, h: 0, efficiency: 100 })
  };

  render() {

    const table = [];
    forEach(this.state.team, (mate, key) => {
      table.push(
        <TeamMate
          key={key}
          mateKey={key}
          mate={mate}
          dataBlock={this.props.dataBlock}
        />
      );
    });
    let key = 0;
    while (this.state.team[key]) {
      key++;
    }
    if (this.state.editMode) {
      table.push(
        <div className="teammate">
          <div className="column name">
            <div className="add">
              <span className="plus" onClick={this._onPlusClick}>+</span>
              <input
                type={'text'}
                value={this.state.inputName}
                onChange={this._onChangeInput}
              />
            </div>
          </div>
        </div>
      );
    }

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
