import React from 'react';

import {HeadingTitle} from "./HeadingTitle";
import {HoursPlanning} from "./HoursPlanning";

import "../style/App.scss";
import {DataBlock} from "../DataBlock";

export class HomePage extends React.Component {

  constructor(props) {
    super(props);
    const frontEndTeam = [
      { name: 'Cataldo', d: 10, h: 0, efficiency: 70 },
      { name: 'Lisa', d: 6, h: 0, efficiency: 80 },
      { name: 'Dennis', d: 10, h: 0, efficiency: 80 }
    ];
    const backEndTeam = [
      { name: 'Davide B.', 'd': 10, 'h': 0, 'efficiency': 70},
      { name: 'Davide P.', 'd': 10, 'h': 0, 'efficiency': 80},
      { name: 'Alberto', 'd': 10, 'h': 0, 'efficiency': 30}
    ];
    this.frontEndTeamBlock = new DataBlock(frontEndTeam);
    this.backEndTeamBlock = new DataBlock(backEndTeam);
  }

  componentDidMount() {
    // TODO: sottoscriversi ai block per avere il report finale
  }

  render() {
    return (
      <div className="page">
        <HeadingTitle/>

        <div className="sprintPlanning">
          <HoursPlanning title={'Front-end'} dataBlock={this.frontEndTeamBlock}/>
          <HoursPlanning title={'Back-end'} dataBlock={this.backEndTeamBlock} />
        </div>

      </div>
    )
  }
}
