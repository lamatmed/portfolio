import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}

const SkillsSection = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const skills: Skill[] = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'backend' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'backend' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'backend' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'frontend' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'frontend' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frontend' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'backend' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'backend' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'backend' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools' },
    { name: 'Tableau', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg', category: 'tools' },
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', category: 'tools' },
  ];

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Mes Compétences</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            J'ai travaillé avec une variété de technologies dans le monde du développement web.
            Voici les compétences clés que je mets à votre disposition.
          </p>
        </div>

        {/* Boutons de filtre */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          <button
            className={cn(
              "px-5 py-2 rounded-full transition-colors",
              filter === 'all' 
                ? "bg-accent text-accent-foreground" 
                : "bg-muted/50 hover:bg-muted"
            )}
            onClick={() => setFilter('all')}
          >
            Toutes
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full transition-colors",
              filter === 'frontend' 
                ? "bg-accent text-accent-foreground" 
                : "bg-muted/50 hover:bg-muted"
            )}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full transition-colors",
              filter === 'backend' 
                ? "bg-accent text-accent-foreground" 
                : "bg-muted/50 hover:bg-muted"
            )}
            onClick={() => setFilter('backend')}
          >
            Backend
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full transition-colors",
              filter === 'tools' 
                ? "bg-accent text-accent-foreground" 
                : "bg-muted/50 hover:bg-muted"
            )}
            onClick={() => setFilter('tools')}
          >
            Outils
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={cn(
                "glass p-4 rounded-xl flex flex-col items-center justify-center transition-all duration-300",
                "hover:scale-105 hover:shadow-glass-lg animate-fade-in",
                "opacity-0"
              )}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-12 h-12 md:w-16 md:h-16 object-contain mb-3"
              />
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
