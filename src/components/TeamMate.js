import React from 'react';
import {forEach} from 'lodash'

import "../style/App.scss";
import PropTypes from "prop-types";
import {DataBlock} from "../DataBlock";

export class TeamMate extends React.Component {

  static propTypes = {
    mateKey: PropTypes.number,
    mate: PropTypes.object,
    dataBlock: PropTypes.instanceOf(DataBlock)
  };

  constructor(props) {
    super(props);
  }

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

  render() {
    const {mate} = this.props;

    return (
      <div className="teammate">
        <div className="column">
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
