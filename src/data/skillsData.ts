interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 75 },
      { name: "TypeScript", level: 60 },
      { name: "React.js", level: 50 },
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Python", level:70  },
      { name: "Java", level:75  },
      { name: "MySQL", level: 60 },
      { name: "Excel",level:50   },
      
    ]
  },
  {
    category: "Development Tools",
    skills: [
      { name: "Git", level: 92 },
      { name: "Jupiter", level: 70 },
      { name: "VS Code", level: 95 },
    ]
  },
  {
    category: "UI/UX Design",
    skills: [
      { name: "Photoshop", level: 85 },
      { name: "AdobeXD", level: 50 },
            
    ]
  },
  {
    category: "Other Skills",
    skills: [
      { name: "GitHub", level: 72 },
      { name: "Technical writing", level: 85 },

    ]
  }
];