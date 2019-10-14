import React from 'react';

import {HeadingTitle} from "./HeadingTitle";
import {HoursPlanning} from "./HoursPlanning";

import "../style/App.scss";
import {DataBlock} from "../DataBlock";
import {forEach} from "lodash";

export class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalF: 0,
      totalB: 0
    };

    const frontEndTeam = {
      0: {name: 'Cataldo', d: 10, h: 0, efficiency: 70},
      1: {name: 'Lisa', d: 6, h: 0, efficiency: 80},
      2: {name: 'Dennis', d: 10, h: 0, efficiency: 80}
    };
    const backEndTeam = {
      0: { name: 'Davide B.', 'd': 10, 'h': 0, 'efficiency': 70},
      1: { name: 'Davide P.', 'd': 10, 'h': 0, 'efficiency': 80},
      2: { name: 'Alberto', 'd': 10, 'h': 0, 'efficiency': 30}
    };
    this.frontEndTeamBlock = new DataBlock(frontEndTeam);
    this.backEndTeamBlock = new DataBlock(backEndTeam);
    this._subscriptions = [];
  }

  componentDidMount() {
    this._subscriptions.push(
      this.frontEndTeamBlock.total.subscribe((totalF) => {
        this.setState(() => ({ totalF }));
      })
    );

    this._subscriptions.push(
      this.backEndTeamBlock.total.subscribe((totalB) => {
        this.setState(() => ({ totalB }));
      })
    );
  }

  componentWillUnmount() {
    forEach(this._subscriptions, (subscription) => {
      subscription.unsubscribe();
    })
  }

  render() {
    return (
      <div className="page">
        <HeadingTitle/>

        <div className="sprintPlanning">
          <HoursPlanning title={'Front-end'} dataBlock={this.frontEndTeamBlock}/>
          <HoursPlanning title={'Back-end'} dataBlock={this.backEndTeamBlock} />
          <div className="recap">
            Totale: {parseInt(this.state.totalF) + parseInt(this.state.totalB)} h
          </div>
        </div>

      </div>
    )
  }
}
