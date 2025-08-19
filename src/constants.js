// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
// import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
// import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import yellowLambdaLogo from './assets/company_logo/yellowlambda_logo.png';
import codsoftLogo from './assets/company_logo/codsoft_logo.png';


// Education Section Logo's
import akgLogo from './assets/education_logo/akg_logo.png';
import carmelschoolLogo from './assets/education_logo/carmelschool_logo.png';

// Project Section Logo's

import chatappLogo from './assets/work_logo/chatapplogo.png';
import stonepaperscissorLogo from './assets/work_logo/stonepaperscissorlogo.png';
import aircanvasLogo from './assets/work_logo/aircanvaslogo.png';
import tictactoeLogo from './assets/work_logo/tictactoelogo.png';
import portfolioLogo from './assets/work_logo/portfoliologo.png';
import aicodereviewerLogo from './assets/work_logo/aicodereviewerlogo.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'Java Script', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
   
      { name: 'Redux', logo: reduxLogo },
   
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Boot strap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Mongo DB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Postgre SQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'Java Script', logo: javascriptLogo },
      { name: 'Type Script', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },

      { name: 'Vercel', logo: vercelLogo },
      
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: yellowLambdaLogo,
      role: "Fullstack Developer",
      company: "Yellow Lambda Technologies Pvt Ltd.",
      date: "June 2025 - August 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JWT",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Express Js",
      ],
    },
    {
      id: 1,
      img: codsoftLogo,
      role: "Frontend Developer",
      company: "Codsoft Technologies Pvt Ltd",
      date: "December 2024 - January 2024",
      desc: "Designed and deployed responsive components enhancing user experience across devices,utilizing Tailwind CSS and JavaScript.",
      skills: [
    
        "Bootstrap",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: akgLogo,
      school: "Ajay Kumar Garg Engineering College, ghaziabad",
      date: "Oct 2022 - July 2026",
      grade: "7.96 CGPA",
      desc: "I have completed my Bachelor's degree (BTECH) in Information Technology from Ajay Kumar Garg Engineering College , Ghaziabad. During my time at AKG, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at AKG has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelors Of Technology - BTECH",
    },
    
    {
      id: 2,
      img: carmelschoolLogo,
      school: "Carmel School,Gorakhpur",
      date: "Apr 2021 - March 2022",
      grade: "90%",
      desc: "“Built a strong base in programming and problem-solving through Computer Science while mastering core concepts of PCM",
      degree: "ISC(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: carmelschoolLogo,
      school: "Carmel School,Gorakhpur",
      date: "Apr 2019 - March 2020",
      grade: "88.5%",
      desc: "“Gained foundational knowledge in core subjects and actively participated in extracurriculars, building teamwork and leadership qualities.”",
      degree: "ICSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "TIC-TAC-TOE",
      description:
        "Classic game recreated with modern JavaScript for fun & learning.",
      image: tictactoeLogo,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/vanshika-tripathii/tic-tac-toe",
      webapp: "",
    },
    {
      id: 1,
      title: "MERN CHAT APPLICATION",
      description:
        "Real-time conversations powered by the MERN stack & Socket.io",
      image: chatappLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "React","Daisy UI","JWT Tokens","Socket.io"],
      github: "https://github.com/vanshika-tripathii/chatapp",
      webapp: "https://chatapp-chi-six.vercel.app",
    },
    {
      id: 2,
      title: "AI Code Reviewer",
      description:
        "Smart app that reviews code and suggests improvements instantly.",
      image: aicodereviewerLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript","Node.js","Express.js","MongoDB"],
      github: "",
      webapp: "",
    },
    {
      id: 3,
      title: "Stone Paper Scissor",
      description:
        "Test your luck and logic against a smart computer opponent!",
      image: stonepaperscissorLogo,
      tags: ["Html","CSS","JavaScript"],
      github: "https://github.com/vanshika-tripathii/stone-paper-scissor",
      webapp: "",
    },
    {
      id: 4,
      title: "Air Canvas",
      description:
        "A computer vision project that lets you draw in the air using hand gestures",
      image: aircanvasLogo,
      tags: ["OpenCV","Numpy","Python","Media Pipe"],
      github: "https://github.com/vanshika-tripathii/AIR-CANVAS",
      webapp: "",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Showcasing my journey with a sleek portfolio powered by React & Tailwind.Minimal design, smooth UI, and an elegant developer touch",
      image: portfolioLogo,
      tags: ["HTML", "CSS","JavaScript","React JS","Taiwind CSS"],
      github: "https://github.com/vanshika-tripathii/vanshikatripathiportfolio",
      webapp: "https://vanshikatripathiportfolio.vercel.app/",
    },
    
  ];  