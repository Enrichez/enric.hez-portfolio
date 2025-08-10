import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
// import project5 from "../assets/project5.webp";
// import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiPantoneLine,
  RiPaletteLine,
  RiArtboardLine,
  RiBrush2Line,
  RiBrush3Line,
  RiBrushLine,
  RiBracesLine,
  RiFlashlightFill,
  RiFlashlightLine,
  RiLayoutRowLine,
  RiLayoutGridLine,
  RiLayoutGrid2Line,
  RiLayoutRight2Line,
  RiLayout2Line,
  RiLayout3Line,
  RiLayout4Line,
  RiLayout5Line,
  RiLayout6Line,
  RiLayoutLine,
  RiBrush4Line,
  RiDashboard2Line,
  RiVercelLine,
  RiTailwindCssLine,
  RiBootstrapLine,
  RiFigmaLine,
  RiDatabase2Line,
  RiPhpLine,
  RiBracketsLine,
  RiJavaLine,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Enrico Hezkiel",
  role: "Full Stack Developer",
  subheading:
    "A fresh graduate in Informatics and an aspiring software engineer.  Equipped with hands-on experience building full-stack web and mobile applications. Focused on translating challenges into practical digital solutions.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Progamify",
    description:
      "A cross-platform mobile learning app that applies gamification elements to boost user motivation and engagement. The content is fully managed via a custom-built Laravel-based CMS using Filament, designed for admin access.",
    techStack: ["Flutter", "Go", "Laravel", "Filament", "MySQL"],
    imgSrc: project1,
    link: "https://github.com/ifs21034-itdel/Progamify",
  },
  {
    id: 2,
    title: "Academic Planning & Evaluation Platform",
    description:
      "A web-based system designed to streamline the annual planning and evaluation of academic staff. Built using a microservices architecture, the application separates services into containers to improve maintainability and fault isolation.",
    techStack: [
      "Laravel",
      "Bootstrap",
      "Lumen",
      "MySQL",
      "Docker",
      "Kubernetes",
    ],
    imgSrc: project2,
    link: "https://github.com/ifs21034-itdel/FRK_FED-Academic-Planner-and-Evaluation-Management-System",
  },
  {
    id: 3,
    title: "Informatics Bachelor Program Website",
    description:
      "Informational website for the Informatics Engineering undergraduate program at Institut Teknologi Del. The website serves as a platform to communicate key academic information and promote the Informatics program to the public.",
    techStack: ["Laravel", "MySQL"],
    imgSrc: project3,
    link: "https://github.com/corrybstrs08/Website-Informatika",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A personal portfolio website, designed to present my work, technical skills, and background in software development. It was developed using React, marking my first hands-on project with the framework.",
    techStack: ["React.js", "Tailwind CSS"],
    imgSrc: project4,
    link: "/",
  },
  // {
  //   id: 5,
  //   title: "Task Management App",
  //   description:
  //     "A task management tool with user authentication, reminders, and collaboration features.",
  //   techStack: ["Angular", "Firebase", "Material UI"],
  //   imgSrc: project5,
  //   link: "https://example-taskapp.com",
  // },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
  //   techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
  //   imgSrc: project6,
  //   link: "https://example-learningplatform.com",
  // },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "PHP",
    icon: <RiPhpLine className="text-red-500" />,
  },
  {
    name: "Laravel",
    icon: <RiBracesLine className="text-red-500" />,
  },
  {
    name: "Go",
    icon: <RiFlashlightLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Java",
    icon: <RiJavaLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MySQL",
    icon: <RiDatabase2Line className="text-orange-600" />,
  },
  {
    name: "PostgreSQL",
    icon: <RiDatabaseLine className="text-blue-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssLine className="text-teal-400" />,
  },
  {
    name: "Bootstrap",
    icon: <RiBootstrapLine className="text-purple-400" />,
  },
  {
    name: "Git",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
  {
    name: "Figma",
    icon: <RiFigmaLine className="text-red-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2024 - 2025",
    role: "Full Stack Web Developer Intern",
    company: "Indonesia AirAsia",
    description:
      "Developed a cabin crew training management system during a 5-month internship in a two-person team. Collaborated directly with cabin crews and administrative stakeholders to gather requirements, define features, design UI, and implement solutions. Utilized Google Apps Script, a cloud-based JavaScript platform for automating and extending Google Workspace applications, enabling rapid, serverless deployment. Quickly learned and applied the technology to deliver a functional, production-ready system.",
    techStack: ["Googlescript", "AppScript", "MySQL", "Google Sites"],
  },
  {
    yearRange: "2024",
    role: "Full Stack Web Developer Intern",
    company: "Penerbit Deepublish",
    description:
      "Developed an asset loan process subsystem within the company’s HRIS (Human Resources Information System) as part of a three-person team in approximately three months. Utilized Laravel and PostgreSQL. Responsibilities included requirements analysis with stakeholders, designing workflows for loan requests and approvals, implementing role-based access control.",
    techStack: ["Javascript", "Laravel", "PostgreSQL"],
  },
  {
    yearRange: "2023 - 2024",
    role: "Academic Assistance",
    company: "Institut Teknologi Del",
    description:
      "Served as a teaching assistant for three consecutive semesters, providing tutoring in Calculus I, Calculus II, and Probability & Statistics to lower-year students. Leveraged strong analytical skills in mathematics and a passion for sharing knowledge to design and deliver structured sessions that enhanced students’ understanding of course material. Assisted faculty in exam supervision and monitored student progress to support academic development.",
    techStack: [
      "Fundamental Mathematics",
      "Calculus",
      "Probability",
      "Statistic",
      "SPSS",
      "Ms Excel",
    ],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Computer Science in Informatics",
    institution: "Institut Teknologi Del",
    duration: "2021 - 2025 | 3.80/4.00 GPA",
    description:
      "Graduated with honors in Computer Science, specializing in Software Development, Artificial Intelligence, and Software Security. Completed a thesis project developing a cross-platform mobile learning application incorporating gamification to enhance user engagement and motivation.",
  },
  {
    id: 2,
    degree: "Certified Front End Developer",
    institution: "Dicoding Indonesia",
    duration: "2024 - 2025",
    description:
      "Completed the official Dicoding Indonesia Front-End Developer learning path, covering responsive web design, JavaScript programming, and modern front-end workflows. Gained hands-on experience building interactive and accessible web applications following industry best practices.",
  },
  {
    id: 3,
    degree: "Certified Back End Developer",
    institution: "Dicoding Indonesia",
    duration: "2024 - 2025",
    description:
      "Completed the official Dicoding Indonesia Back-End Developer learning path, covering server-side programming with Node.js, RESTful API design, database management, and scalable application deployment. Developed practical back-end solutions adhering to clean architecture and industry standards.",
  },
];

export const TESTIMONIAL = {
  name: "Jensri Joice",
  title: "Full Stack Web Developer, Dewan Energi Nasional",
  quote:
    "Working with Enrico was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
