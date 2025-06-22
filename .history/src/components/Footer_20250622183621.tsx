import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-bold text-xl mb-2">Lama</span>
              <p className="text-sm text-muted-foreground text-center md:text-left">
                Développeur Frontend créant de belles expériences numériques
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-full",
                "border border-border hover:border-accent hover:text-accent transition-colors"
              )}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-full",
                "border border-border hover:border-accent hover:text-accent transition-colors"
              )}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            
            <a 
              href="mailto:john.doe@example.com" 
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-full",
                "border border-border hover:border-accent hover:text-accent transition-colors"
              )}
              aria-label="E-mail"
            >
              <Mail size={18} />
            </a>
            
            <ThemeToggle />
          </div>
          
          <button 
            onClick={scrollToTop}
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-full",
              "bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            )}
            aria-label="Remonter en haut"
          >
            <ArrowUp size={18} />
          </button>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} John Doe. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
