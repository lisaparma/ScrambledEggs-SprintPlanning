import React from 'react';
import AwIcon from "awicons-react";
import { connect } from "react-redux";

import {HeadingTitle} from "./HeadingTitle";
import HoursPlanning from "./HoursPlanning";

import "../style/App.scss";
import {forEach} from "lodash";

import {setTeamAction} from "../store/actions";

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalF: 0,
      totalB: 0,
      fileJSON: null
    };
    this._subscriptions = [];
    this.fileReader = new FileReader();
  }

  componentDidMount() {

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
        <HeadingTitle teamName={this.props.teamName}/>
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
          <HoursPlanning title={'Front-end'} dataBlock={this.frontEndTeamBlock}/>

          <div className="recap">
            Totale: {parseInt(this.props.total)} h
          </div>
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
    teamName: state.teamName,
    mates: state.mates,
    total
  });
}


export default connect(mapStateToProps)(HomePage);
