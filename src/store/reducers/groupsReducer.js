
const groupsReducer = (state = {}, action) => {

  switch (action.type) {
    case "SET_EMERGENCY": {
      const newGroup1 = { ...state[action.groupId]};
      newGroup1.emergency = action.emergency;
      return {
        ...state,
        [action.groupId]: newGroup1
      }
    }

    default:
      return state
  }
};

export default groupsReducer;