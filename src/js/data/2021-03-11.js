dataSetVersion = "2021-03-11"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Generation	",
    key: "generation",
    tooltip: "Check this to filter out certain Hololive generations.",
    checked: true,
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
     { name: "Staff", key: "Staff", checked: false },
    ]
  },
  {
    name: "Remove Holostars",
    key: "holostar",
    tooltip: "Check this to remove Holostars.",
    checked: true
  },
  {
    name: "Remove Retired Talents",
    key: "graduated",
    tooltip: "Uncheck this to remove retired talents.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Tokino Sora",
    img: "kf0tg3O.png",
    opts: {
      generation: ["0th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Roboco",
    img: "Vq0uSOl.png",
    opts: {
      generation: ["0th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Sakura Miko",
    img: "81ZRJMl.png",
    opts: {
      generation: ["0th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Hoshimachi Suisei",
    img: "goVzjCW.png",
    opts: {
      generation: ["0th"],
	  branch: ["JP"]
    }
  },
  {
    name: "AZKi",
    img: "VvXqzCq.png",
    opts: {
      generation: ["0th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Yozora Mel",
    img: "cB9RmqA.png",
    opts: {
      generation: ["1st"],
	  branch: ["JP"]
    }
  },
  {
    name: "Shirakami Fubuki",
    img: "X5y0bla.png",
    opts: {
      generation: ["1st", "Gamers"],
	  branch: ["JP"]
    }
  },
  {
    name: "Natsuiro Matsuri",
    img: "P3Cn2Ic.png",
    opts: {
      generation: ["1st"],
	  branch: ["JP"]
    }
  },
  {
    name: "Aki Rosenthal",
    img: "NpVsFen.png",
    opts: {
      generation: ["1st"],
	  branch: ["JP"]
    }
  },
  {
    name: "Akai Haato",
    img: "nzUXgJK.png",
    opts: {
      generation: ["1st"],
	  branch: ["JP"]
    }
  },
  {
    name: "Minato Aqua",
    img: "AZjqSIB.png",
    opts: {
      generation: ["2nd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Murasaki Shion",
    img: "GZlKbrm.png",
    opts: {
      generation: ["2nd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Nakiri Ayame",
    img: "ouI3jie.png",
    opts: {
      generation: ["2nd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Yuzuki Choco",
    img: "6Pz1FoF.png",
    opts: {
      generation: ["2nd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Oozora Subaru",
    img: "dmVrLC4.png",
    opts: {
      generation: ["2nd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Ookami Mio",
    img: "JLPvRws.png",
    opts: {
      generation: ["Gamers"],
	  branch: ["JP"]
    }
  },
  {
    name: "Nekomata Okayu",
    img: "HeitWUl.png",
    opts: {
      generation: ["Gamers"],
	  branch: ["JP"]
    }
  },
  {
    name: "Inugami Korone",
    img: "Qn6lLXh.png",
    opts: {
      generation: ["Gamers"],
	  branch: ["JP"]
    }
  },
  {
    name: "Usada Pekora",
    img: "uTYVkkX.png",
    opts: {
      generation: ["3rd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Uruha Rushia",
    img: "BBskrhc.png",
    opts: {
      generation: ["3rd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Shiranui Flare",
    img: "UpFqOxH.png",
    opts: {
      generation: ["3rd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Shirogane Noel",
    img: "kIY4lEN.png",
    opts: {
      generation: ["3rd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Houshou Marine",
    img: "JKWFV8A.png",
    opts: {
      generation: ["3rd"],
	  branch: ["JP"]
    }
  },
  {
    name: "Amane Kanata",
    img: "E7m7k1C.png",
    opts: {
      generation: ["4th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Kiryu Coco",
    img: "8wfd9BK.png",
    opts: {
      generation: ["4th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Tsunomaki Watame",
    img: "pCTFgKh.png",
    opts: {
      generation: ["4th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Tokoyami Towa",
    img: "dkyixix.png",
    opts: {
      generation: ["4th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Himemori Luna",
    img: "lWgVqwN.png",
    opts: {
      generation: ["4th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Yukihana Lamy",
    img: "8Otbfo9.png",
    opts: {
      generation: ["5th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Momosuzu Nene",
    img: "19QsXR9.png",
    opts: {
      generation: ["5th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Shishiro Botan",
    img: "BN5Y0JQ.png",
    opts: {
      generation: ["5th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Omaru Polka",
    img: "bZ3VeXR.png",
    opts: {
      generation: ["5th"],
	  branch: ["JP"]
    }
  },
  {
    name: "Mano Aloe",
    img: "SAUg14t.png",
    opts: {
      generation: ["5th"],
	  branch: ["JP"],
	  graduated: true
    }
  },
  {
    name: "Ayunda Risu",
    img: "wL3v3AQ.png",
    opts: {
      generation: ["1st ID"],
	  branch: ["ID"]
    }
  },
  {
    name: "Moona Hoshinova",
    img: "FIFDevS.png",
    opts: {
      generation: ["1st ID"],
	  branch: ["ID"]
    }
  },
  {
    name: "Airani Iofifteen",
    img: "iXUIFAB.png",
    opts: {
      generation: ["1st ID"],
	  branch: ["ID"]
    }
  },
  {
    name: "Kureiji Ollie",
    img: "8qL9FJK.png",
    opts: {
      generation: ["2nd ID"],
	  branch: ["ID"]
    }
  },
  {
    name: "Anya Melfissa",
    img: "Yw8FVZk.png",
    opts: {
      generation: ["2nd ID"],
	  branch: ["ID"]
    }
  },
  {
    name: "Pavolia Reine",
    img: "JoqoJqn.png",
    opts: {
      generation: ["2nd ID"],
	  branch: ["ID"]
    }
  },
  {
    name: "Mori Calliope",
    img: "fjnhigS.png",
    opts: {
      generation: ["1st EN"],
	  branch: ["EN"]
    }
  },
  {
    name: "Takanashi Kiara",
    img: "gBRvB4K.png",
    opts: {
      generation: ["1st EN"],
	  branch: ["EN"]
    }
  },
  {
    name: "Ninomae Ina'nis",
    img: "Zsrgb1C.png",
    opts: {
      generation: ["1st EN"],
	  branch: ["EN"]
    }
  },
  {
    name: "Gawr Gura",
    img: "kT8x7tA.png",
    opts: {
      generation: ["1st EN"],
	  branch: ["EN"]
    }
  },
  {
    name: "Watson Amelia",
    img: "Lc46V5t.png",
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
