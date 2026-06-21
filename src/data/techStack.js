import { 
  FaReact, FaHtml5, FaCss3Alt, FaLaravel, FaPhp, FaNodeJs, FaGitAlt 
} from "react-icons/fa"
import { 
  SiTailwindcss, SiBootstrap, SiMysql, SiPostgresql, SiPostman, SiVite, SiCpanel 
} from "react-icons/si"

const techCategories = [
  {
    title: "Frontend Core & UI",
    color: "bg-cyber-yellow",
    skills: [
      { name: "React.js", icon: FaReact, color: "text-[#61dafb]", desc: "Interactive SPAs" },
      { name:"Next.js", icon: FaReact, color: "text-[#000000]", desc: "SSR & SSG Framework" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38bdf8]", desc: "Brutalist & Modern UI" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952b3]", desc: "Responsive Framework" },
      { name: "HTML5 & CSS3", icon: FaHtml5, color: "text-[#e34f26]", desc: "Semantic Structure" }
    ]
  },
  {
    title: "Backend & Logic",
    color: "bg-[#ff5e36]", // cyber-orange
    skills: [
      { name: "Laravel", icon: FaLaravel, color: "text-[#ff2d20]", desc: "MVC Architecture" },
      { name: "PHP", icon: FaPhp, color: "text-[#777bb4]", desc: "Object Oriented Scripting" },
      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]", desc: "Server runtimes" },
      { name: "REST APIs", icon: SiPostman, color: "text-[#ff6c37]", desc: "Endpoints Integrations" }
    ]
  },
  {
    title: "Databases & Storage",
    color: "bg-cyber-blue",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-[#00758f]", desc: "Relational Queries" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]", desc: "Structured Datastores" }
    ]
  },
  {
    title: "Development Tools",
    color: "bg-[#4ade80]", // cyber-green
    skills: [
      { name: "Git & GitHub", icon: FaGitAlt, color: "text-[#f05032]", desc: "Version Control" },
      { name: "Postman CLI", icon: SiPostman, color: "text-[#ff6c37]", desc: "API Endpoint Testing" },
      { name: "Vite Tooling", icon: SiVite, color: "text-[#646cff]", desc: "Fast HMR Bundling" },
      { name: "cPanel & Hosting", icon: SiCpanel, color: "text-[#ff8c00]", desc: "Server Deployment" }
    ]
  }
]

export default techCategories
