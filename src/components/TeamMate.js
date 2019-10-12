import React from 'react';
import {forEach} from 'lodash'

import "../style/App.scss";
import PropTypes from "prop-types";
import {DataBlock} from "../DataBlock";

export class TeamMate extends React.Component {

  static propTypes = {
    mate: PropTypes.object,
    dataBlock: PropTypes.instanceOf(DataBlock)
  };

  constructor(props) {
    super(props);
  }

  _onChangeD = (ev) => {
    const value = ev.target.value ? parseFloat(ev.target.value) : parseFloat(0);
    this.props.dataBlock.changeValue(this.props.mate.name, 'd', value)
  };

  _onChangeH = (ev) => {
    const value = ev.target.value ? parseFloat(ev.target.value) : parseFloat(0);
    this.props.dataBlock.changeValue(this.props.mate.name, 'h', value)
  };

  _onChangeEff = (ev) => {
    const value = ev.target.value ? parseFloat(ev.target.value) : parseFloat(0);
    this.props.dataBlock.changeValue(this.props.mate.name, 'efficiency', value)
  };

  render() {
    const {mate} = this.props;
    const total = ((mate.d*8) + mate.h)/100 * mate.efficiency;

    return (
      <div className="teammate">
        <div className="column">
          {mate.name}
        </div>

        <div className="column">
          <input type="number" value={mate.d} onChange={this._onChangeD}/>
          <span>d</span>
          <input type="number" value={mate.h} onChange={this._onChangeH}/>
          <span>h</span>
        </div>

        <div className="column">
          <input type="number" value={mate.efficiency} onChange={this._onChangeEff} />
          <span>%</span>
        </div>

        <div className="column">
          <span>{total}</span>
        </div>


      </div>
    )
  }
}
