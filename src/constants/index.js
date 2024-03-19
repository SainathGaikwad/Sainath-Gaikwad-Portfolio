import {
  meta,
  shopify,
  project_planners_inc_logo,
  letsgrowmore_logo,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  //   {
  //     imageUrl: motion,
  //     name: "Motion",
  //     type: "Animation",
  //   },
  //   {
  //     imageUrl: mui,
  //     name: "Material-UI",
  //     type: "Frontend",
  //   },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  //   {
  //     imageUrl: typescript,
  //     name: "TypeScript",
  //     type: "Frontend",
  //   },
];

export const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Project Planners Corp.",
    icon: project_planners_inc_logo,
    iconBg: "#accbe1",
    date: "May 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web-Development Intern",
    company_name: "LetsGrowMore",
    icon: letsgrowmore_logo,
    iconBg: "#fbc3bc",
    date: "May 2023 - June 2023",
    points: [
      "Worked on numerous new technologies and built various projects using JavaScript libraries.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/SainathGaikwad",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/sainath-gaikwad-saibhau1234564789/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "MERN-Ecommerce-Website",
    description:
      "Built a responsive and dynamic user interface with React, create a back-end API with Express and Node.js, and store data in a NoSQL database with MongoDB (ADMIN PANEL INCLUDED).",
    link: "https://github.com/SainathGaikwad/MERN-ECommerce",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Food Donation Website",
    description:
      "The system consists of three types of users: admin, donors and agents.Users have to add the food details and wait for request from any agents after that admin have to acknowledge that the food is acceptable or not, whenever agent request for the food user will accept the request and user will donate to that agent.",
    link: "https://github.com/SainathGaikwad/FoodDonationWebsite_Demo3",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "SnapGram ( Social Media App)",
    description:
      "Built a modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance using React JS, Appwrite, TypeScript, and more.",
    link: "https://github.com/SainathGaikwad/Snapgram_With_Sai",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Real Uber App Clone",
    description:
      "Uber Clone with Next JS, React JS, Tailwind CSS and Firebase.Bulit Mobile application to request a ride at any time and on any day of the year. Create an account using only a Google account and enter your destination and track your drivers arrival on the map.",
    link: "https://github.com/SainathGaikwad/Uber_Clone",
  },

  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Advanced Hotel-Booking website",
    description:
      "Advanced/Responsive Hotel Booking Website with admin panel using HTML-CSS-JavaScript-Ajax-Php-Mysql-Bootstrap.In this website, user have to log in first before booking hotel and after that user can see the availability of rooms and according to that user can book the room.In this website, admin can shut down the website means user can't book the hotel rooms after shut down website. In Admin Panel, Admin can add carousels, features and facilities, rooms with its features and facilities. Admin can see which user is active or not.",
    link: "https://github.com/SainathGaikwad/HotelBooking_sai",
  },
];
