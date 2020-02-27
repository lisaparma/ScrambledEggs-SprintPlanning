import { forEach } from "lodash";

export function calcTotal(allMates, mates, emergency) {
  let total = 0;
  forEach(mates, (mate) => {
    if (allMates[mate]) {
      const user = allMates[mate];
      const mateAvailability = (user.h + user.d * 8) * user.efficiency / 100;
      total = total + mateAvailability
    }
  });
  return total*(100 - emergency) / 100;
}


export function decodeJSON(fileJSON) {
  const info = {
    teamName: fileJSON.teamName || "DreamTeam",
    date: fileJSON.date || Date.now()
  };
  const mates = fileJSON.people;
  let groups = {};
  if (fileJSON.hasOwnProperty("groups")) {
    groups = fileJSON.groups
  }
  else {
    const groupMates = [];
    forEach(mates, (mate, key) => groupMates.push(key));
    groups = {
      group1: {
        name: fileJSON.teamName || "Team",
        mates: groupMates,
        emergency: 0
      }
    }
  }

  return { info, groups, mates };
}