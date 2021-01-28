const crypto = require("crypto");
const mysql = require("mysql2/promise");

const config = require("../../config.json");

let userData = [
  {
    name: "Scott Uk-Jin Lee",
    image: {
      src: "assets/user/profiles/scott.png",
      alt: "Scott Uk-Jin Lee",
    },

    email: "scottlee@hanyang.ac.kr",
    website: "https://selab.hanyang.ac.kr",

    career: [
      "an asst. prof. in the CSE Dept. @ HYU (ERICA)",
      "leading this Laboratory!",
    ],

    interest: [
      "2011 ~      : Assistant Professor in CSE Dept. @ Hanyang University, Korea",
      "2009 ~ 2011 : Postdoc @ CEA LIST, France",
      "2005 ~ 2006 : SE Programmer in SE Dept. @ University of Auckland, NZ",
      "2004 ~ 2004 : Visiting Researcher @ National University of Singapore",
      "2004 ~ 2008 : Ph.D in Computer Science @ University of Auckland, NZ",
      "2000 ~ 2003 : BE in Software Engineering @ University of Auckland, NZ",
    ],
  },
  {
    name: "Isma Farah",
    image: {
      src: "assets/user/profiles/Isma.png",
      alt: "Isma",
    },

    email: "isma2012@hanyang.ac.kr",

    website: "http://www.linkedin.com/in/ismafarah",
    career: ["PhD scholar From Pakistan on HEC Scholarship"],

    interest: [
      "Software Engineering",
      "Web Applications",
      "Semantic Web",
      "Database Management",
      "Formal Methods",
    ],
  },
  {
    name: "Abdul Rahim",
    image: {
      src: "assets/user/profiles/Abdul.png",
      alt: "Untitled",
    },

    email: "rahim750413@hanyang.ac.kr",

    website: "https://www.facebook.com/abdul.ariffin",
    career: ["Master's leading to Phd scholar from Kuala Lumpur,Malaysia"],

    interest: ["Software Engineering", "Hadoop(MapReduce)", "Multithreading"],
  },
  {
    name: "Asad Abbas",
    image: {
      src: "assets/user/profiles/Untitled.jpg",
      alt: "Untitled",
    },

    email: "asadabbas@hanyang.ac.kr",

    website: "",
    career: [],

    interest: ["Software Engineering", "Product Line Software Engineering"],
  },
  {
    name: "Gichan Lee",
    image: {
      src: "assets/user/profiles/gichan.jpg",
      alt: "gichan",
    },

    email: "fantasyopy@gmail.com",

    website: "https://www.linkedin.com/in/GCSELAB",
    career: [],

    interest: [
      "Software Engineering in practice",
      "Access Control in IoT environment(project)",
    ],
  },
  {
    name: "Mohsin Javaid",
    image: {
      src: "assets/user/profiles/mohsin.jpg",
      alt: "mohsin",
    },

    email: "mohsinjavaid@hanyang.ac.kr",

    website: "https://goo.gl/3QXH6k",
    career: [],

    interest: [
      "Software Engineering",
      "Model Driven Architecture",
      "Internet of Things",
      "Android Application",
      "Requirement Engineering",
    ],
  },
  {
    name: "Muhammad Umair Khan",
    image: {
      src: "assets/user/profiles/khan.jpg",
      alt: "muhammad umair khan",
    },

    email: "mumairkhan@hanyang.ac.kr",

    website: "https://goo.gl/GdYteF",
    career: [],

    interest: [
      "Software Engineering",
      "Concurrent Programming",
      "Internet of Thing",
    ],
  },
  {
    name: "Gayeon Kim",
    image: {
      src: "assets/user/profiles/11.jpg",
      alt: "gayeon Kim",
    },

    email: "gayeonkim91@gmail.com",

    website: "",
    career: [],

    interest: ["Software Engineering", "Web Application", "Bigdata analysis"],
  },
  {
    name: "Wu Zhiqiang",
    image: {
      src: "assets/user/profiles/325115318014822206.jpg",
      alt: "wu zhiqiang",
    },

    email: "hhhwwwuuu@hanyang.ac.kr",

    website: "",
    career: [],

    interest: [
      "Software engineering",
      "Concurrency Detection",
      "Malware Detection",
    ],
  },
  {
    name: "Gwanggyu Choi",
    image: {
      src: "assets/user/profiles/gif.gif",
      alt: "gwanggyu choi",
    },

    email: "gcahmoei@hanyang.ac.kr",

    website: "",
    career: [],

    interest: ["Software engineering", "requirement engineering"],
  },
  {
    name: "Hyunglak Kim",
    image: {
      src: "assets/user/profiles/140x175.jpg",
      alt: "hyunglak kim",
    },

    email: "jikuaij@gmail.com",

    website: "",
    career: [],

    interest: [
      "Software Engineering",
      "Crowdsourcing Software Develop",
      "Android Application",
      "Model Checking",
    ],
  },
  {
    name: "Dahae Sung",
    image: {
      src: "assets/user/profiles/CAM00259.jpg",
      alt: "dahae sung",
    },

    email: "sdh4513136@hanmail.net",

    website: "",
    career: [],

    interest: [],
  },
  {
    name: "Yongtaek Oh",
    image: {
      src: "assets/user/profiles/default_user_profile.png",
      alt: "yongtaek oh",
    },

    email: "ka123ak1@gmail.com",

    website: "",
    career: [],

    interest: ["Iot"],
  },
  {
    name: "Namju Park",
    image: {
      src: "assets/user/profiles/default_user_profile.png",
      alt: "namju park",
    },

    email: "qkrska66@hanyang.ac.kr",

    website: "",
    career: [],

    interest: [],
  },
  {
    name: "Jiang Hua",
    image: {
      src: "assets/user/profiles/1.jpg",
      alt: "jiang hua",
    },

    email: "jh19880208@163.com",

    website: "",
    career: [],

    interest: ["Requirement Engineering"],
  },
  {
    name: "Jaeho Choi",
    image: {
      src: "assets/user/profiles/IMG_2242.JPG",
      alt: "",
    },

    email: "jaeho34@hanyang.ac.kr",

    website: "http://www.facebook.com/rogue9071",
    career: [],

    interest: [
      "Software Engineering",
      "A field of Access Control(XACML tools)",
      "Web Application & Security",
      "Cloud Computing Evironment",
      "Social Network Service",
    ],
  },
  {
    name: "Geunhwan Park",
    image: {
      src: "assets/user/profiles/IMG_0889.jpg",
      alt: "",
    },

    email: "0101d8cf@gmail.com",

    website: "",
    career: [],

    interest: [],
  },
];

let insertUser = async (userData, config) => {
  let pool = mysql.createPool(config.db);

  let profileSql =
    "INSERT INTO File(file_name, file_type, file_src, file_desc) VALUES(?, ?, ?, ?)";
  let userSql =
    "INSERT INTO User(u_id, u_pw_salt, u_pw, u_lname, u_fname, u_nick, u_email, file_id, u_perm, u_homepage) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
  let interestSql = "INSERT INTO User_inter(u_no, u_interest) VALUES(?, ?)";

  try {
    const conn = await pool.getConnection(async (conn) => conn);

    for (const userInfo of userData) {
      try {
        console.log("insert user", userInfo.name);
        await conn.beginTransaction();

        let fileSrc = userInfo.image.src;
        let fileParsed = fileSrc.split("/");
        let fileName = fileParsed[fileParsed.length - 1];
        let fileType = fileName.split(".")[1];

        await conn.query(profileSql, [
          fileParsed[fileParsed.length - 1],
          fileType,
          fileSrc,
          userInfo.image.alt,
        ]);

        const [
          fileRes,
        ] = await conn.query("SELECT * FROM File WHERE file_src = ?", [
          fileSrc,
        ]);

        let fileID = fileRes[0].file_id;

        let name = userInfo.name.split(" ");
        let salt = crypto
          .randomBytes(config.crypto.saltSize)
          .toString("base64");
        let perm = 1;
        if (userInfo.name === "Scott Uk-Jin Lee") perm = 2;

        await conn.query(userSql, [
          name[0],
          salt,
          config.crypto.defaultPass,
          name[name.length - 1],
          name[0],
          name[0],
          userInfo.email,
          fileID,
          perm,
          userInfo.website,
        ]);

        const [userRes] = await conn.query(
          "SELECT * FROM User WHERE u_id = ?",
          [name[0]]
        );

        let userNo = userRes[0].u_no;
        for (const inter of userInfo.interest) {
          try {
            await conn.query(interestSql, [userNo, inter]);
          } catch (err) {
            console.log("error in insert user", userInfo.name, "'s interest");
            console.error(err);
          }
        }

        await conn.commit();
        console.log("end transection user ", userInfo.name);
      } catch (err) {
        console.error(err);
        console.log("======================");
        await conn.rollback();
      }
    }

    conn.release();
  } catch (err) {
    console.log(err);
  }

  await pool.end();
  console.log("end");
};

insertUser(userData, config);
