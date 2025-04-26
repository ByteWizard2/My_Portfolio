// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
//import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
//import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
//import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
//import gsapLogo from './assets/tech_logo/gsap.png';
//import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
//import springbootLogo from './assets/tech_logo/springboot.png';
//import nodejsLogo from './assets/tech_logo/nodejs.png';
//import expressjsLogo from './assets/tech_logo/express.png';
//import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
//import cLogo from './assets/tech_logo/c.png';
//import cppLogo from './assets/tech_logo/cpp.png';
//import javaLogo from './assets/tech_logo/java.png';
//import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
//import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
//import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
//import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
//import webverseLogo from './assets/company_logo/webverse_logo.png';
//import agcLogo from './assets/company_logo/agc_logo.png';
//import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import gfgc from './assets/education_logo/gfgc_logo.png';
import brototyp_logo from './assets/education_logo/brototyp_logo.jpg';
//import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import fashion_cloths from './assets/work_logo/fashion_cloths.jpg';
import user_managment from './assets/work_logo/user_managment.jpg';
import emp_managment from './assets/work_logo/emp_managment.png';
import expense_Tracker from './assets/work_logo/expense_Tracker.png';
import quiz_app from './assets/work_logo/quiz_app.png';
import weather_forecast from './assets/work_logo/weather_forecast.png';


//Skills Section

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      //{ name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      //{ name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      //{ name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      //{ name: 'GSAP', logo: gsapLogo },
      //{ name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      //{ name: 'Springboot', logo: springbootLogo },
      //{ name: 'Node JS', logo: nodejsLogo },
      //{ name: 'Express JS', logo: expressjsLogo },
      //{ name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      //{ name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      //{ name: 'C', logo: cLogo },
      //{ name: 'C++', logo: cppLogo },
      //{ name: 'Java', logo: javaLogo },
      //{ name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      //{ name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      //{ name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: "",
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: "",
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: "",
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  //Education Section

  export const education = [
    {
      id: 0,
      img: brototyp_logo,
      school: "Brototype, Kozhikode",
      date: " 2024 -  2025",
      //grade: "80.33%",
      desc: "I completed an intensive full stack web development bootcamp at Brototype, Kozhikode.During this program, I specialized in building robust backend applications using ASP.NET Core and dynamic, user-friendly frontends with React.js.The course focused heavily on real-world projects, clean coding practices, and building full-fledged web applications.It has helped me develop strong technical skills, problem-solving abilities, and practical experience in both frontend and backend technologies.",
      degree: "Full Stack Web Development (ASP.NET Core & React)",
    },
    {
      id: 1,
      img: gfgc,
      school: "GFGC college Kushalnagar, Mangalore University",
      date: "Sept 2020 - July 2023",
      grade: "80.33%",
      desc: "I completed my  degree in Bachelor's Computer Applicatio (B.C.A) from GFGC college Kushalnagar. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at GFGC College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 2,
      img: "",
      school: "Govt PUC College, Nellihudikeri",
      date: "2019 -  2020",
      grade: "80.33%",
      desc: "I completed my class 12 education from Govt PU College , Nellihudikeri, where I studied History, Economics, Business Studies and Accountancy (HEBA).",
      degree: "XII - HEBA",
    },
    {
      id: 3,
      img: "",
      school: "Govt High School, Nanjarayapatna",
      date: "2016 - 2017",
      grade: "65.44%",
      desc: "I completed my class 10 education from Govt High School, Nanjarayapatna.",
      degree: "X - SSLC",
    },
  ];
  
  //Projects Section 

  export const projects = [
    {
      id: 0,
      title: "Fashion Cloths E-commerce website",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: fashion_cloths,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "",
      webapp: "",
    },
    {
      id: 1,
      title: "User Management System",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: user_managment,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "",
    },
    {
      id: 2,
      title: "Employee Management System",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: emp_managment,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "",
    },
    {
      id: 3,
      title: "Expense Tracker",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: expense_Tracker,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "",
      webapp: "",
    },
    {
      id: 4,
      title: "Weather Forecast",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: weather_forecast,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "",
      webapp: "",
    },
    {
      id: 5,
      title: "Quiz Web App",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: quiz_app,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "",
      webapp: "",
    },
    
  ];  