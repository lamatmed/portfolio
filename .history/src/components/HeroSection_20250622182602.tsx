import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const roles = ["Développeur Logiciel", "Développeur Full Stack", "Résolveur de Problèmes"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting && charIndex < currentRole.length) {
        // Typing text
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        // Wait at the end of typing
        clearInterval(typingInterval);
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex > 0) {
        // Deleting text
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        // Move to next role
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, isDeleting ? 50 : 120);
    
    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, roleIndex, roles]);
  
  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <span className="inline-block mb-3 font-medium bg-accent/10 text-accent py-1 px-3 rounded-full">Bienvenue sur mon portfolio</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Je suis <span className="text-gradient">Lamat Abdellahi</span>
          </h1>
          
          <div className="h-12 mb-6 flex items-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium">
              {text}
              <span className={cn("ml-1 inline-block w-1 h-8 bg-accent", showCursor ? 'opacity-100' : 'opacity-0')}>
                &nbsp;
              </span>
            </h2>
          </div>
          
          <p className="text-lg max-w-2xl mb-8 text-muted-foreground">
            Développeur logiciel passionné, compétent en Python, php, JavaScript et développement full-stack, avec de solides capacités de collaboration et de leadership en équipe.
          </p>
          
          <div className="flex gap-4">
            <Button size="lg" className="rounded-full" asChild>
              <a href="#contact">Contactez-moi</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a href="#projects">Voir mes projets</a>
            </Button>
          </div>
          
          <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-8 w-8 text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
