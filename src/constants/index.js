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
    carrent,
    jobit,
    tripguide,
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, languages };