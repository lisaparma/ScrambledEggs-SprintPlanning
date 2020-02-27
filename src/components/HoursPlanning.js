import React from 'react';
import PropTypes from 'prop-types';
import AwIcon from "awicons-react";
import { connect } from "react-redux";
import { forEach, max, keys, find } from 'lodash'

import "../style/HoursPlanning.scss";

import { setEmergencyAction } from "../store/actions";
import TeamMate from "./TeamMate";
import {calcTotal} from "../utilities";

class HoursPlanning extends React.Component {

  static propTypes = {
    groupId: PropTypes.string,
    allMates: PropTypes.object,
    name: PropTypes.string,
    mates: PropTypes.array,
    emergency: PropTypes.number
  };

  // newKey = 0;

  state = {
    editMode: false,
    // inputName: ''
  };

  // calcNewKey = (team) => {
  //   return (max(keys(team))+1);
  // };

  _onChangeEmergency = (ev) => {
    const value = ev.target.value ? parseFloat(ev.target.value) : parseFloat(0);
    if (0 <= value && value <= 100) {
      this.props.setEmergency(this.props.groupId, value);
    }
  };

  _editMode = () => {
    this.setState((prevState) => ({ editMode: !prevState.editMode}))
  };

  // _onChangeInput = (ev) => {
  //   ev.persist();
  //   this.setState(() => ({ inputName: ev.target.value }));
  // };

  // _onKeyDown = (ev) => {
  //   if (ev.key === "Enter") {
  //     this._onPlusClick();
  //   }
  // };

  // _onPlusClick = () => {
  //   //this.props.dataBlock.addMate(this.newKey, { name: this.state.inputName, d: 0, h: 0, efficiency: 100 });
  //   this.setState(() => ({ inputName: '' }));
  // };

  calcTotal(mates, emergency) {
    let total = 0;
    forEach(mates, (mate) => {
      const mateAvailability = mate.h + mate.d * 8 * mate.efficiency / 100;
      total = total + mateAvailability
    });
    return total*(100 - emergency) / 100;
  }

  render() {
    const { editMode, inputName } = this.state;
    const { mates, name, emergency, allMates } = this.props;

    const table = [];
    forEach(mates, (mate) => {
      if(find(allMates, (m, key) => key === mate)) {
        table.push(
          <TeamMate
            key={mate}
            id={mate}
            edit={editMode}
          />
        );
      }
    });

    const total = calcTotal(allMates, mates, emergency);

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
        {/*{editMode &&*/}
          {/*<div className="add">*/}
            {/*<AwIcon*/}
              {/*iconName="plus-circle"*/}
              {/*className="plus"*/}
              {/*onClick={this._onPlusClick}*/}
            {/*/>*/}
            {/*<input*/}
              {/*type={'text'}*/}
              {/*value={inputName}*/}
              {/*onChange={this._onChangeInput}*/}
              {/*onKeyDown={this._onKeyDown}*/}
            {/*/>*/}
          {/*</div>*/}
          {/*}*/}
        <div className="total">
          <p>Totale: {parseInt(total)} h</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    allMates: state.mates,
    name: state.groups[ownProps.groupId].name,
    mates: state.groups[ownProps.groupId].mates,
    emergency: state.groups[ownProps.groupId].emergency
  });
};

const mapDispatchToProps = dispatch => ({
  setEmergency: (groupId, emergency) => dispatch(setEmergencyAction(groupId, emergency))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HoursPlanning);