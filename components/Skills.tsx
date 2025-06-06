import { useEffect, useState } from 'react';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);

  useEffect(() => {
    // Animate skills one by one
    skillsData.forEach((skillCategory, index) => {
      skillCategory.skills.forEach((skill, skillIndex) => {
        const delay = (index * 100) + (skillIndex * 50);
        setTimeout(() => {
          setAnimatedSkills(prev => [...prev, skill.name]);
        }, delay);
      });
    });
  }, []);

  return (
    <section id="skills" className="py-20 md:py-32 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center">My Skills</h2>
        <div className="w-16 h-1 bg-teal-500 mx-auto mb-10"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-teal-500">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded overflow-hidden">
                      <div 
                        className={`h-full bg-teal-500 rounded transition-all duration-1000 ease-out ${
                          animatedSkills.includes(skill.name) ? '' : 'w-0'
                        }`}
                        style={{ 
                          width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;