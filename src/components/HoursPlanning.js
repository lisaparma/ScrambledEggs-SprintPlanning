import React from 'react';
import PropTypes from 'prop-types';
import AwIcon from "awicons-react";
import { connect } from "react-redux";
import { forEach, max, keys } from 'lodash'

import "../style/HoursPlanning.scss";

import { setEmergencyAction } from "../store/actions";
import TeamMate from "./TeamMate";

class HoursPlanning extends React.Component {

  static propTypes = {
    groupId: PropTypes.string,
    name: PropTypes.string,
    mates: PropTypes.array,
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
      this.props.setEmergency(this.props.groupId, value);
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
    //this.props.dataBlock.addMate(this.newKey, { name: this.state.inputName, d: 0, h: 0, efficiency: 100 });
    this.setState(() => ({ inputName: '' }));
  };

  render() {
    const { editMode, inputName } = this.state;
    const { mates, name, total, emergency } = this.props;

    const table = [];
    forEach(mates, (mate) => {
      table.push(
        <TeamMate
          key={mate}
          id={mate}
          edit={editMode}
        />
      );
    });

    return (
      <div className="hoursPlanning">
        <div className="title-end">
          <h3>{name}</h3>
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

const mapStateToProps = (state, ownProps) => {
  return({
    name: state.groups[ownProps.groupId].name,
    mates: state.groups[ownProps.groupId].mates,
    emergency: state.groups[ownProps.groupId].emergency,
    total: state.groups[ownProps.groupId].total
  });
};

const mapDispatchToProps = dispatch => ({
  setEmergency: (groupId, emergency) => dispatch(setEmergencyAction(groupId, emergency))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HoursPlanning);