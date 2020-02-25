import React from 'react';
import PropTypes from 'prop-types';
import { forEach, max, keys } from 'lodash'
import AwIcon from "awicons-react";

import "../style/HoursPlanning.scss";

import TeamMate from "./TeamMate";

import { connect } from "react-redux";
import {setEmergencyAction} from "../store/actions";

class HoursPlanning extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    mates: PropTypes.object,
    emergency: PropTypes.number,
    total: PropTypes.number,
  };

  newKey = 0;

  state = {
    editMode: false,
    inputName: ''
  };

  calcNewKey = (team) => {
    return (max(keys(team))+1);
  };

  _onChangeEmergency = (ev) => {
    const value = ev.target.value ? parseFloat(ev.target.value) : parseFloat(0);
    if (0 <= value && value <= 100) {
      this.props.setEmergency(value);
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
    const { editMode, inputName } = this.state;
    const { mates, title, total, emergency } = this.props;

    const table = [];
    forEach(mates, (mate, id) => {
      table.push(
        <TeamMate
          key={id}
          id={id}
          edit={editMode}
        />
      );
    });

    return (
      <div className="hoursPlanning">
        <div className="title-end">
          <h3>{title}</h3>
          <AwIcon
            iconName="pencil-alt"
            className="icon"
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
            <AwIcon
              iconName="plus-circle"
              className="plus"
              onClick={this._onPlusClick}
            />
            <input
              type={'text'}
              value={inputName}
              onChange={this._onChangeInput}
              onKeyDown={this._onKeyDown}
            />
          </div>
          }
        <div className="total">
          <p>Totale: {parseInt(total)} h</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  let total = 0;
  forEach(state.mates, (mate) => {
    total = total + (mate.h+mate.d*8*mate.efficiency/100)
  });
  total = total*(100-state.emergency)/100;
  return({
    mates: state.mates,
    emergency: state.emergency,
    total
  });
};

const mapDispatchToProps = dispatch => ({
  setEmergency: (emergency) => dispatch(setEmergencyAction(emergency))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HoursPlanning);