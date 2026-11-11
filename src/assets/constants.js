// Skills Section Logo's
import ucerLogo from "./ucerLogo.jpeg";
import gdgislogo from "./gdgislogo.jpeg";
import iislogo from "./iislogo.jpeg";
import billingimg from "./billingsoftware.png";
import tourismimg from "./tourismproject.png";
import diceimg from "./dicegame.png";

export const projects = [
  {
    id: "01",
    title: "Billing & POS Management System",
    eyebrow: "FLAGSHIP CASE STUDY · MERN ARCHITECTURE",
    description:
      "A full-stack enterprise point-of-sale and business management platform engineered to automate high-throughput retail billing, GST-compliant invoice generation, and real-time inventory tracking.",
    problem:
      "Small and mid-sized retail businesses struggle with error-prone manual tax math, untracked inventory shrinkage, fragmented supplier accounts, and slow checkout lines using spreadsheets.",
    contribution:
      "Engineered the complete solution from schema design to deployment: structured MongoDB schemas with atomic updates, built Express REST endpoints with JWT role-based access control (RBAC), and developed the responsive React dashboard with printable invoice layouts.",
    features: [
      "GST & Non-GST Billing Workflows with sequential GST invoice numbering",
      "Dynamic Product Management with low-stock threshold alerts",
      "Customer & Supplier Ledgers with transaction histories and balance tracking",
      "Role-Based Access Control (RBAC) separating admin controls from cashier operations",
      "Dashboard Analytics for profit/loss calculation and daily revenue tracking",
      "Printable, responsive invoice layout generation with HSN/tax breakup",
    ],
    image: billingimg,
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs"],
    liveLink: "https://billing-software-mvp.vercel.app/admin/dashboard",
    codeLink: null,
    action: "View Live Project",
    demoCredentials: {
      note: "Restricted demo sandbox account for evaluation",
      email: "admin@example.com",
      password: "admin123",
    },
    featured: true,
  },
  {
    id: "02",
    title: "Tourme — Tourism Discovery Web Platform",
    eyebrow: "RESPONSIVE CLIENT APPLICATION",
    description:
      "A fast, responsive travel exploration web platform designed to streamline destination discovery, curated tour package viewing, and interactive trip itinerary planning.",
    problem:
      "Travelers frequently face slow, bloated directory platforms with cluttered navigations that break or become unreadable on mobile viewports.",
    contribution:
      "Built the client architecture from scratch using pure React and modern CSS, emphasizing responsive visual rhythm, destination catalog filtering, and zero-dependency performance.",
    features: [
      "Curated travel destination catalog with visual exploration galleries",
      "Responsive tour package cards with comprehensive itinerary summaries",
      "Mobile-first responsive navigation with zero layout shift",
      "Accessible semantic HTML structure and lightweight styling",
    ],
    image: tourismimg,
    tech: ["React.js", "JavaScript", "CSS3", "Responsive UI"],
    liveLink: null,
    codeLink: "https://github.com/abhijeet5423/Tourme-",
    action: "View Source Code",
    demoCredentials: null,
    featured: false,
  },
  {
    id: "03",
    title: "Mini Dice Game",
    eyebrow: "STATE MACHINE PROTOTYPE",
    description:
      "An interactive web application prototype developed to demonstrate deterministic state management, dice roll randomization mechanics, and immediate reactive UI state transitions in React.",
    problem:
      "Practicing turn-based state validation, conditional score accumulation, and deterministic game win/loss algorithms purely in React component state.",
    contribution:
      "Designed and implemented the core game rules, turn lifecycle, score aggregation engine, boundary conditions, and interactive modal overlays.",
    features: [
      "Turn-based dice roll randomization with immediate visual feedback",
      "Deterministic score accumulation and win/loss validation algorithms",
      "Interactive rules modal, score resetting, and responsive game canvas",
    ],
    image: diceimg,
    tech: ["React.js", "JavaScript", "DOM Mechanics", "State Management"],
    liveLink: null,
    codeLink: "https://github.com/abhijeet5423/Dice-game",
    action: "View Source Code",
    demoCredentials: null,
    featured: false,
  },
];

export const education = [
  {
    id: 0,
    img: ucerLogo,
    school: "United College of Engineering and Research, Greater Noida",
    date: "June 2021 - June 2025",
    grade: "6.5 CGPA",
    desc: "Completed Bachelor's degree (B.Tech) in Computer Science from UCER, Greater Noida (affiliated with Dr. APJ Abdul Kalam Technical University). Gained a solid foundation in programming, software engineering, Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Web Development.",
    degree: "Bachelor of Technology (B.Tech) - Computer Science",
  },
  {
    id: 1,
    img: gdgislogo,
    school: "G.D Goenka International School, Rohtak",
    date: "May 2020 - May 2021",
    grade: "66.8%",
    desc: "Completed class 12 education from G.D Goenka International School, Rohtak, under the CBSE board, studying Physics, Chemistry, Mathematics (PCM), and Computer Science.",
    degree: "CBSE (XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: iislogo,
    school: "Imperial International School, Najibabad",
    date: "July 2018 - July 2019",
    grade: "83.33%",
    desc: "Completed class 10 education from Imperial International School, Najibabad, under the CBSE board, studying Mathematics, Science, and Computer Science.",
    degree: "CBSE (X) - Secondary Education",
  },
];
