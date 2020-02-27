const infoReducer = (state = {}, action) => {

  switch (action.type) {

    case "SET_TEAM": {
      return {
        ...action.info
      }
    }

    default:
      return state
  }
};

export default infoReducer;