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
    title: "JARVIS VIRTUAL ASSISTANT",
    description: "  A desktop application that uses AI to perform tasks like web searching, opening applications, and providing information.",
    image:  "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    category: "web",
    technologies: ["Python","JavaScript"],
    github: "https://github.com/Annekartheek/Jarvis-Virtual-Assistant",
    demo: "https://www.bing.com/search?q=jarvis+desktop+application+virtual+assistant&qs=CGS&pq=jarvis+desktop+applica&sk=CGS1&sc=6-22&cvid=6A9CF16F5C754CBD84D8A85670A34D2E&FORM=QBRE&sp=2&ghc=1&lq=0"
  },
  {
    id: 2,
    title: "To Do App",
    description: "A productivity app for managing tasks, projects, and deadlines with drag-and-drop functionality.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
    category: "web",
    technologies: ["JavaScript", "Python","Tailwind CSS"],
    github: "https://github.com/Annekartheek/To-Do-List",
    demo: "https://www.bing.com/search?q=task%20reminder%20wikipedia&qs=n&form=QBRE&sp=-1&ghc=2&lq=0&pq=task%20reminder%20wikipedia&sc=10-23&sk=&cvid=BBFB5CEB20174270B4842C551A8F1DC6"
  },
  {
    id: 3,
    title: "Weather app",
    description: "Real-time weather forecasting app with location detection and 7-day predictions.",
    image: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg",
    category: "mobile",
    technologies: ["Python", "Geolocation"],
    github: "https://github.com/Annekartheek/Weather-app",
    demo: "https://en.wikipedia.org/wiki/Weather_(Apple)"
  },
  {
    id: 4,
    title: "USER SIGNUP WITH DATABASE",
    description: "A user signup system that securely stores user information in a database.",
    image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg",
    category: "web",
    technologies: ["PHP","MySQL","HTML","CSS"],
    github: "https://github.com/Annekartheek/User-Signup-along-database",
    demo: "https://www.bing.com/search?q=user+signup+with+database&qs=n&form=QBRE&sp=-1&ghc=2&lq=0&pq=user+signup+with+database&sc=10-23&sk=&cvid=BBFB5CEB20174270B4842C551A8F1DC6"
  },
  {
    id: 5,
    title: "Online Resume Builder with Flask",
    description: "We can build your resumes by using multiple templates and we can design the resume by our own.",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
    category: "design",
    technologies: ["HTML", "CSS", "PYTHON","JAVASCRIPT"],
    github: "https://github.com/Annekartheek/Resume-Builder-with-flask",
    demo: "https://en.wikipedia.org/wiki/R%C3%A9sum%C3%A9"
  },
  {
    id: 6,
    title: "Password Generator",
    description: "**Password Generator** is a mobile app that helps users create and manage strong passwords.",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
    category: "mobile",
    technologies: ["python","CSS","BatchFile"],
    github: "https://github.com/Annekartheek/Password-Generator",
    demo: "https://en.wikipedia.org/wiki/Password_manager"
  }
];