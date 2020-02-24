const  setTeam = (state, action) => {

  switch (action.type) {
    case "SET_TEAM":
      return {
        ...state,
        teamName: action.team.teamName,
        team: action.team
      };
    default:
      return state
  }
};

export default setTeam;