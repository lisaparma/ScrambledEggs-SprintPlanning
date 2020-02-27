// Mate actions
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


// Group actions
export const setEmergencyAction = (groupId, emergency) => ({
  type: "SET_EMERGENCY",
  groupId,
  emergency
});

export const deleteMateAction = (id) => ({
  type: "DELETE_MATE",
  id
});