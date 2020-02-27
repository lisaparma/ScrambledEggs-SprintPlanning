import {forEach} from "lodash";

function calcTotal(mates, emergency) {
  let total = 0;
  forEach(mates, (mate) => {
    const mateAvailability = mate.h + mate.d * 8 * mate.efficiency / 100;
    total = total + mateAvailability
  });
  return total*(100 - emergency) / 100;
}

const inizialStore = {
  info: {
    teamName: "Scrambled Eggs",
    data: Date.now()
  },
  mates: {
    "cataldo": {
      "name": "Cataldo",
      "d": 10,
      "h": 0,
      "efficiency": 100
    },
    "lisa": {
      "name": "Lisa",
      "d": 6,
      "h": 0,
      "efficiency": 100
    },
    "dennis": {
      "name": "Dennis",
      "d": 10,
      "h": 0,
      "efficiency": 100
    },
    "davide": {
      "name": "Davide P.",
      "d": 10,
      "h": 0,
      "efficiency": 100
    },
    "alberto": {
      "name": "Alberto",
      "d": 10,
      "h": 0,
      "efficiency": 100
    }
  },
  groups: {
    "frontend": {
      name: "Front-end",
      mates: ["cataldo", "lisa", "dennis"],
      emergency: 20
    },
    "backend": {
        name: "Back-end",
        mates: ["davide", "alberto"],
        emergency: 20
      }
  }
};

inizialStore.info.total = calcTotal(inizialStore.mates, inizialStore.emergency);

export default inizialStore;