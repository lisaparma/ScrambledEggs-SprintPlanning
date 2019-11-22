import React from 'react';

import {HeadingTitle} from "./HeadingTitle";
import {HoursPlanning} from "./HoursPlanning";

import "../style/App.scss";
import {DataBlock} from "../data/DataBlock";
import {forEach} from "lodash";

import * as data from "../data/teamData.json";

export class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalF: 0,
      totalB: 0
    };

    const frontEndTeam = data.frontEndTeam;
    const backEndTeam = data.backEndTeam;
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
        <HeadingTitle teamName={data.teamName}/>

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
