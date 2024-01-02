import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    kd,
    cbl,
    cbs,
    cycraft,
    divhacks,
    devportfolio,
    aoe,
    linalg,
    cti,
    threejs,
    python,
    java,
    cpp,
    stata,
    c,
    sql,
    flask,
    pandas,
    scikit,
    matplotlib,
    mysql,
    mssql,
    aws,
    arduino,
    ewb,
    naginata,
    tasa,
    cu,
    openai,
    fairness,
    smart,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "ML & NLP Researcher / Engineer",
      icon: mobile,
    },
    {
      title: "Data Scientist",
      icon: creator,
    },
    {
      title: "IOS App Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "Scikit-learn",
      icon: scikit,
    },
    {
      name: "Matplotlib",
      icon: matplotlib,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "MSSQL",
      icon: mssql,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Arduino",
      icon: arduino,
    },
  ];

  const languages = [
    {
      name: "HTML 5",
      icon: html,
      style: "shadow-orange-600"
    },
    {
      name: "CSS 3",
      icon: css,
      style: "shadow-blue-500"
    },
    {
      name: "JavaScript",
      icon: javascript,
      style: "shadow-yellow-500"
    },
    {
      name: "Python",
      icon: python,
      style: "shadow-blue-600"
    },
    {
      name: "Java",
      icon: java,
      style: "shadow-orange-400"
    },
    {
      name: "C++",
      icon: cpp,
      style: "shadow-sky-500"
    },
    {
      name: "C",
      icon: c,
      style: "shadow-blue-700"
    },
    {
      name: "SQL",
      icon: sql,
      style: "shadow-purple-500"
    },
    {
      name: "STATA",
      icon: stata,
      style: "shadow-indigo-500"
    },
  ];
  

  const experiences = [
    {
      title: "Teaching Assistant",
      company_name: "Columbia University Computer Science Department",
      company_link: "https://www.cs.columbia.edu/",
      icon: cu,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Dec 2023",
      points: [
        "Essential Data Structures in C / C++, Professor Timothy Paine",
        "Mentored 30+ students in developing, debugging, and optimizing C / C++ program algorithms on linux environment",
        "Designed and implemented linux shell test scripts, automating and streamlining grading assessment procedures"
      ],
    },
    {
      title: "Machine Learning Research Assistant",
      company_name: "Columbia Business School",
      company_link: "https://home.gsb.columbia.edu/",
      icon: cbs,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Present",
      points: [
        "Research: Enhancing robustness of machine learning decision systems with uncertainty quantification",
        "Leveraged python Pandas library to filter desirable demographic identity groups for study",
        "Implemented design, training, testing, pipelining, optimization of various models w/ PyTorch, Tensorflow, WandB",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Columbia Build Lab",
      company_link: "https://www.columbiabuildlab.com/",
      icon: cbl,
      iconBg: "#E6DEDD",
      date: "September 2022 - August 2023",
      points: [
        "Translated graphics, frontend logic into interactive web user interface with React.js",
        "Developed backend REST API using Python Flask, resulting in a streamlined user experience for login, verification, and profile management, successfully deployed onto an AWS EC2 server",
        "Engineered MySQL relational database with robust backend connection, resulting 30% reduction in response times"

      ],
    },
    {
      title: "Full Stack Software Engineer Intern",
      company_name: "Kang Da Information Inc.",
      company_link: "https://www.kangdainfo.com/web/index.html?pageId=1",
      icon: kd,
      iconBg: "#E6DEDD",
      date: "June 2022 - July 2022",
      points: [
        "Engaged in client and engineering team meetings, facilitating effective communication and translating client requirements into technical specifications",
        "Developed user interface & client features for inter-agency communication system using HTML, Javascript",
        "Developed automated dynamic system query feature using Java and MSSQL, optimizing back-end logic and achieving 15% reduction in query time"
      ],
    },
    {
      title: "Machine Learning Intern",
      company_name: "CyCraft Technology Coroporation",
      company_link: "https://cycraft.com/",
      icon: cycraft,
      iconBg: "#E6DEDD",
      date: "Sep 2019 - May 2021",
      points: [
        "Leveraged webscraping using BeautifulSoup, data processing in Pandas, and Natural Language Processing technologies in Python to extract informative Cyber Threat Intelligence from internet security platforms",
        "Implemented scikit-learn data pipeline to streamline cyber data classification, analysis, prediction",
        "Developed Threat Intelligence Analysis System, published on 2020 IEEE International Big Data Conference",
        "Deployed ML-driven system on Flask web framework, boosting automatic threat hunting with 90%+ accuracy"
      ],
    },
  ];
  
  const projects = [
    {
      name: "SMart: Student Marketplace App Reinventing Trade",
      description:
        "Secure, User-friendly social marketplace app tailored to college students. Aims to tackle frustrations college students have when trading items and services on social media platforms.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "ruby-on-rails",
          color: "green-text-gradient",
        },
      ],
      image: fairness,
      source_code_link: "https://smart-app-59e319232238.herokuapp.com/",
      presentation_link: "https://youtu.be/wkx2PCfyxcg?si=-O1FOpX88bjmb-Wg",
    },
    {
      name: "Machine Learning Fairness in Employment",
      description:
        "Self driven ML research project examining the interplay between model accuracy vs. equality violation, and analyzing the capability of different machine learning models to capture the underlying inequality patterns in data. Using American Community Survey.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "green-text-gradient",
        },
        {
          name: "folktables",
          color: "pink-text-gradient",
        },
        {
          name: "NumPy",
          color: "orange-text-gradient",
        },
      ],
      image: fairness,
      source_code_link: "https://colab.research.google.com/drive/1kyYgCdDT9HTG5jibKDjNDsZFkJrMBwRt?usp=sharing",
      presentation_link: "",
    },
    {
      name: "Full Stack AI Text to Image Generation App",
      description:
        "Interactive website empowering users to generate visually stunning AI images with their own creative prompts and showcase with community",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "orange-text-gradient",
        },
      ],
      image: openai,
      source_code_link: "https://github.com/jacklynchiaentsai/ai-fullstack-textgenimage",
      presentation_link: "https://www.youtube.com/watch?v=XzxFDBnQzyY",
    },
    {
      name: "Developer Portfolio",
      description:
        "Interactive developer portfolio using 3D graphics and animation. Showcases my developer journey. Hope you've been enjoying it so far!",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: devportfolio,
      source_code_link: "https://jacklynchiaentsai.github.io/my-dev-portfolio/",
      presentation_link: "",
    },
    {
      name: "DiscreetBeats",
      description:
        "Privacty-First, personalized music recommendation system that recommends top 30 songs for user based on user's Spotify playlist, without relying on invasive personal data. Working on developing into interactive web application.",
      tags: [
        {
          name: "pandas",
          color: "blue-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "green-text-gradient",
        },
        {
          name: "spotipy",
          color: "pink-text-gradient",
        },
        {
          name: "matplotlib",
          color: "orange-text-gradient",
        },
      ],
      image: linalg,
      source_code_link: "https://github.com/jacklynchiaentsai/discreet-beats",
      presentation_link: "https://docs.google.com/presentation/d/1HvBEEGLAVwdKIuA4cjcxL9dGonGyP-3m0ooS3iyIsHQ/edit?usp=sharing",
    },
    {
      name: "DivHacks 2022 Website",
      description:
        "Contributed in Tech Team for designing and developing the 2022 Diversity Hackathon website. ",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap-css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: divhacks,
      source_code_link: "https://github.com/jacklynchiaentsai/2022-divhacks",
      presentation_link: "",
    },
    {
      name: "CTI ANT",
      description:
        "First ML-driven Chinese Cyber Threat Intelligence Analysis System.  Boosts automatic cyber threat classification, analysis, and prediction with 90%+ accuracy. Presented in  2020 IEEE International Conference on Big Data and PyCon Taiwan 2020.",
      tags: [
        {
          name: "Beautiful-Soup",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit-learn",
          color: "green-text-gradient",
        },
        {
          name: "NLP",
          color: "pink-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "orange-text-gradient",
        },
        {
          name: "Flask",
          color: "white-text-gradient",
        },
      ],
      image: cti,
      source_code_link: "https://ieeexplore.ieee.org/abstract/document/9378125",
      presentation_link: "https://docs.google.com/presentation/d/1qQilNufomKsaqa24ZzwZ2kuBB_RFjwsu9Nc_szeUAPY/edit?usp=sharing",
    },
    {
      name: "Drummaster",
      description:
        "Aruduino Video Game inspired by Piano Tiles. Player presses a board of four buttons to the rhythm of a song, with Easy, Medium, and Hard levels.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "arduino",
          color: "green-text-gradient",
        },
        {
          name: "wiring",
          color: "pink-text-gradient",
        },
      ],
      image: aoe,
      source_code_link: "https://github.com/jacklynchiaentsai/drummaster",
      presentation_link: "https://www.youtube.com/watch?v=gtKCA8Y4odY",
    },
  ];
  
  const testimonials = [
    {
      name: "CU Engineers Without Borders: Ghana Chapter",
      date: "December 2023 - Present",
      title: "Project Manager",
      image: ewb,
      link: "https://www.instagram.com/cuewbuganda/",
    },
    {
      name: "CU Engineers Without Borders: Uganda Chapter",
      date: "September 2021 - December 2023",
      title: "Research Team Lead, Grants & Fundraising Team Lead",
      image: ewb,
      link: "https://www.instagram.com/cuewbuganda/",
    },
    {
      name: "CU Taiwanese American Student Association",
      date: "September 2021 - May 2023",
      title: "Social Media Chair",
      image: tasa,
      link: "https://www.instagram.com/tasa_cu/",
    },
    {
      name: "CU Naginata Club",
      date: "September 2022 - Present",
      title: "Member (3-kyu)",
      image: naginata,
      link: "https://www.instagram.com/cunaginata/",
    },
  ];

  export { services, technologies, experiences, testimonials, projects, languages };