import React, { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ href, children, className, onClick }: NavLinkProps) => (
  <a 
    href={href}
    onClick={onClick}
    className={cn(
      "relative text-foreground hover:text-accent transition-colors px-3 py-2",
      "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent",
      "after:transition-all after:duration-300 hover:after:w-full",
      className
    )}
  >
    {children}
  </a>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
      // Focus sur le menu mobile pour accessibilité
      mobileMenuRef.current?.focus();
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [mobileMenuOpen]);

  // Fermer le menu mobile en cliquant à l'extérieur
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold tracking-tight">
          <span className="text-gradient">Portfolio</span>
        </a>
        {/* Navigation de bureau */}
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink href="#about">À propos</NavLink>
          <NavLink href="#skills">Compétences</NavLink>
          <NavLink href="#projects">Projets</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <ThemeToggle />
        </nav>
        {/* Bouton menu mobile */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button 
            onClick={toggleMobileMenu} 
            variant="ghost" 
            size="icon" 
            className="ml-2"
            aria-label="Basculer le menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {/* Menu de navigation mobile */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 ease-in-out outline-none",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
      >
        {/* Bouton X en haut à droite */}
        <button
          onClick={closeMobileMenu}
          aria-label="Fermer le menu"
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent/20 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <X className="h-7 w-7" />
        </button>
        <nav className="flex flex-col items-center space-y-8 mt-8">
          <NavLink href="#about" onClick={closeMobileMenu}>À propos</NavLink>
          <NavLink href="#skills" onClick={closeMobileMenu}>Compétences</NavLink>
          <NavLink href="#projects" onClick={closeMobileMenu}>Projets</NavLink>
          <NavLink href="#contact" onClick={closeMobileMenu}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
