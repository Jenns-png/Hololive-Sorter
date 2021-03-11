dataSetVersion = "2021-03-11"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Generation	",
    key: "generation",
    tooltip: "Check this to restrict to certain Hololive generations.",
    checked: false,
    sub: [
      { name: "Hololive 3rd Generation", key: "3rd" }
    ]
  },
  {
    name: "Remove Holostars",
    key: "holostar",
    tooltip: "Check this to remove Holostars.",
    checked: false,
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Usada Pekora",
    img: "II5kpjJ.png",
    opts: {
      generation: ["3rd"],
    }
  },
  {
    name: "Uruha Rushia",
    img: "XCZ7fTk.png",
    opts: {
      generation: ["3rd"],
    }
  },
  {
    name: "Houshou Marine",
    img: "pRnxg4a.png",
    opts: {
      generation: ["3rd"],
    }
  }
];
