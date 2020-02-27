const initialStore = {
  info: {
    teamName: "Scrambled Eggs",
    date: Date.now()
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

export default initialStore;