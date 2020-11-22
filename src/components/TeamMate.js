import React from 'react';
import PropTypes from 'prop-types';
import AwIcon from 'awicons-react';
import { connect } from 'react-redux';
import {
  deleteMateAction,
  setDaysAction,
  setEfficiencyAction,
  setHoursAction
} from "../store/actions";

import "../style/TeamMate.scss";

function TeamMate(
  {
    id, edit, emergency,
    mate,
    setDays, setHours, setEfficiency, deleteMate
  }) {

  const onChangeDays = (ev) => {
    const value = ev.target.value ? parseFloat(ev.target.value) : parseFloat(0);
    if (0 <= value) {
      setDays(id, value);
    }
  };

  const onChangeHours = (ev) => {
    const value = ev.target.value ? parseFloat(ev.target.value) : parseFloat(0);
    if (0 <= value) {
      setHours(id, value);
    }
  };

  const onChangeEfficiency = (ev) => {
    const value = ev.target.value ? parseFloat(ev.target.value) : parseFloat(0);
    if (0 <= value && value <= 100) {
      setEfficiency(id, value)
    }
  };

  const onMinusClick = () => deleteMate(id);

  const hours = ((mate.d * 8 + mate.h) * mate.efficiency / 100)* (100 - emergency) / 100;

  return (
    <div className="teammate">
      <div className="column">
        {edit &&
          <AwIcon
            iconName="times"
            className="minus"
            onClick={onMinusClick}
          />
        }
        {mate.name}<span className="hours4every">({parseInt(hours)} h)</span>
      </div>

      <div className="column">
        <input
          type="number"
          defaultValue={mate.d}
          min={0}
          max={100}
          onChange={onChangeDays}
        />
        <span>d</span>
        <input
          type="number"
          defaultValue={mate.h}
          min={0}
          max={100}
          onChange={onChangeHours}
        />
        <span>h</span>
      </div>

      <div className="column">
        <input
          type="number"
          defaultValue={mate.efficiency}
          min={0}
          max={100}
          onChange={onChangeEfficiency}
        />
        <span>%</span>
      </div>
    </div>
  )
}

TeamMate.propTypes = {
  id: PropTypes.string,
  mate: PropTypes.object,
  edit: PropTypes.bool,
  emergency: PropTypes.number
};

const mapStateToProps = (state, ownProps) => ({
  mate: state.mates[ownProps.id]
});

const mapDispatchToProps = dispatch => ({
  setDays: (id, days) => dispatch(setDaysAction(id, days)),
  setHours: (id, hours) => dispatch(setHoursAction(id, hours)),
  setEfficiency: (id, efficiency) => dispatch(setEfficiencyAction(id, efficiency)),
  deleteMate: (id) => dispatch(deleteMateAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamMate);