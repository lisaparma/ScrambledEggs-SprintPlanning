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
      "efficiency": 50
    },
    "lisa": {
      "name": "Lisa",
      "d": 6,
      "h": 0,
      "efficiency": 80
    },
    "dennis": {
      "name": "Dennis",
      "d": 10,
      "h": 0,
      "efficiency": 80
    },
    "davideP": {
      "name": "Davide P.",
      "d": 10,
      "h": 0,
      "efficiency": 30
    },
    "alberto": {
      "name": "Alberto",
      "d": 10,
      "h": 0,
      "efficiency": 80
    },
    "federico": {
      "name": "Federico",
      "d": 10,
      "h": 0,
      "efficiency": 80
    },
    "niccolo": {
      "name": "Niccolò",
      "d": 6,
      "h": 0,
      "efficiency": 80
    },
    "noman": {
      "name": "Noman",
      "d": 10,
      "h": 0,
      "efficiency": 80
    },
    "perla": {
      "name": "Perla",
      "d": 5,
      "h": 0,
      "efficiency": 80
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
        mates: ["davideP", "alberto", "federico", "niccolo", "perla", "noman"],
        emergency: 20
      }
  }
};

export default initialStore;