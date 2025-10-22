const employees = [
  {
    id: 1,
    email: "rohit.sharma@company.com",
    password: "123",
    tasks: [
      {
        title: "Design Login Page UI",
        description:
          "Create a responsive login and signup page using Tailwind CSS.",
        date: "2025-10-10",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Implement Form Validation",
        description:
          "Add validation for all input fields using React Hook Form.",
        date: "2025-10-12",
        category: "Frontend",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Bug Fix - Navbar Alignment",
        description:
          "Fix the alignment issue on the navbar for mobile screens.",
        date: "2025-10-15",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "mehak.kapoor@company.com",
    password: "123",
    tasks: [
      {
        title: "Write Blog for Product Launch",
        description: "Draft and edit a blog for the upcoming product release.",
        date: "2025-10-11",
        category: "Content",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Social Media Strategy",
        description: "Plan social media posts for Diwali campaign.",
        date: "2025-10-13",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Proofread Team Articles",
        description: "Review grammar and tone in all marketing blogs.",
        date: "2025-10-09",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Missed Client Presentation",
        description: "Follow up on presentation feedback missed last week.",
        date: "2025-10-05",
        category: "Client Work",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    email: "ayush.singh@company.com",
    password: "123",
    tasks: [
      {
        title: "Build Dashboard Layout",
        description: "Design and develop the main dashboard UI in React.",
        date: "2025-10-08",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Integrate API for Analytics",
        description: "Fetch and render analytics data from backend API.",
        date: "2025-10-14",
        category: "Backend",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Socket.IO Event Bug",
        description: "Resolve message duplication in chat module.",
        date: "2025-10-09",
        category: "Debugging",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Optimize Build Performance",
        description:
          "Improve Webpack and Tailwind configurations for faster build.",
        date: "2025-10-07",
        category: "Optimization",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    email: "sarthak.verma@company.com",
    password: "123",
    tasks: [
      {
        title: "Client Meeting Notes",
        description: "Prepare notes for upcoming client call with Zentech.",
        date: "2025-10-11",
        category: "Client Work",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "UI Animation Testing",
        description: "Test Framer Motion animations across browsers.",
        date: "2025-10-13",
        category: "Frontend",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Redesign Footer Section",
        description: "Implement new layout based on updated design mock.",
        date: "2025-10-09",
        category: "UI Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "priya.sharma@company.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Financial Report",
        description:
          "Generate Q3 financial report using Excel and verify data.",
        date: "2025-10-05",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Reconcile Accounts",
        description: "Ensure all expenses and revenue are properly reconciled.",
        date: "2025-10-12",
        category: "Accounts",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Client Invoice Follow-Up",
        description: "Contact pending clients for unpaid invoices.",
        date: "2025-10-10",
        category: "Finance",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Tax Calculation Check",
        description: "Recheck GST and TDS entries for accuracy.",
        date: "2025-10-06",
        category: "Compliance",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@company.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
