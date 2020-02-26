import { forEach } from 'lodash';

function calcTotal(mates, emergency) {
  let total = 0;
  forEach(mates, (mate) => {
    const mateAvailability = mate.h + mate.d * 8 * mate.efficiency / 100;
    total = total + mateAvailability
  });
  return total*(100 - emergency) / 100;
}

const matesReducer = (state, action) => {

  switch (action.type) {
    case "SET_TEAM":
      return {
        ...state,
      };

    case "SET_DAYS":
      const newMates1 = {...state.mates};
      const newMate1 = { ...newMates1[action.id] };
      newMate1['d'] = action.days;
      newMates1[action.id] = newMate1;
      return {
        ...state,
        mates: newMates1,
        total: calcTotal(newMates1, state.emergency)
      };

    case "SET_HOURS":
      const newMates2 = {...state.mates};
      const newMate2 = { ...newMates2[action.id] };
      newMate2['h'] = action.hours;
      newMates2[action.id] = newMate2;
      return {
        ...state,
        mates: newMates2,
        total: calcTotal(newMates2, state.emergency)
      };

    case "SET_EFFICIENCY":
      const newMates3 = { ...state.mates};
      const newMate3 = { ...newMates3[action.id] };
      newMate3['efficiency'] = action.efficiency;
      newMates3[action.id] = newMate3;
      return {
        ...state,
        mates: newMates3,
        total: calcTotal(newMates3, state.emergency)
      };

    case "SET_EMERGENCY":
      return {
        ...state,
        emergency: action.emergency,
        total: calcTotal(state.mates, action.emergency)
      };

    case "DELETE_MATE": {
      const newMates4 = { ...state.mates };
      delete newMates4[action.id];
      return {
        ...state,
        mates: newMates4
      }
    }

    default:
      return state
  }
};

export default matesReducer;