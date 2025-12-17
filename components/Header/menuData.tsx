import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
 {
  id: 2,
  title: "Services",
  path: "/services",  
  newTab: false,
  submenu: [
    { id: 21, title: "Assignment", path: "/services/assignments", newTab: false },
    { id: 22, title: "Do My Assignment", path: "/services/do-my-assignment", newTab: false },
    { id: 23, title: "Do My Homework", path: "/services/do-my-homework", newTab: false },
    { id: 24, title: "Do My Maths Homework", path: "/services/do-my-maths-homework", newTab: false },
    { id: 25, title: "Lab Report", path: "/services/lab-report", newTab: false },
    { id: 26, title: "Live Session", path: "/services/live-session", newTab: false },
    { id: 27, title: "Online Tutoring", path: "/services/online-tutoring", newTab: false },
    { id: 28, title: "Project Report Writing", path: "/services/project-report-writing", newTab: false },
    { id: 29, title: "Paper Writing Help", path: "/services/paper-writing-help", newTab: false },
    { id: 30, title: "Project Report Help", path: "/services/project-report-help", newTab: false },
    { id: 31, title: "Presentation Writing", path: "/services/presentation-writing", newTab: false },
    { id: 32, title: "Pay Someone To Do My Homework", path: "/services/pay-someone-to-do-my-homework", newTab: false },
    { id: 33, title: "Paying Someone To Write Your Paper", path: "/services/paying-someone-to-write-your-paper", newTab: false },
    { id: 34, title: "Speech Writing", path: "/services/speech-writing", newTab: false },
    { id: 35, title: "Video Solutions", path: "/services/video-solutions", newTab: false },
    { id: 36, title: "Write Research Paper", path: "/services/write-research-paper", newTab: false },
  ],
},

  {
    id: 3,
    title: "Subjects",
    path: "/subjects",  
    newTab: false,
    submenu: [
    { id: 37, title: "Accounting", path: "/subjects/accounting", newTab: false },
    { id: 38, title: "Biology", path: "/subjects/biology", newTab: false },
    { id: 39, title: "Chemistry", path: "/subjects/chemistry", newTab: false },
    { id: 40, title: "Computer Science", path: "/subjects/computer-science", newTab: false },
    { id: 41, title: "Economics", path: "/subjects/economics", newTab: false },
    { id: 42, title: "Electrical Engineering", path: "/subjects/electrical-engineering", newTab: false },
    { id: 43, title: "Finance", path: "/subjects/finance", newTab: false },
    { id: 44, title: "Mathematics", path: "/subjects/mathematics", newTab: false },
    { id: 45, title: "Mathematics and Computing", path: "/subjects/mathematics-and-computing", newTab: false },
    { id: 46, title: "Mechanical Engineering", path: "/subjects/mechanical-engineering", newTab: false },
    { id: 47, title: "Nursing", path: "/subjects/nursing", newTab: false },
    { id: 48, title: "Programming", path: "/subjects/programming", newTab: false },
    { id: 49, title: "Physics", path: "/subjects/physics", newTab: false },
    { id: 50, title: "Writing", path: "/subjects/writing", newTab: false },
  ],
  },
  {
    id: 4,
    title: "Blogs",
    newTab: false,
    path: "/blog",
  },
  {
    id: 5,
    title: "About",
    newTab: false,
    path: "/about",
  },
  {
    id: 6,
    title: "Contact",
    newTab: false,
    path: "/contact",
  }
];

export default menuData;

