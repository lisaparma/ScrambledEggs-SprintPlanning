import { forEach, remove } from 'lodash';

const groupsReducer = (state = {}, action) => {

  switch (action.type) {
    case "SET_EMERGENCY": {
      const newGroup = { ...state[action.groupId]};
      newGroup.emergency = action.emergency;
      return {
        ...state,
        [action.groupId]: newGroup
      }
    }

    case "ADD_MATE": {
      const newGroup = { ...state[action.groupId]};
      newGroup.mates.push(action.id);
      return {
        ...state,
        [action.groupId]: newGroup
      }
    }

    case "DELETE_MATE": {
      const newState = { ...state };
      forEach(newState, (group, key) => {
        remove(group.mates, (k) => k === action.id);
        if(group.mates.length === 0) {
          delete newState[key]
        }
      });
      return {
        ...newState
      }
    }

    default:
      return state
  }
};

export default groupsReducer;