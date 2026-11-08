
import eduMediaImg from '../assets/images/Edumedia.jpg';
import unisireImg from '../assets/images/unisire.png';
import yceImg from '../assets/images/YCE.png';
import jobifyImg from '../assets/images/jobify.png';
import tasyaiImg from '../assets/images/Tasyai.png';

export const projects = [
  {
    id: 1,
    title: "E-commerce Sales & Revenue Analysis",
    description:
      "An end-to-end data analytics project analysing e-commerce transaction data to evaluate sales performance, revenue trends, product profitability, and customer purchasing behaviour. Includes SQL-based analysis and interactive Power BI dashboards to monitor business KPIs and generate actionable insights.",
    techStack: [
      "SQL",
      "PostgreSQL",
      "Excel",
      "Power BI",
      "Data Analysis",
      "Data Visualization"
    ],
    github: "",
    live: "",
    image:
      "https://m.media-amazon.com/images/G/31/amazonservices/Blog/What_is_E-commerce.jpg"
  },
  {
    id: 2,
    title: "Unisire",
    description:
      "India's first student-focused learning and career assistance platform, serving 1,000+ active users across multiple colleges. Combines structured learning roadmaps, resume resources, assessments, and career guidance with student progress tracking and organized platform data.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Python",
      "Django",
      "SQL",
      "Database Management",
      "Data Tracking"
    ],
    github: "https://github.com/unisiremainhub-gif/Unisire",
    live: "https://www.unisire.com/",
    image: unisireImg
  },
  {
    id: 3,
    title: "Jobify",
    description:
      "A comprehensive job searching and tracking application that helps users find relevant job opportunities, track application statuses, and manage their professional profiles efficiently through a structured interface.",
    techStack: [
      "MERN Stack",
      "Redux",
      "Styled Components",
      "MongoDB"
    ],
    github: "https://github.com/Nitinkeldee/Jobify",
    live: "https://jobify.live",
    image: jobifyImg
  },
  {
    id: 4,
    title: "Tasyai",
    description:
      "An AI/ML-focused project centred on data processing and predictive analytics. Explores machine learning models to identify patterns in structured data, generate actionable insights, and support intelligent automation solutions.",
    techStack: [
      "Python",
      "Machine Learning",
      "Predictive Analytics",
      "Data Processing",
      "React",
      "Flask"
    ],
    github: "https://github.com/Nitinkeldee/Tasyai",
    live: "https://tasyai.vercel.app/",
    image: tasyaiImg
  },
  {
    id: 5,
    title: "Chrome Extensions",
    description:
      "A suite of browser productivity tools designed to enhance user experience and simplify everyday tasks, featuring useful utilities for content creators and developers.",
    techStack: [
      "JavaScript",
      "Manifest V3",
      "HTML",
      "CSS"
    ],
    github: "",
    live: "",
    image: yceImg,
    subProjects: [
      {
        title: "YouTube Bookmark",
        description:
          "Save and organize timestamps in YouTube videos for efficient learning and navigation.",
        link: "https://github.com/Nitinkeldee/YouTube-Bookmark-Extension"
      },
      {
        title: "Color Picker",
        description:
          "A developer tool to instantly grab hex codes and color values from any webpage.",
        link: "#"
      }
    ]
  },
  {
    id: 6,
    title: "EduMedia",
    description:
      "A digital learning platform featuring study materials, interactive UI, subjects, educational videos, and notes to support an organized online learning experience.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    github: "https://github.com/Nitin100-design/EduMedia-Hub",
    live: "https://edumedia-hub-2.onrender.com",
    image: eduMediaImg
  }
];

export default projects;
