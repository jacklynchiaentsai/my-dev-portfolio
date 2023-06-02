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
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "Data Analyst / ML Researcher",
      icon: mobile,
    },
    {
      title: "IOS App Developer",
      icon: creator,
    },
    {
      title: "Project Manager",
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
      title: "Software Engineer",
      company_name: "Columbia Build Lab - OROxyz",
      company_link: "https://www.columbiabuildlab.com/",
      icon: cbl,
      iconBg: "#E6DEDD",
      date: "September 2022 - May 2023",
      points: [
        "Designed & Developed IOS app back-end Flask API, deploying on AWS EC2 Server",
        "Constructed & Maintained robust MySQL user database system",
        "Implemented Twilio, Google O Auth, Google Geocode APIs for secure identity verification",
        "Facilitated weekly meetings on product design and front-end synchronization",
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
        "Leveraged python Pandas library to filter desirable demographic identity groups for study",
        "Assisted in DQN Reinforcement Model training, testing, pipelining using PyTorch",
        "Conducted hyperparameter tuning and visualization with WandB for model optimization",
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
        "Worked alongside engineering team in  developing Governmental system software across multiple agencies",
        "Developed user interface for Inter-agency Communication System using Javascript, HTML / CSS",
        "Constructed back-end logic for user query features with Java, automating query speed by 15%",
      ],
    },
    {
      title: "Data Analyst Intern",
      company_name: "CyCraft Technology Coroporation",
      company_link: "https://cycraft.com/",
      icon: cycraft,
      iconBg: "#E6DEDD",
      date: "Sep 2019 - May 2021",
      points: [
        "Leveraged webscraping (BeautifulSoup), Natural Language Processing modules in Python to extract Cyber Threat Intelligence from internet security platforms",
        "Implemented scikit-learn classification data pipeline to streamline cyber threat classification, analysis, and prediction",
        "Developed AI Threat Intelligence Analysis System (link), boosting automatic threat hunting with 90%+ accuracy",
        "Deployed ML-driven system on Flask web framework for client accessibility",
      ],
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
  
  const projects = [
    {
      name: "Developer Portfolio",
      description:
        "Interactive developer portfolio using 3D graphics and animation. Showcases my developer journey. Hope you've been enjoying it so far!",
      tags: [
        {
          name: "react",
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
  
  export { services, technologies, experiences, testimonials, projects, languages };