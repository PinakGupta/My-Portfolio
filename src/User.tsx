import { IconBrandGithub , IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";

const Info = {
    name: "Pinak Gupta",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer", "Open Source Contributor"],
    bio: "I am a passionate Computer Science undergraduate at Dr. B. R. Ambedkar National Institute of Technology Jalandhar (NIT Jalandhar), with a passion for becoming a software engineer. I'm eager to build scalable and impactful solutions, continuously improving through challenges and learning opportunities.Let's connect and create something amazing together!"
}

const ExperienceInfo = [
    {
        role: "Research Intern",
        company: "Indian Institute of Technology, Mandi",
        duration: "Jun 2025 - Jul 2025",
        location: "Mandi, Himachal Pradesh, India",
        type: "On-site",
        description: [
            "Developed autonomous ball-hitting system using Kinova Gen3 robotic arm with racket for tennis ball hitting.",
            "Fine-tuned YOLO11 model for real-time yellow tennis ball detection achieving 99.5% mAP@0.5 accuracy.",
            "Designed 3D ball trajectory prediction system using Kalman Filters and physics-based modeling with Depth Anything v2 Vision Transformer model (97.5M parameters).",
            "Trained end-to-end reinforcement learning agent using Proximal Policy Optimization (PPO) in MuJoCo simulation environment enabling successful ball interception and striking behavior."
        ],
        skills: ["PyTorch", "Computer Vision", "Reinforcement Learning", "Object Detection", "Deep Learning", "YOLO", "Kalman Filters", "MuJoCo", "Robotics"],
        logo: "iit_mandi_logo" // You'll need to add this image to your public folder
    }
];

const ProjectInfo = [
    {
        "title": "OneVote - Secure Voting Platform",
        "desc": "OneVote is a highly secure and scalable MERN-based online voting system designed for institutions and organizations to conduct tamper-proof elections.",
        "image": "one.png",
        "live": true,
        "technologies": ["Express.js", "Node.js", "React.js", "MongoDB", "TypeScript", "Redux Toolkit", "Resend"],
        "link": "https://one-vote-sand.vercel.app/",
        "github": "https://github.com/PinakGupta/One-Vote"
        },
    {
        "title": "Welth - AI Finance Platform",
        "desc": "Welth is an innovative AI-powered finance platform designed to simplify money management. Easily track multiple accounts, manage transactions, and gain insightful analytics with visual charts. With automated transaction entry using Gemini AI and secure, intuitive features built with modern tech, Welth revolutionizes your financial journey.",
        "image": "Welth.png",
        "live": true,
        "technologies": ["Next.js", "Supabase", "Tailwind CSS", "Prisma", "Gemini API"],
        "link": "https://welth-ai-finance-platform-ls3y.vercel.app/",
        "github": "https://github.com/PinakGupta/Welth---AI-Finance-Platform"
    },
    {
        title: "QuickBite",
        desc: "QuickBite is a dynamic and user-friendly food delivery application built with the MERN stack, offering a seamless experience for ordering and managing meals. It features real-time updates for order tracking using Socket.io and an intuitive user interface styled with TailwindCSS. The platform incorporates secure authentication and authorization, optimized search and filtering for food items, and efficient global state management using Redux, ensuring a smooth and reliable user experience.",
        image: "QuickBite.png",
        live: true,
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "TailwindCSS", "Redux"],
        link: "https://quickbite-frontend-1.onrender.com/",
        github: "https://github.com/PinakGupta/QuickBite-frontend"
    },   
    {
        title: "EstateEase-Real Estate Platform",
        desc: "EstateEase is a feature-rich real estate platform developed using the MERN stack. It streamlines the process of buying, selling, renting, and leasing residential and commercial properties. With user-friendly filters, clients can search for properties based on criteria like the number of bedrooms, bathrooms, and location. The platform enables direct communication with landlords through email, ensuring convenience and transparency. Its responsive design ensures seamless navigation across mobile and desktop devices, combining functionality with an intuitive user experience. EstateEase redefines property transactions, making them simple and efficient.",
        image: "EstateEase.png",
        live: true,
        technologies: ["MongoDB", "React.js", "Node.js", "Firebase"],
        link: "https://estate-ease-up4y.onrender.com/",
        github: "https://github.com/PinakGupta/mern-estate"
    },     
    {
        title: "Chat-App",
        desc: "Chat-App is a real-time messaging platform built with the MERN stack, featuring Socket.io for instant communication and styled with TailwindCSS and Daisy UI. It includes secure JWT-based authentication, real-time user status updates, and global state management using Zustand for a seamless chat experience.",
        image: "ChatApp.png",
        live: true,
        technologies: ["MongoDB", "Socket.io", "React.js", "Node.js", "TailwindCSS", "Daisy UI", "Zustand"],
        link: "https://chat-app-for-chatting.onrender.com/",
        github: "https://github.com/PinakGupta/chat-app"
    },            
    {
        title: "SkillPathFinder",
        desc: "SkillPathFinder is an AI-powered career and skill recommendation platform designed to help users identify and pursue the most suitable skills and career paths. Built using the MERN stack, it leverages machine learning algorithms to analyze user input and provide personalized recommendations. The platform features a clean, responsive UI and tools for goal tracking and resource suggestions, empowering users to make informed decisions for their professional growth.",
        image: "SkillPathFinder.png",
        live: false,
        technologies: ["Scikit-learn","MongoDB", "Express.js", "React.js", "Node.js", "Python", "TailwindCSS"],
        link: "https://github.com/PinakGupta/SkillPathFinder",
        github: "https://github.com/PinakGupta/SkillPathFinder"
    }
];

const SkillInfo = [
    {
        title: "Web Development",
        skills: [
            "HTML", 
            "CSS", 
            "JavaScript", 
            "React JS", 
            "Redux", 
            "Tailwind CSS", 
            "Material UI", 
            "Bootstrap", 
            "Node JS", 
            "Express JS", 
            "MySQL", 
            "MongoDB", 
            "Firebase"
        ]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "SQL"]
    },
    {
        title: "Tools",
        skills: ["Git", "GitHub", "VS Code", "Postman", "MongoDB Compass"]
    },
    {
        title: "Courses",
        skills: [
            "Data Structures and Algorithms (DSA)", 
            "Object-Oriented Programming (OOPS)", 
            "Database Management Systems (DBMS)", 
            "Machine Learning", 
            "Computer Networks (CN)", 
            "Operating System (OS)"
        ]
    }
];

const socialLinks = [
    { link: "https://github.com/PinakGupta", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/pinak-gupta-3a18b6273/", icon: IconBrandLinkedin },
    { link: "https://leetcode.com/u/Pinak_Gupta/", icon: IconBrandLeetcode }
];

const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

export { Info, ProjectInfo, ExperienceInfo, socialLinks, SkillInfo, Slugs };