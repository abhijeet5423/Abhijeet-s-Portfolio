// Skills Section Logo's
import ucerLogo from "./ucerLogo.jpeg";
import gdgislogo from "./gdgislogo.jpeg";
import iislogo from "./iislogo.jpeg";
import billingimg from "./billingsoftware.png";
import tourismimg from "./tourismproject.png";
import diceimg from "./dicegame.png";

export const projects = [
  {
    id: 1,
    title: "Billing Software | MERN Stack",
    eyebrow: "Production dashboard",
    description:
      "Developed a full-stack billing and POS software using MongoDB, Express.js, React.js, and Node.js for managing business operations efficiently. Implemented product management, customer management, supplier management, purchase tracking, sales billing, stock management, expense tracking, profit/loss reports, and invoice generation. Added role-based access control, dashboard analytics, GST/non-GST billing, sequential GST invoice numbering, and responsive invoice layouts.",
    image: billingimg,
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "CSS"],
    codeLink: "https://billing-software-mvp.vercel.app/admin/dashboard",
    action: "View Live Project",
    meta: "MERN / RBAC / GST invoices",
    demoLogin: "admin@example.com",
    demoPassword: "admin123",
  },
  {
    id: 2,
    title: "Tourism Project",
    eyebrow: "Responsive web experience",
    description:
      "A fully responsive tourism website built using pure React and CSS.",
    image: tourismimg,
    tech: ["React", "CSS"],
    codeLink: "https://github.com/abhijeet5423/Tourme-",
    action: "View Code",
    meta: "React / CSS / UI",
  },
  {
    id: 3,
    title: "Mini Dice Game",
    eyebrow: "Interaction prototype",
    description:
      "A mini dice game built to practice JavaScript logic and React integration.",
    image: diceimg,
    tech: ["React", "JavaScript"],
    codeLink: "https://github.com/abhijeet5423/Dice-game",
    action: "View Code",
    meta: "React / JavaScript",
  },
];

  export const education = [
    {
      id: 0,
      img: ucerLogo,
      school: "United College of Engineering and Research, Greater Noida ",
      date: "Sept 2021 - July 2025",
      grade: "6.7 CGPA",
      desc: "I have completed my Bachelolr's degree (B-tech) in Computer Science from UCER, Greater Noida. During my time at UCER, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience  has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor in Technology   (B-Tech)",
    },
    {
      id: 1,
      img: gdgislogo,
      school: "G.D Goenka International School, Rohtak",
      date: "April 2020 - March 2021",
      grade: "70%",
      desc: "I completed my class 12 education from G.D Goenka International School, Rohtak, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: iislogo,
      school: "Imperial International School, Najibabad",
      date: "Apr 2018 - March 2019",
      grade: "82%",
      desc: "I completed my class 10th education from Imperial International  School, Najibabad, under the CBSE board, where I studied Maths, Science  with Computer Science.",
      degree: "CBSE(X)",
    },
   
  ];
  
