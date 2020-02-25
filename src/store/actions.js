
export const setTeamAction = (team) => ({
  type: "SET_TEAM",
  team
});

export const setDaysAction = (id, days) => ({
  type: "SET_DAYS",
  id,
  days
});

export const setHoursAction = (id, hours) => ({
  type: "SET_HOURS",
  id,
  hours
});

export const setEfficiencyAction = (id, efficiency) => ({
  type: "SET_EFFICIENCY",
  id,
  efficiency
});

export const setEmergencyAction = (emergency) => ({
  type: "SET_EMERGENCY",
  emergency
});


export const deleteMateAction = (id) => ({
  type: "DELETE_MATE",
  id
});