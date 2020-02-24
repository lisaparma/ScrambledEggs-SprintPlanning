import React from 'react';
import PropTypes from 'prop-types';
import { forEach, max, keys } from 'lodash'
import AwIcon from "awicons-react";

import "../style/HoursPlanning.scss";

import {TeamMate} from "./TeamMate";

import { connect } from "react-redux";

class HoursPlanning extends React.Component {

  static propTypes = {
    title: PropTypes.string
  };

  newKey;

  constructor(props) {
    super(props);
    this.state = {
      emergency: 0,
      editMode: false,
      inputName: ''
    };
    this.newKey = 0;
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
    const { editMode, inputName, emergency } = this.state;
    const { mates } = this.props;

    const table = [];
    forEach(mates, (mate, key) => {
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
          <p>Totale: {parseInt(this.props.total)} h</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  let total = 0;
  forEach(state.mates, (mate) => {
    total = total + (mate.h+mate.d*8*100/mate.efficiency)
  });
  return({
    mates: state.mates,
    total
  });
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HoursPlanning);