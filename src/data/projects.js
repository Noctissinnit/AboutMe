import booking from "../assets/projects/booking-room.png"
import ticketing from "../assets/projects/ticketing-system.png"
import voting from "../assets/projects/voting-app.png"
import email from "../assets/projects/email-system.png"
import mykos from "../assets/projects/mykos.png"
import se from "../assets/projects/se.png"

const projects = [
  {
    id: 1,
    title: "Room Booking System",
    image: booking,
    desc: "Internal room booking system with calendar integration.",
    tech: ["Laravel", "MySQL", "Google API"],
    problem:
      "Manual room booking caused schedule conflicts and lack of transparency.",
    solution:
      "Built a centralized booking system with validation, calendar sync, and email notifications.",
    role:
      "Full-stack developer responsible for system design, backend logic, and UI implementation.",
    github: "https://github.com/Noctissinnit/ruangan.git",
    demo: "",
  },
  {
    id: 2,
    title: "Ticketing Management System",
    image: ticketing,
    desc: "Internal ticketing system for task and workflow management.",
    tech: ["Laravel", "AJAX", "DataTables"],
    problem:
    "Task handling and issue reporting were scattered across chat and spreadsheets, making it difficult to track progress, priorities, and responsibilities.",

    solution:
    "Developed a centralized ticketing system with status tracking, role-based access, dynamic filtering, and real-time updates using AJAX to improve workflow efficiency.",

    role:
    "Handled full-stack development including database design, backend business logic, AJAX-based interactions, and responsive user interface implementation.",

    github: "",
    demo: "",
  },
  {
    id: 3,
    title: "Online Voting Platform",
    image: voting,
    desc: "Multi-category voting system with real-time results.",
    tech: ["PHP", "Bootstrap", "MySQL"],
     problem:
    "Manual voting processes were time-consuming, prone to human error, and lacked transparency in result calculation.",

    solution:
    "Built a web-based voting platform supporting multiple categories with validation to prevent duplicate votes and automatic real-time result aggregation.",

    role:
    "Designed the voting flow, implemented backend logic for secure vote handling, managed database structure, and developed the frontend interface for both users and administrators.",

    github: "https://github.com/Noctissinnit/VotingSystem.git",
    demo: "",
  },
  {
    id: 4,
    title: "Mass Email System",
    image: email,
    desc: "System for sending mass emails by division with Excel import.",
    tech: ["Laravel", "SMTP", "Excel Import"],
     problem:
    "Sending announcements manually to large groups caused delays, inconsistencies, and difficulty in managing recipient data across divisions.",

    solution:
    "Created a mass email system with division-based targeting, Excel import for recipient data, and file attachment support to streamline internal communication.",

    role:
    "Responsible for backend email logic, Excel data processing, SMTP configuration, and building the admin interface for managing recipients and email content.",

    github: "https://github.com/Noctissinnit/AtmiBlast.git",
    demo: "",
  },
    {
    id: 5,
    title: "MyKos – Kos Management System",
    image: mykos,
    desc: "Web-based kos management system with multi-role access for property management and tenant interaction.",
    tech: ["Laravel", "MySQL", "Bootstrap", "Role Management"],
    problem:
        "Managing kos operations manually caused difficulties in tracking room availability, tenant data, and payment status across multiple users.",
    solution:
        "Developed a centralized kos management system with role-based access control allowing owners to monitor properties, admins to manage data, and users to view room availability and submit requests.",
    role:
        "Designed system architecture, implemented role-based authorization, developed backend logic for room and tenant management, and built responsive user interfaces.",
    github: "https://github.com/Noctissinnit/MyKos.git",
    demo: "",
    },
    {
    id: 6,
    title: "Software Engineering Program – Landing Page & Portfolio System",
    image: se,
    desc: "Informational landing page and portfolio management system for a Software Engineering academic program.",
    tech: ["Laravel", "MySQL", "Bootstrap", "Authentication"],
    problem:
        "Academic program information and student portfolios were scattered across multiple platforms, making it difficult for visitors and stakeholders to access consistent and updated content.",
    solution:
        "Built a public-facing landing page accessible without authentication, combined with a role-based system where admins manage content, lecturers review portfolios, and students showcase their work.",
    role:
        "Handled full-stack development including authentication flow, role-based access, portfolio management features, and public-facing UI for non-authenticated users.",
    github: "https://github.com/Noctissinnit/SoftwareEngineering.git",
    demo: "",
    },

]

export default projects
