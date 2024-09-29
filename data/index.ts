import Edutap from '../public/Edu-tap.png'
import ProjectTwoImage from '../public/DarkFantacy.png';
import malefashion from '../public/malefashion.png'
import ProjectThreeImage from '../public/NetFlix.png';
import passwordGen from '../public/password.png';
import connections from '../public/connections.png';
import TalkWaveAI from '../public/Screenshot (82).png';
import OLX from '../public/Olx.png';
import Kanban from '../public/Kanban.png';


export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Tech stacks", link: "#techs" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Passionate Developer Ready to Take On New Challenges",
    description:
      "Skilled MERN stack developer with hands-on experience in over 10 projects.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "https://images.unsplash.com/photo-1699885960867-56d5f5262d38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with Global Communication",
    description: "Eager to collaborate with teams across different time zones.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "Always learning and improving.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech Enthusiast & Developer",
    description:
      "Excited about creating solutions and learning new technologies.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently working on an Sociel Network Application",
    description: "Get the inside scoop on my latest live project.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's Build Something Together",
    description: "Reach out to start a new project or collaboration.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Edu-tap",
    des: "Edu-tap is an innovative e-learning platform designed to offer a seamless and engaging educational experience",
    img: Edutap,
    link: "https://github.com/Shadialic/Edutap_frontend",
    videoLink: "",
    liveLink: "https://edutap-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Connections",
    des: "Connections is a cutting-edge real-time chat application designed to provide a seamless and engaging user experience",
    img: connections,
    link: "https://github.com/Shadialic/Connection",
    videoLink: "",
    liveLink: "https://connections-chat.vercel.app/",
  },
  {
    id: 3,
    title: "Male-fashion",
    des: "A full-stack eCommerce platform designed for purchasing dresses and apparel, offering users a seamless shopping experience with a visually appealing interface",
    img: malefashion,
    link: "https://github.com/Shadialic/MaleFashion",
    videoLink: "",
    liveLink: "https://malefashion-lq16.onrender.com/",
  },
  {
    id: 4,
    title: "TalkWaveAI",
    des: "Develop a Next.js application that highlights the key features of Next.js along with a comprehensive CRUD AI Prompt sharing system ",
    img: TalkWaveAI,
    link: "https://github.com/Shadialic/TalkWaveAI_Nextjs",
    videoLink: "",
    liveLink: "https://talk-wave-ai-nextjs.vercel.app'",
  },
  {
    id: 5,
    title: "Secure-Gen",
    des: "Create strong and secure passwords to keep your account safe online by using a mix of letters, numbers, and symbols.",
    img: passwordGen,
    link: "https://github.com/Shadialic/Password_Generator",
    videoLink: "",
    liveLink: "https://password-generator-cvfv.vercel.app/",
  },
  {
    id: 6,
    title: "Kanban Board App",
    des: "Kanban board application that helps users manage tasks efficiently with a simple drag-and-drop interface for better project organization.",
    img: Kanban,
    link: "https://github.com/Shadialic/Karban_Board-App",
    videoLink: "",
    liveLink: "",
  },
  {
    id: 7,
    title: "Netflix Clone",
    des: "In This Project i Used React,axios,redux,firebase",
    img: ProjectThreeImage,
    link: "https://github.com/Shadialic/Netflix",
    videoLink: "",
    liveLink: "",
  },
  {
    id: 8,
    title: "DARK-FANTASY",
    des: "Responsive Template Used HTML and CSS",
    img: ProjectTwoImage,
    link: "",
    videoLink: "",
    liveLink: "https://github.com/Shadialic/kopiko-USA",
  },
  {
    id: 9,
    title: "OLX Clone App",
    des: "In This Project i Used React,axios,redux,firebase",
    img: OLX,
    link: "https://github.com/Shadialic/Olx_Clone",
    videoLink: "",
    liveLink: "",
  },
];

export const testimonials = [
  {
    quote: "Node.js is an essential part of my stack.",
    name: "Node.js",
    title: "Backend Runtime",
    iconKey: "nodejs",
  },
  {
    quote: "Next.js is my go-to for SSR and static site generation.",
    name: "Next.js",
    title: "Frontend Framework",
    iconKey: "nextjs",
  },
  {
    quote: "TypeScript adds type safety and robustness to my projects.",
    name: "TypeScript",
    title: "Programming Language",
    iconKey: "typescript",
  },
  {
    quote: "React.js helps me build dynamic UIs with ease.",
    name: "React.js",
    title: "Frontend Library",
    iconKey: "reactjs",
  },
  {
    quote: "Express.js is my favorite minimalistic framework.",
    name: "Express.js",
    title: "Backend Framework",
    iconKey: "expressjs",
  },
  {
    quote: "MongoDB makes handling large datasets simple and efficient.",
    name: "MongoDB",
    title: "NoSQL Database",
    iconKey: "mongodb",
  },
  {
    quote: "Redux helps me manage complex app states effortlessly.",
    name: "Redux",
    title: "State Management",
    iconKey: "redux",
  },
  {
    quote: "Tailwind CSS allows me to style faster and more consistently.",
    name: "Tailwind CSS",
    title: "CSS Framework",
    iconKey: "tailwind",
  },
  {
    quote: "Docker helps me containerize applications easily.",
    name: "Docker",
    title: "Containerization Tool",
    iconKey: "docker",
  },
  {
    quote: "MVC keeps my projects well-organized and modular.",
    name: "MVC Architecture",
    title: "Design Pattern",
    iconKey: "mvc",
  },
  {
    quote:
      "Socket.io enables real-time communication between server and client.",
    name: "Socket.io",
    title: "Real-time Communication",
    iconKey: "socketio",
  },
  {
    quote: "ZegoCloud simplifies real-time audio and video integration.",
    name: "ZegoCloud",
    title: "Real-time Communication",
    iconKey: "zegocloud",
  },
  {
    quote: "Data Structures are the backbone of efficient algorithms.",
    name: "Data Structures",
    title: "Computer Science",
    iconKey: "datastructures",
  },
  {
    quote: "Firebase enables rapid backend setup for any app.",
    name: "Firebase",
    title: "Backend as a Service",
    iconKey: "firebase",
  },
  {
    quote: "MySQL provides robust database management.",
    name: "MySQL",
    title: "Relational Database",
    iconKey: "mysql",
  },

  
 
  {
    quote: "Postman simplifies API testing and documentation.",
    name: "Postman",
    title: "API Testing Tool",
    iconKey: "postman",
  },
  {
    quote: "Insomnia helps with streamlined API testing and debugging.",
    name: "Insomnia",
    title: "API Debugging Tool",
    iconKey: "insomnia",
  },
  {
    quote: "Figma is my go-to tool for UI/UX design.",
    name: "Figma",
    title: "Design Tool",
    iconKey: "figma",
  },
  {
    quote: "Vercel makes deploying full-stack apps incredibly simple.",
    name: "Vercel",
    title: "Cloud Platform",
    iconKey: "vercel",
  },
  {
    quote: "Render provides efficient server-side deployments.",
    name: "Render",
    title: "Cloud Platform",
    iconKey: "render",
  },
  {
    quote: "Netlify helps me deploy static sites with ease.",
    name: "Netlify",
    title: "Cloud Platform",
    iconKey: "netlify",
  },
  {
    quote: "Twilio makes messaging and communication easy to integrate.",
    name: "Twilio",
    title: "Communication API",
    iconKey: "twilio",
  },
  {
    quote: "RazorPay simplifies payment integration for online transactions.",
    name: "RazorPay",
    title: "Payment Gateway",
    iconKey: "razorpay",
  },
  {
    quote: "OAuth 2.0 provides secure authentication and authorization.",
    name: "OAuth 2.0",
    title: "Authorization Standard",
    iconKey: "oauth",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Developer",
    desc: "Developed and maintained complex full-stack Applications using MERN stack and Next.js technologies, ensuring seamless user experiences and robust functionalities.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "PWA and Electron App Developer",
    desc: "Designed and built Progressive Web Apps (PWAs) and Electron applications, focusing on delivering high-performance, cross-platform solutions for diverse user needs.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Application Developer",
    desc: "Led the development of various projects, including communication and social media applications, from conceptualization to deployment, ensuring client satisfaction and project success.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Problem Solver - MERN Stack Applications",
    desc: "Engineered and delivered user-centric solutions by solving complex problems with MERN stack applications, including numerous clone projects and mini-projects, focusing on innovative and effective problem-solving.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: 'https://github.com/Shadialic'
  },
  {
    id: 2,
    img: "/twit.svg",
    url: ''  
  },
  {
    id: 3,
    img: "/link.svg",
    url: 'https://www.linkedin.com/in/shadilali/'
  },
];

