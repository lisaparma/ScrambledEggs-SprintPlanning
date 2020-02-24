import React from 'react';
import AwIcon from "awicons-react";

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
      totalB: 0,
      fileJSON: null
    };

    const frontEndTeam = data.frontEndTeam;
    const backEndTeam = data.backEndTeam;
    this.frontEndTeamBlock = new DataBlock(frontEndTeam);
    this.backEndTeamBlock = new DataBlock(backEndTeam);

    this._subscriptions = [];
    this.fileReader = new FileReader();
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

    this.fileReader.onload = (event) => {
      try {
        let json = JSON.parse(event.target.result);
        this.setState(() => ({fileJSON: json}));
      }
      catch (e) {
        console.error(e);
      }
    };

    this.fileReader.onerror = (error) => {
      console.error(error);
    }
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (this.state.fileJSON !== nextState.fileJSON) {
      if (nextState.fileJSON.hasOwnProperty("frontEndTeam") && nextState.fileJSON.frontEndTeam) {
        this.frontEndTeamBlock.changeTeam(nextState.fileJSON.frontEndTeam);
      }
      else {
        this.frontEndTeamBlock = undefined;
      }

      if (nextState.fileJSON.hasOwnProperty("backEndTeam" ) && nextState.fileJSON.backEndTeam) {
        this.backEndTeamBlock.changeTeam(nextState.fileJSON.backEndTeam);
      }
      else {
        this.backEndTeamBlock = undefined;
      }
    }
  }

  componentWillUnmount() {
    forEach(this._subscriptions, (subscription) => {
      subscription.unsubscribe();
    })
  }

  _importClick = () => {
    this.ref.click();
  };

  _onChangeFile(event) {
    event.stopPropagation();
    event.preventDefault();

    let file = event.target.files[0];
    this.fileReader.readAsText(file);
  }

  render() {
    return (
      <div className="page">
        <HeadingTitle teamName={data.teamName}/>
        <AwIcon
          iconName="upload"
          className="uploadIcon"
          onClick={this._importClick}
        />
        <input
          type="file"
          accept=".json"
          ref={(ref) => this.ref = ref }
          style={{display: "none"}}
          onChange={this._onChangeFile.bind(this)}
        />

        <div className="sprintPlanning">
          {this.frontEndTeamBlock &&
            <HoursPlanning title={'Front-end'} dataBlock={this.frontEndTeamBlock}/>
          }
          {this.backEndTeamBlock &&
            <HoursPlanning title={'Back-end'} dataBlock={this.backEndTeamBlock}/>
          }
          <div className="recap">
            Totale: {parseInt(this.state.totalF) + parseInt(this.state.totalB)} h
          </div>
        </div>

      </div>
    )
  }
}
