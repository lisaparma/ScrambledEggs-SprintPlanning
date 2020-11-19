import React from 'react';
import PropTypes from 'prop-types';
import AwIcon from 'awicons-react';
import { connect } from 'react-redux';
import { forEach, find } from 'lodash'
import html2canvas from 'html2canvas';

import "../style/HoursPlanning.scss";

import TeamMate from "./TeamMate";
import { addMateAction, setEmergencyAction } from "../store/actions";
import { calcTotal } from "../utilities";

class HoursPlanning extends React.Component {

  static propTypes = {
    groupId: PropTypes.string,
    allMates: PropTypes.object,
    name: PropTypes.string,
    mates: PropTypes.array,
    emergency: PropTypes.number
  };

  inputRef = React.createRef();

  state = {
    editMode: false,
  };

  _onChangeEmergency = (ev) => {
    const value = ev.target.value ? parseFloat(ev.target.value) : parseFloat(0);
    if (0 <= value && value <= 100) {
      this.props.setEmergency(this.props.groupId, value);
    }
  };

  _editMode = () => {
    this.setState((prevState) => ({ editMode: !prevState.editMode}))
  };

  _onKeyDown = (ev) => {
    if (ev.key === "Enter") {
      this._onPlusClick();
    }
  };

  _screen = (selector) => {
    const height = window.scrollY;
    window.scrollTo(0, 0);
    html2canvas(document.querySelector(`#${selector}`))
      .then(canvas => {
        const img = canvas.toDataURL();
        const link = document.createElement("a");
        const date = new Date(this.props.date);
        link.download = `sprintPlanning_${selector}_${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        link.href = img;
        link.click();
      });
    window.scrollTo(0, height);
  };

  _onPlusClick = () => {
    let id = this.inputRef.current.value.toLocaleLowerCase();
    while(find(this.props.allMates, (mate, key) => key === id)) {
      id = id + "_"
    }
    this.props.addMate(id, this.inputRef.current.value, this.props.groupId);
    this.inputRef.current.value = "";

  };

  render() {
    const { editMode, inputName } = this.state;
    const { mates, name, emergency, allMates } = this.props;

    const table = [];
    forEach(mates, (mate) => {
      if(find(allMates, (m, key) => key === mate)) {
        table.push(
          <TeamMate
            key={mate}
            id={mate}
            edit={editMode}
            emergency={emergency}
          />
        );
      }
    });

    const total = calcTotal(allMates, mates, emergency);

    return (
      <div id={name.toLowerCase().replace("-", "")} className="hoursPlanning">
        <div className="title-end">
          <h3>{name}</h3>
          <div style={{ display: 'flex' }}>
            <AwIcon
              iconName="camera"
              className="icon"
              onClick={() => this._screen(name.toLowerCase().replace("-", ""))}
            />
            <AwIcon
              iconName="pencil-alt"
              className="icon"
              onClick={this._editMode}
            />
          </div>
        </div>
        <div className="tableHeader">
          <span className="column name">Nome</span>
          <span className="column">Ore lavorative</span>
          <span className="column">Efficienza</span>
          <span className="column">Emergenza</span>
        </div>
        <div className="tableContent">
          <div className="team">
            {table}
          </div>
          <div className="column emergency">
            <span>-</span>
            <input
              type="number"
              defaultValue={emergency}
              min={0}
              max={100}
              onChange={this._onChangeEmergency}
            />
            <span>%</span>
          </div>
        </div>
        {editMode &&
          <div className="add">
            <AwIcon
              iconName="plus-circle"
              className="plus"
              onClick={this._onPlusClick}
            />
            <input
              type={'text'}
              value={inputName}
              ref={this.inputRef}
              onKeyDown={this._onKeyDown}
            />
          </div>
          }
        <div className="total">
          <p>Totale: {parseInt(total)} h</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    allMates: state.mates,
    name: state.groups[ownProps.groupId].name,
    mates: state.groups[ownProps.groupId].mates,
    emergency: state.groups[ownProps.groupId].emergency,
    date: state.info.date
  });
};

const mapDispatchToProps = dispatch => ({
  setEmergency: (groupId, emergency) => dispatch(setEmergencyAction(groupId, emergency)),
  addMate: (id, name, groupId) => dispatch(addMateAction(id, name, groupId))
});

export default connect(mapStateToProps, mapDispatchToProps)(HoursPlanning);