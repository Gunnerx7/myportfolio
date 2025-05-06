import project1 from "../assets/projects/scre.jpeg";
import project2 from "../assets/projects/scrh.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a strong foundation in crafting robust and scalable web applications. As a 2024 graduate, I have developed hands-on experience in front-end technologies such as React, HTML, CSS, and JavaScript, along with back-end technologies like Java (JDBC, Servlets, JSP, Hibernate, Spring Core, Spring Boot), MySQL, MongoDB, and Oracle. My goal is to leverage my skills to create innovative, user-centric solutions and contribute to the growth of dynamic projects while continuously enhancing my expertise in modern development practices.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. As a 2024 graduate, I have gained hands-on experience through various projects, where I honed my skills in technologies such as Java (JDBC, Servlets, JSP, Hibernate, Spring Core, Spring Boot), React, HTML, CSS, JavaScript, MySQL, MongoDB, and Oracle. My journey in web development began with a deep curiosity for how things work, and through my projects, I’ve continuously developed the skills needed to create innovative and scalable solutions. I am eager to leverage my expertise to drive business growth and deliver exceptional user experiences. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    link:"https://github.com/Gunnerx7/shopsmart",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap-5", "Hibernate", "Spring Boot","MySQL", "JSP", "Spring Core"],
  },
  {
    title: "Heartsage",
    image: project2,
    link:"https://heartsage.streamlit.app/",
    description:
      "HeartSage is a machine learning-powered web app that predicts the risk of heart disease based on user-provided medical data.",
    technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "CSV-based heart disease dataset"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    link: "https://github.com/Gunnerx7/myportfolio",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "To Do App",
    image: project4,
    link: "https://github.com/Gunnerx7/todo-app",
    description:
      "A simple and user-friendly To-Do app that helps users organize tasks, set priorities, and track progress efficiently.",
    technologies: ["HTML", "CSS", "Javascript", "JSP", "mySQL", "JDBC", "Servlets"],
  },
];

export const CONTACT = {
  address: "Pune, Maharastra",
  phoneNo: "+91 722 408 1199 ",
  email: "amanthakurjuly26@gmail.com",
};
