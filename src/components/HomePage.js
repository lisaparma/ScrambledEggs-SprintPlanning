import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import AwIcon from "awicons-react";
import { connect } from "react-redux";
import { map, forEach } from 'lodash';
import html2canvas from "html2canvas";

import "../style/App.scss";

import { HeadingTitle } from "./HeadingTitle";
import HoursPlanning from "./HoursPlanning";
import { calcTotal, decodeJSON } from "../utilities";
import { setTeamAction } from "../store/actions";


class HomePage extends React.Component {

  static propTypes = {
    teamName: PropTypes.string,
    mates: PropTypes.object,
    groups: PropTypes.object,
    data: PropTypes.objectOf(Date)
  };

  fileRef = React.createRef();

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
      if(nextState.fileJSON.hasOwnProperty("people")) {
        const { info, groups, mates } = decodeJSON(nextState.fileJSON);
        this.props.setTeam(info, groups, mates);
      }
      else {
        console.error("Invalid json")
      }
    }
  }

  _importClick = () => {
    this.fileRef.current.click();
  };

  _onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();

    let file = event.target.files[0];
    this.fileReader.readAsText(file);
  };

  _downloadClick = () => {
    html2canvas(document.querySelector("#print"))
      .then(canvas => {
        const img = canvas.toDataURL();
        const link = document.createElement("a");
        const date = new Date(this.props.date);
        link.download = `sprintPlanning_${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        link.href = img;
        link.click();
    });
  };

  render() {
    const { teamName, groups, mates, date } = this.props;

    const groupsRendered = map(groups, (group, key) =>
      <HoursPlanning groupId={key} key={key} />
    );

    let total = 0;
    forEach(groups, (group) => {
      total = total  + calcTotal(mates, group.mates, group.emergency);
    });

    return (
      <div className="page" id="print">
        <HeadingTitle teamName={teamName} date={date}/>
        <div className="actionIcons">
          <div className="action" onClick={this._importClick}>
            <AwIcon
              iconName="upload"
              className="actionIcon"
            />
            <span>Upload JSON</span>
            <input
              type="file"
              accept=".json"
              ref={this.fileRef}
              style={{display: "none"}}
              onChange={this._onChangeFile}
            />
          </div>
          <div className="action" onClick={this._downloadClick}>
            <AwIcon
              iconName="download"
              className="actionIcon"
            />
            <span>Download as PNG</span>
          </div>
        </div>

        <div className="sprintPlanning">

          <Fragment>
            {groupsRendered}
          </Fragment>

          <div className="recap">
            Totale: {parseInt(total)} h
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    teamName: state.info.teamName,
    mates: state.mates,
    groups: state.groups,
    date: state.info.date
  });
};

const mapDispatchToProps = dispatch => ({
  setTeam: (info, groups, mates) => dispatch(setTeamAction(info, groups, mates))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
