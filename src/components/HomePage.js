import React from 'react';
import AwIcon from "awicons-react";
import { connect } from "react-redux";

import {HeadingTitle} from "./HeadingTitle";
import HoursPlanning from "./HoursPlanning";

import "../style/App.scss";
import {forEach} from "lodash";
import PropTypes from "prop-types";


class HomePage extends React.Component {

  static propTypes = {
    teamName: PropTypes.string,
    mates: PropTypes.object,
    total: PropTypes.number,
  };

  state = {
    fileJSON: null
  };

  fileReader = new FileReader();

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

      if (nextState.fileJSON.hasOwnProperty("backEndTeam" ) && nextState.fileJSON.backEndTeam) {
        this.backEndTeamBlock.changeTeam(nextState.fileJSON.backEndTeam);
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
    const { teamName, total } = this.props;
    return (
      <div className="page">
        <HeadingTitle teamName={teamName}/>
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
          <HoursPlanning title={'Front-end'} />

          <div className="recap">
            Totale: {parseInt(total)} h
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  let total = 0;
  forEach(state.mates, (mate) => {
    total = total + (mate.h+mate.d*8*mate.efficiency/100)
  });
  total = total*(100-state.emergency)/100;
  return({
    teamName: state.teamName,
    mates: state.mates,
    total
  });
};


export default connect(mapStateToProps)(HomePage);
