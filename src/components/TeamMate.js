import React from 'react';
import AwIcon from 'awicons-react';

import "../style/TeamMate.scss";
import PropTypes from "prop-types";
import {DataBlock} from "../data/DataBlock";

export class TeamMate extends React.Component {

  static propTypes = {
    mateKey: PropTypes.string,
    mate: PropTypes.object,
    dataBlock: PropTypes.instanceOf(DataBlock),
    edit: PropTypes.bool
  };

  _onChangeD = (ev) => {
    const value = ev.target.value ? parseFloat(ev.target.value) : parseFloat(0);
    if (0 <= value) {
      this.props.dataBlock.changeValue(this.props.mateKey, 'd', value);
    }
  };

  _onChangeH = (ev) => {
    const value = ev.target.value ? parseFloat(ev.target.value) : parseFloat(0);
    if (0 <= value) {
      this.props.dataBlock.changeValue(this.props.mateKey, 'h', value);
    }
  };

  _onChangeEff = (ev) => {
    const value = ev.target.value ? parseFloat(ev.target.value) : parseFloat(0);
    if (0 <= value && value <= 100) {
      this.props.dataBlock.changeValue(this.props.mateKey, 'efficiency', value);
    }
  };

  _onMinusClick = () => {
    this.props.dataBlock.deleteMate(this.props.mateKey);
  };

  render() {
    const {mate, edit} = this.props;

    return (
      <div className="teammate">
        <div className="column">
          {edit &&
            <AwIcon
              iconName="times"
              className="minus"
              onClick={this._onMinusClick}
            />
          }
          {mate.name}
        </div>

        <div className="column">
          <input
            type="number"
            value={mate.d}
            min={0}
            max={100}
            onChange={this._onChangeD}
          />
          <span>d</span>
          <input
            type="number"
            value={mate.h}
            min={0}
            max={100}
            onChange={this._onChangeH}
          />
          <span>h</span>
        </div>

        <div className="column">
          <input
            type="number"
            value={mate.efficiency}
            min={0}
            max={100}
            onChange={this._onChangeEff}
          />
          <span>%</span>
        </div>
      </div>
    )
  }
}
