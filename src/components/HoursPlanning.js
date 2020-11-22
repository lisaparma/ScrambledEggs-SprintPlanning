import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import AwIcon from 'awicons-react';
import { connect } from 'react-redux';
import { map, find } from 'lodash'

import "../style/HoursPlanning.scss";

import TeamMate from "./TeamMate";
import { addMateAction, setEmergencyAction } from "../store/actions";
import { calcTotal, generateScreenshot } from "../utilities";
import ScreenshotModal from "./ScreenshotModal";

function HoursPlanning(
  {
    groupId,
    mates, name, emergency, allMates, date,
    setEmergency, addMate
  }) {

  const [table, setTable] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [image, setImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const inputRef = useRef(undefined);

  useEffect(() => {
    const teammateTable = map(mates, (mate) => {
      if(find(allMates, (m, key) => key === mate)) {
        return (
          <TeamMate
            key={mate}
            id={mate}
            edit={editMode}
            emergency={emergency}
          />
        );
      }});
    setTable(teammateTable);
  }, [allMates, mates, emergency, editMode])

  const onChangeEmergency = (ev) => {
    const value = ev.target.value ? parseFloat(ev.target.value) : parseFloat(0);
    if (0 <= value && value <= 100) {
      setEmergency(groupId, value);
    }
  };

  const showScreenshot = (selector) => {
    generateScreenshot(selector, false)
    .then(screenshot => {
      setImage(screenshot);
      setIsModalOpen(true);
    });
  };

  const onPlusClick = () => {
    let id = inputRef.current.value.toLocaleLowerCase();
    while(find(allMates, (mate, key) => key === id)) {
      id = id + "_"
    }
    addMate(id, inputRef.current.value, groupId);
    inputRef.current.value = "";
  };

  const onKeyDown = (ev) => ev.key === "Enter" ? onPlusClick() : void 0;

  const total = calcTotal(allMates, mates, emergency);

  return (
    <div id={name.toLowerCase().replace("-", "")} className="hoursPlanning">
      <div className="title-end">
        <h3>{name}</h3>
        <div style={{ display: 'flex' }}>
          <AwIcon
            iconName="download"
            className="icon"
            onClick={() => generateScreenshot(name.toLowerCase().replace("-", ""), true)}
          />
          <AwIcon
            iconName="camera"
            className="icon"
            onClick={() => showScreenshot(name.toLowerCase().replace("-", ""))}
          />
          <AwIcon
            iconName="pencil-alt"
            className="icon"
            onClick={() => setEditMode((editMode) => !editMode)}
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
            onChange={onChangeEmergency}
          />
          <span>%</span>
        </div>
      </div>
      {editMode &&
        <div className="add">
          <AwIcon
            iconName="plus-circle"
            className="plus"
            onClick={onPlusClick}
          />
          <input
            type={'text'}
            ref={inputRef}
            onKeyDown={onKeyDown}
          />
        </div>
        }
      <div className="total">
        <p>Totale: {parseInt(total)} h</p>
      </div>
      <ScreenshotModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        screenshot={image}
      />
    </div>
  )
}

HoursPlanning.propTypes = {
  groupId: PropTypes.string,
  allMates: PropTypes.object,
  name: PropTypes.string,
  mates: PropTypes.array,
  emergency: PropTypes.number
};

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