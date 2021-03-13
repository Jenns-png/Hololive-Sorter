dataSetVersion = "2021-03-11"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Generation	",
    key: "generation",
    tooltip: "Check this to filter out certain Hololive generations.",
    checked: false,
    sub: [
     { name: "Hololive 0th Gen", key: "0th" },
     { name: "Hololive 1st Gen", key: "1st" },
     { name: "Hololive 2nd Gen", key: "2nd" },
     { name: "Hololive Gamers", key: "Gamers" },
     { name: "Hololive 3rd Gen", key: "3rd" },
     { name: "Hololive 4th Gen", key: "4th" },
     { name: "Hololive 5th Gen", key: "5th" },
     { name: "Hololive ID 1st Gen", key: "1st ID" },
     { name: "Hololive ID 2nd Gen", key: "2nd ID" },
     { name: "Hololive EN 1st Gen", key: "1st EN" },
     { name: "Holostars 1st Gen", key: "1st HS" },
     { name: "Holostars 2nd Gen", key: "2nd HS" },
     { name: "Holostars 3rd Gen", key: "3rd HS" },
     { name: "Staff", key: "Staff" },
    ]
  },
  {
    name: "Remove Holostars",
    key: "holostar",
    tooltip: "Check this to remove Holostars.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Tokino Sora",
    img: "WiGkKLa.png",
    opts: {
      generation: ["0th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Roboca",
    img: "WiGkKLa.png",
    opts: {
      generation: ["0th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Sakura Miko",
    img: "WiGkKLa.png",
    opts: {
      generation: ["0th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Hoshimachi Suisei",
    img: "IMAGE URL",
    opts: {
      generation: ["0th"],
	  branch: ["JP"]
    }
  },
  {
    name: "AZKi",
    img: "IMAGE URL",
    opts: {
      generation: ["0th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Yozora Mel",
    img: "IMAGE URL",
    opts: {
      generation: ["1st"],
	  branch: ["JP"]
    }
  },
  {
    name: "Shirakami Fubuki",
    img: "IMAGE URL",
    opts: {
      generation: ["1st", "Gamers"],
	  branch: ["JP"]
    }
  },
  {
    name: "Natsuiro Matsuri",
    img: "IMAGE URL",
    opts: {
      generation: ["1st"],
	  branch: ["JP"]
    }
  },
  {
    name: "Aki Rosenthal",
    img: "IMAGE URL",
    opts: {
      generation: ["1st"],
	  branch: ["JP"]
    }
  },
  {
    name: "Akai Haato",
    img: "IMAGE URL",
    opts: {
      generation: ["1st"],
	  branch: ["JP"]
    }
  },
  {
    name: "Minato Aqua",
    img: "IMAGE URL",
    opts: {
      generation: ["2nd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Murasaki Shion",
    img: "IMAGE URL",
    opts: {
      generation: ["2nd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Nakiri Ayame",
    img: "IMAGE URL",
    opts: {
      generation: ["2nd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Yuzuki Choco",
    img: "IMAGE URL",
    opts: {
      generation: ["2nd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Oozora Subaru",
    img: "IMAGE URL",
    opts: {
      generation: ["2nd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Ookami Mio",
    img: "IMAGE URL",
    opts: {
      generation: ["Gamers"],
	  branch: ["JP"]
    }
  },
  {
    name: "Nekomata Okayu",
    img: "IMAGE URL",
    opts: {
      generation: ["Gamers"],
	  branch: ["JP"]
    }
  },
  {
    name: "Inugami Korone",
    img: "IMAGE URL",
    opts: {
      generation: ["Gamers"],
	  branch: ["JP"]
    }
  },
  {
    name: "Usada Pekora",
    img: "IMAGE URL",
    opts: {
      generation: ["3rd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Uruha Rushia",
    img: "IMAGE URL",
    opts: {
      generation: ["3rd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Shiranui Flare",
    img: "IMAGE URL",
    opts: {
      generation: ["3rd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Shirogane Noel",
    img: "IMAGE URL",
    opts: {
      generation: ["3rd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Houshou Marine",
    img: "IMAGE URL",
    opts: {
      generation: ["3rd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Amane Kanata",
    img: "IMAGE URL",
    opts: {
      generation: ["4th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Kiryu Coco",
    img: "IMAGE URL",
    opts: {
      generation: ["4th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Tsunomaki Watame",
    img: "IMAGE URL",
    opts: {
      generation: ["4th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Tokoyami Towa",
    img: "IMAGE URL",
    opts: {
      generation: ["4th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Himemori Luna",
    img: "IMAGE URL",
    opts: {
      generation: ["4th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Yukihana Lamy",
    img: "IMAGE URL",
    opts: {
      generation: ["5th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Momosuzu Nene",
    img: "IMAGE URL",
    opts: {
      generation: ["5th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Shishiro Botan",
    img: "IMAGE URL",
    opts: {
      generation: ["5th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Omaru Polka",
    img: "IMAGE URL",
    opts: {
      generation: ["5th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Mano Aloe",
    img: "IMAGE URL",
    opts: {
      generation: ["5th"],
	  branch: ["JP"],
	  graduated: true
    }
  },
  {
    name: "Ayunda Risu",
    img: "IMAGE URL",
    opts: {
      generation: ["1st ID"],
	  branch: ["ID"]
    }
  },
  {
    name: "Moona Hoshinova",
    img: "IMAGE URL",
    opts: {
      generation: ["1st ID"],
	  branch: ["ID"]
    }
  },
  {
    name: "Airani Iofifteen",
    img: "IMAGE URL",
    opts: {
      generation: ["1st ID"],
	  branch: ["ID"]
    }
  },
  {
    name: "Kureiji Ollie",
    img: "IMAGE URL",
    opts: {
      generation: ["2nd ID"],
	  branch: ["ID"]
    }
  },
  {
    name: "Anya Melfissa",
    img: "IMAGE URL",
    opts: {
      generation: ["2nd ID"],
	  branch: ["ID"]
    }
  },
  {
    name: "Pavolia Reine",
    img: "IMAGE URL",
    opts: {
      generation: ["2nd ID"],
	  branch: ["ID"]
    }
  },
  {
    name: "Mori Calliope",
    img: "IMAGE URL",
    opts: {
      generation: ["1st EN"],
	  branch: ["EN"]
    }
  },
  {
    name: "Takanashi Kiara",
    img: "IMAGE URL",
    opts: {
      generation: ["1st EN"],
	  branch: ["EN"]
    }
  },
  {
    name: "Ninomae Ina'nis",
    img: "IMAGE URL",
    opts: {
      generation: ["1st EN"],
	  branch: ["EN"]
    }
  },
  {
    name: "Gawr Gura",
    img: "IMAGE URL",
    opts: {
      generation: ["1st EN"],
	  branch: ["EN"]
    }
  },
  {
    name: "Watson Amelia",
    img: "IMAGE URL",
    opts: {
      generation: ["1st EN"],
	  branch: ["EN"]
    }
  },
  {
    name: "Hanasaki Miyabi",
    img: "IMAGE URL",
    opts: {
      generation: ["1st HS"],
	  branch: ["JP"],
	  holostar: true
    }
  },
  {
    name: "Kanade Izuru",
    img: "IMAGE URL",
    opts: {
      generation: ["1st HS"],
	  branch: ["JP"],
	  holostar: true
    }
  },
  {
    name: "Arurandeisu",
    img: "IMAGE URL",
    opts: {
      generation: ["1st HS"],
	  branch: ["JP"],
	  holostar: true
    }
  },
  {
    name: "Rikka",
    img: "IMAGE URL",
    opts: {
      generation: ["1st HS"],
	  branch: ["JP"],
	  holostar: true
    }
  },
  {
    name: "Kagami Kira",
    img: "IMAGE URL",
    opts: {
      generation: ["1st HS"],
	  branch: ["JP"],
	  holostar: true,
	  graduated: true
    }
  },
  {
    name: "Yakushiji Suzaku",
    img: "IMAGE URL",
    opts: {
      generation: ["1st HS"],
	  branch: ["JP"],
	  holostar: true,
	  graduated: true
    }
  },
  {
    name: "Astel Leda",
    img: "IMAGE URL",
    opts: {
      generation: ["2nd HS"],
	  branch: ["HS"],
	  holostar: true
    }
  },
  {
    name: "Kishido Temma",
    img: "IMAGE URL",
    opts: {
      generation: ["2nd HS"],
	  branch: ["JP"],
	  holostar: true
    }
  },
  {
    name: "Yukoku Roberu",
    img: "IMAGE URL",
    opts: {
      generation: ["2nd HS"],
	  branch: ["JP"],
	  holostar: true
    }
  },
  {
    name: "Kageyama Shien",
    img: "IMAGE URL",
    opts: {
      generation: ["3rd HS"],
	  branch: ["JP"],
	  holostar: true
    }
  },
  {
    name: "Aragami Oga",
    img: "IMAGE URL",
    opts: {
      generation: ["3rd HS"],
	  branch: ["JP"],
	  holostar: true
    }
  },
  {
    name: "Tsukishita Kaoru",
    img: "IMAGE URL",
    opts: {
      generation: ["3rd HS"],
	  branch: ["JP"],
	  holostar: true,
	  graduated: true
    }
  },
  {
    name: "A-chan",
    img: "IMAGE URL",
    opts: {
      generation: ["Staff"],
	  branch: ["JP", "EN", "ID"]  
    }
  },
  {
    name: "Daidou Shinove",
    img: "IMAGE URL",
    opts: {
      generation: ["Staff"],
	  branch: ["JP"]
    }
  },
  {
    name: "EnMa",
    img: "IMAGE URL",
    opts: {
      generation: ["Staff"],
	  branch: ["EN"]
    }
  },
  {
    name: "JenMa",
    img: "IMAGE URL",
    opts: {
      generation: ["Staff"],
	  branch: ["EN"]
    }
  }

];
