const matesReducer = (state = {}, action) => {

  switch (action.type) {
    case "SET_TEAM": {
      return {
        ...action.mates
      }
    }

    case "SET_DAYS":
      const newMate1 = { ...state[action.id] };
      newMate1['d'] = action.days;
      return {
        ...state,
        [action.id]: newMate1
      };

    case "SET_HOURS":
      const newMate2 = { ...state[action.id] };
      newMate2['h'] = action.hours;
      return {
        ...state,
        [action.id]: newMate2,
      };

    case "SET_EFFICIENCY":
      const newMate3 = { ...state[action.id] };
      newMate3['efficiency'] = action.efficiency;
      return {
        ...state,
        [action.id]: newMate3,
      };

    case "ADD_MATE": {
      const newMates1 = { ...state };
      newMates1[action.id] = {
        name: action.name,
        d: 0,
        h: 0,
        efficiency: 100
      };
      return {
        ...newMates1
      }
    }

    case "DELETE_MATE": {
      const newMates1 = { ...state };
      delete newMates1[action.id];
      return {
        ...newMates1
      }
    }

    default:
      return state
  }
};

export default matesReducer;