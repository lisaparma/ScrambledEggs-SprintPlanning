import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AwIcon from 'awicons-react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { map, forEach } from 'lodash';

import '../style/App.scss';

import HoursPlanning from './HoursPlanning';
import { HeadingTitle } from './HeadingTitle';
import { calcTotal, decodeJSON, generateScreenshot } from '../utilities';
import { setTeamAction } from '../store/actions';
import ScreenshotModal from "./ScreenshotModal";

// Necessary for the screen reader
Modal.setAppElement('#root');

class HomePage extends React.Component {
  static propTypes = {
    teamName: PropTypes.string,
    mates: PropTypes.object,
    groups: PropTypes.object,
    data: PropTypes.objectOf(Date)
  };

  fileRef = React.createRef();
  fileReader = new FileReader();

  state = {
    fileJSON: null,
    image: null,
    isModalOpen: false
  };

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
    this.fileReader.onerror = (error) => console.error(error);
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

  _importClick = () => this.fileRef.current.click();

  _onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();

    let file = event.target.files[0];
    this.fileReader.readAsText(file);
  };

  _showScreenshot = () => {
    generateScreenshot("print", false)
    .then(screenshot => {
      this.setState({image: screenshot});
      this.setState({isModalOpen: true});
    });
  };

  render() {
    const { teamName, groups, mates, date } = this.props;

    const groupsRendered = map(groups, (group, key) => <HoursPlanning groupId={key} key={key} />);

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
          <div className="action" onClick={this._showScreenshot}>
            <AwIcon
              iconName="camera"
              className="actionIcon"
            />
            <span>Show PNG</span>
          </div>
          <div className="action" onClick={() => generateScreenshot("print", true)}>
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
        <ScreenshotModal
          isModalOpen={this.state.isModalOpen}
          closeModal={() => this.setState({isModalOpen: false})}
          screenshot={this.state.image}
        />
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
