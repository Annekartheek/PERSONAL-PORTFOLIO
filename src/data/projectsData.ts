export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  github: string;
  demo: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Landing Page ",
    description: "A full-featured e-commerce platform with product search, cart functionality, and secure checkout.",
    image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg",
    category: "web",
    technologies: ["HTML-5", "CSS" ,"JavaScript"],
    github: "https://github.com/Annekartheek/E-commerce-landing-page",
    demo: "https://www.bigcommerce.com/articles/ecommerce/ecommerce-landing-pages/#:~:text=An%20ecommerce%20landing%20page%20is%20a%20standalone%20web%20page%2C%20created,promotion%20in%20an%20email%20campaign."
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing tasks, projects, and deadlines with drag-and-drop functionality.",
    image: "https://images.pexels.com/photos/7654096/pexels-photo-7654096.jpeg",
    category: "web",
    technologies: ["React", "Redux", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 3,
    title: "",
    description: "Real-time weather forecasting app with location detection and 7-day predictions.",
    image: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg",
    category: "mobile",
    technologies: ["React Native", "OpenWeather API", "Geolocation"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 4,
    title: "Finance Dashboard",
    description: "Interactive finance dashboard with real-time data visualization and reporting tools.",
    image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg",
    category: "web",
    technologies: ["Angular", "D3.js", "TypeScript", "Express"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 5,
    title: "Online Resume Builder with Flask",
    description: "We can build your resumes by using multiple templates and we can design the resume by our own.",
    image: "https://images.pexels.com/photos/3182801/pexels-photo-3182801.jpeg",
    category: "design",
    technologies: ["HTML", "CSS", "PYTHON","JAVASCRIPT"],
    github: "https://github.com/Annekartheek/Resume-Builder-with-flask",
    demo: "https://en.wikipedia.org/wiki/R%C3%A9sum%C3%A9"
  },
  {
    id: 6,
    title: "Stop Watch",
    description: "Mobile app using to stop the time intime only.",
    image: "https://images.pexels.com/photos/4498155/pexels-photo-4498155.jpeg",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
    github: "https://github.com/Annekartheek/StopWatch",
    demo: "https://en.wikipedia.org/wiki/Stopwatch"
  }
];