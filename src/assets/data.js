import React from "react";
import { IconContext } from "react-icons";
import { FaMobile, FaReact, FaCode, FaNodeJs, FaJava } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Santhosh Muthu",
  title: "Full Stack Developer",
  social: {
    github: "https://github.com/santhosh-muthu-dev",
    linkedin: "https://www.linkedin.com/in/santhoshmuthu-17812497/",
    email: "dev.santhoshm@gmail.com",
  },
  about: {
    title: "Overview",
    description:
      "Experienced Mobile and Web application Developer with over 7 years of hands-on expertise in React Native, React JS, Next JS, GraphQL, Angular, Node JS, Spring Boot and cross-platform tool like Apache Cordova and Ionic Framework. Proven track record in UI/UX design and development, proficient in unit testing framework like Jest and NPM package management. Skilled in team management and Agile methodologies, adept at navigating all stages of the software development cycle. Proficient user of Jira and Confluence.",
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Backend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "React Native",
      skillIcon: <FaMobile className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Node.JS",
      skillIcon: <FaNodeJs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Java",
      skillIcon: <FaJava className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  experience: [
    {
      company: "Infosys Ltd",
      responsibilities: `
      I spearheaded development projects, collaborating closely with stakeholders to gather requirements and handpick UI components or NPM libraries. Ensuring adherence to design guidelines and quality standards, I implemented best practices with architects. For Front End Projects, I managed deployment processes for seamless releases. Additionally, I designed and developed UI components and elements, implemented Jest for unit testing, and integrated RESTful services for data exchange. I conducted daily Scrum calls, mentored developers, and facilitated status review calls with stakeholders. Lastly, I managed project releases to staging environments for QA testing.
      `,
      technologies: [
        "React.JS",
        "React Native",
        "Node.JS",
        "Next.JS",
        "Java",
        "SpringBoot",
        "GraphQL",
        "Jira",
        "Confluence",
      ],
    },
    {
      company: "Pixmonks Solutions Pvt Ltd",
      responsibilities: `
      I designed and developed UI components for React.js and React Native projects, ensuring alignment with project goals through close collaboration with team members. Implementing coding standards and best practices, I maintained high-quality, maintainable software. Regularly participating in code reviews and Proof of Concept initiatives, I fostered a culture of collaboration and continuous improvement while demonstrating adaptability and teamwork.
      `,
      technologies: [
        "React.JS",
        "React Native",
        "Java",
        "SpringBoot",
        "Android",
        "IOS",
        "Wearable",
      ],
    },
    {
      company: "CWS India",
      responsibilities: `
      I designed and developed UI components for Angular and Ionic projects, prioritizing user experience by implementing responsive design techniques and ensuring cross-browser compatibility. Additionally, I maintained unit test cases to uphold development standards, achieving a code coverage over 90%. Moreover, I provided end user support and conducted maintenance activities, consistently achieving a resolution rate of 95% within SLA targets, ensuring smooth operation of software applications.
      `,
      technologies: ["Angular", ".NET MVC", "Ionic Framework", "Node.JS"],
    },
  ],
  projects: [
    {
      title: "React tailwind portfolio",
      description:
        "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: ["template", "portfolio", "reactjs", "tailwindcss"],
      link: "https://github.com/braydentw/react-tailwind-portfolio",
    },
    {
      title: "My personal website",
      description: "⚡ My portfolio built with NextJS and TailwindCSS.",
      tags: ["website", "portfolio", "nextjs", "tailwindcss"],
      link: "https://github.com/braydentW/braydentw",
    },
  ],
};
export default data;
