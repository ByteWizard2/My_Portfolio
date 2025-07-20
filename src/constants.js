// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import efcore from './assets/tech_logo/efcore.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import net_core from './assets/tech_logo/net_core.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import sqlLogo from './assets/tech_logo/sql.png';
import vs22 from './assets/tech_logo/vs22.jfif'


// Education Section Logo's
import gfgc from './assets/education_logo/gfgc_logo.png';
import brototyp_logo from './assets/education_logo/brototyp_logo.jpg';


// Project Section Logo's
import fashion_cloths from './assets/work_logo/fashion_cloths.jpg';
import user_managment from './assets/work_logo/user_managment.jpg';
import emp_managment from './assets/work_logo/emp_managment.png';
import expense_Tracker from './assets/work_logo/expense_Tracker.png';
import quiz_app from './assets/work_logo/quiz_app.png';
import weather_forecast from './assets/work_logo/weather_forecast.png';
import hotel from './assets/work_logo/hotel.png';
import netflix from './assets/work_logo/netflix.png'


//Skills Section

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {name: '.Net core', logo: net_core},
      { name: 'EF Core', logo: efcore },
      { name: 'MS SQL Server', logo: sqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
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
      { name: 'Visual Studio 2022', logo: vs22},
      { name: 'Postman', logo: postmanLogo },
      //{ name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      //{ name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
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
      degree: "Bachelor's of Computer Applications - BCA",
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
      "Developed a robust e-commerce platform from scratch, utilising ASP.NET for back-end develop-ment,MS SQL server for database management, RazorPay for seamless payment processing, andSocket.Io for real-time interactions. ",
      image: fashion_cloths,
      tags: ["ASP.NETcore","C#","SQL Server","Google OAuth","razorpay","Asure","bootstrap,","HTML", "CSS", "JavaScript"],
      github: "https://github.com/ByteWizard2/fashioncloths",
      webapp: "",
    },
    {
      id: 1,
      title: "User Management System",
      description:
        "Built a full-stack User Management System using ASP.NET Core and React.js, supporting secure user registration, login, profile updates, role management, and responsive UI design with JWT-based authentication and authorization.",
      image: user_managment,
      tags: ["React JS", "ASP.Net Web api", "MS SQL Server","Type Script" ,"tailwindcss", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ByteWizard2/User-Managment-backend",
      webapp: "",
    },
    {
      id: 2,
      title: "Employee Management System",
      description:
        "Employee Management System is a web app built with React, React Router, and Tailwind CSS for efficient employee management. It allows users to add, view, update, and organize employee details with a modern and responsive interface.",
      image: emp_managment,
      tags: ["React JS", "API","tailwindcss", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ByteWizard2/EmployeeManagementSystem",
      webapp: "",
    },
    {
      id: 3,
      title: "Expense Tracker",
      description:
        "Expense Tracker is a web app for efficient expense management, allowing users to create categories, track transactions, and analyze spending through interactive pie and line charts.",
      image: expense_Tracker,
      tags: ["ASP.NET Core","C#","JavaScript","MS SQL Server","Syncfusion","HTML","HTML","Tailwind CSS","MVC Architecture","GitHub"],
      github: "https://github.com/ByteWizard2/Expense-Tracker",
      webapp: "",
    },
    {
      id: 4,
      title: "Weather Forecast",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: weather_forecast,
      tags: ["JavaScript", "API", "HTML", "CSS"],
      github: "https://github.com/ByteWizard2/WeatherApp",
      webapp: "",
    },
    {
      id: 5,
      title: "Quiz Web App",
      description:
        "QuizWebApp is a web-based quiz platform where users can log in, take quizzes, and receive instant feedback. At the end, they can review correct and incorrect answers with a performance summary.",
      image: quiz_app,
      tags: ["ASP.NET Core","Web Api","C#","React.js","React Router","MS SQL Server","HTML", "CSS", "JavaScript"],
      github: "https://github.com/ByteWizard2/QuizWebApp",
      webapp: "",
    },
    {
      id: 6,
      title: "HotelQueue",
      description:
        "HotelQueue is a web-based app for viewing, adding, and managing hotels, including hotel numbers, villa assignments, and amenities.",
      image: hotel,
      tags: ["ASP.NET Core","C#","MS SQL Server","Clean Architecture","HTML", "CSS", "JavaScript"],
      github: "https://github.com/ByteWizard2/QuizWebApp",
      webapp: "",
    },
    {
      id: 7,
      title: "Netflix  Clone",
      description:
        "A sleek Netflix UI clone developed with React and Firebase aimed at replicating the user interface of the popular streaming platform",
      image: netflix,
      tags: ["React","JavaScript","Firebase","HTML", "CSS"],
      github: "https://github.com/ByteWizard2/netflix-clone",
      webapp: "",
    },
    
  ];  
