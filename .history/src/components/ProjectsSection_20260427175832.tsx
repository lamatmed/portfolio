import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'design';
}

const ProjectsSection = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'design'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'NovaCart',
      description: "Application e-commerce complète avec gestion des produits, panier, paiement et interface moderne. Plateforme dynamique avec contrôle d'accès, gestion d'état globale, mises à jour en temps réel et chargement optimisé.",
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      tags: ['React', 'Next.js', 'MangoDB'],
      githubUrl: 'https://github.com/lamatmed/novacart',
      liveUrl: 'https://novacart-mr.vercel.app/',
      category: 'web'
    },
    {
      id: 2,
    title: 'RimTransport Web',
    description: "Plateforme web de gestion de transport avec réservation. Utilisation de Convex pour les données en temps réel.",
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80',
    tags: ['Next.js', 'Convex'],
    githubUrl: 'https://github.com/lamatmed/rimtransport',
    liveUrl: 'https://rimtransport.com',
    category: 'web'
    },
    {
     id: 3,
    title: 'RimTransport Mobile',
    description: "Application mobile de transport avec , réservation rapide et notifications en temps réel. Backend temps réel avec Convex.",
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80',
    tags: ['React Native', 'Convex'],
    githubUrl: 'https://rimtransport.com',
    liveUrl: 'https://rimtransport.com',
    category: 'mobile'
    },
    {
     id: 4,
    title: 'SoftRim Mobile',
    description: "Application mobile développée avec React Native pour la gestion de services numériques, avec synchronisation temps réel via Convex.",
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80',
    tags: ['React Native', 'Convex'],
    githubUrl: '',
    liveUrl: '',
    category: 'mobile'
    },
    {
      id: 6,
      title: 'Portfolio Design',
      description: "Maquette de portfolio moderne et responsive, réalisée avec Figma et animations interactives.",
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80',
      tags: ['Figma', 'UI/UX', 'Animation'],
      githubUrl: 'https://github.com/lamatmed',
      liveUrl: '',
      category: 'design'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Projets à la une</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Voici quelques-uns de mes projets récents qui illustrent mes compétences et ma passion pour la création d'applications web modernes.
          </p>
        </div>

        {/* Filter Buttons */}
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
            Tous les projets
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full transition-colors",
              filter === 'web' 
                ? "bg-accent text-accent-foreground" 
                : "bg-muted/50 hover:bg-muted"
            )}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full transition-colors",
              filter === 'mobile' 
                ? "bg-accent text-accent-foreground" 
                : "bg-muted/50 hover:bg-muted"
            )}
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full transition-colors",
              filter === 'design' 
                ? "bg-accent text-accent-foreground" 
                : "bg-muted/50 hover:bg-muted"
            )}
            onClick={() => setFilter('design')}
          >
            Design
          </button>
        </div>

        {/* Projects Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "glass rounded-xl overflow-hidden",
                "transition-all duration-300 hover:shadow-glass-lg animate-slide-in",
                "opacity-0"
              )}
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  
                  {project.liveUrl && (
                    <Button size="sm" className="gap-2" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Démo en ligne
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
