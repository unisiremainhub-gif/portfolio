import eduMediaImg from '../assets/images/Edumedia.jpg';
import unisireImg from '../assets/images/unisire.png';
import yceImg from '../assets/images/YCE.png';
import jobifyImg from '../assets/images/jobify.png';
import tasyaiImg from '../assets/images/Tasyai.png';

export const projects = [
    {
    id: 1,
    title: "Unisire",
    description: "India’s first student-focused learning and career assistance platform combining structured roadmaps, resume references, and automation tools. Features a sitemap-driven chatbot for enhanced navigation.",
    techStack: ["React.js", "Tailwind CSS", "Python", "Django", "SQL"],
    github: "https://github.com/unisiremainhub-gif/Unisire", 
    live: "https://www.unisire.com/", 
    image: unisireImg
  },
  {
    id: 2,
    title: "Jobify",
    description: "A comprehensive job searching and tracking application that helps users find relevant job opportunities, track their application status, and manage their professional profile efficiently.",
    techStack: ["MERN Stack", "Redux", "Styled Components"],
    github: "https://github.com/Nitinkeldee/Jobify", 
    live: "", 
    image: jobifyImg
  },
  {
    id: 3,
    title: "Tasyai",
    description: "An advanced AI/ML project focused on predictive analytics and data processing. Leverages machine learning models to provide actionable insights and automation solutions.",
    techStack: ["Python", "Machine Learning", "React", "Flask"],
    github: "https://github.com/Nitinkeldee/Tasyai", 
    live: "", 
    image: tasyaiImg
  },
  {
    id: 4,
    title: "Chrome Extensions",
    description: "A suite of powerful browser tools designed to enhance productivity and user experience, featuring utilities for content creators and developers.",
    techStack: ["JavaScript", "Manifest V3", "HTML/CSS"],
    github: "", 
    live: "", 
    image: yceImg, // Using the YouTube extension image as cover for the group for now
    subProjects: [
        {
            title: "YouTube Bookmark",
            description: "Save and organize timestamps in YouTube videos for efficient learning and navigation.",
            link: "https://github.com/Nitinkeldee/YouTube-Bookmark-Extension"
        },
        {
            title: "Color Picker",
            description: "A developer tool to instantly grab hex codes and color values from any webpage.",
            link: "#" 
        }
    ]
  },
  {
    id: 5,
    title: "EduMedia",
    description: "A digital learning platform featuring study materials, interactive UI, subjects, videos, and notes.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Nitin100-design/EduMedia-Hub",
    live: "https://edumedia-hub-2.onrender.com",
    image: eduMediaImg
  },
];

export default projects;
