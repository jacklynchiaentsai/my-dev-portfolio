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
      title: "Machine Learning Researcher / Engineer",
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
      date: "Sep 2022 - Present",
      points: [
        "Essential Data Structures in C / C++, Professor Timothy Paine"
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
        "Assisted in Toxic Media Comment Risk Minimization (presentation), Uncertainty Quantification in Improving Decision Making ML Systems Research (current)",
        "Leveraged python Pandas library to filter desirable demographic identity groups for study",
        "Implemented DQN Reinforcement Model training, testing, pipelining using PyTorch",
        "Conducted hyperparameter tuning and visualization with WandB for model optimization"
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Columbia Build Lab - OROxyz",
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
        "Developed a user-friendly web interface for client’s inter-agency communication system using JavaScript and HTML, enhancing user engagement and accessibility to critical information.",
        "Engineered and optimized back-end logic for automating staff and document query functionalities using Java and MSSQL, achieving a 15% reduction in query response time"
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
      source_code_link: "https://columbiadivhacks.com/",
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
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "CU Engineers Without Borders: Uganda Chapter",
      date: "September 2021 - Present",
      title: "Grants & Fundraising Team Lead",
      image: ewb,
      link: "https://www.instagram.com/cuewbuganda/",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "CU Taiwanese American Student Association",
      date: "September 2021 - Present",
      title: "Social Media Chair",
      image: tasa,
      link: "https://www.instagram.com/tasa_cu/",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "CU Naginata Club",
      date: "September 2022 - Present",
      title: "Member (3-kyu)",
      image: naginata,
      link: "https://www.instagram.com/cunaginata/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, languages };