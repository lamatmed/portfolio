import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">À propos de moi</h2>
      <p className="mb-4">
        Bonjour ! Je suis Lamat Abdellahi, un développeur logiciel passionné originaire de Guerou, en Mauritanie. Je suis titulaire d'un master en systèmes intelligents mobiles et je possède 10 ans d'expérience dans le développement web et mobile.
      </p>
      <p className="mb-4">
        Je me spécialise dans le développement full-stack avec une expertise en Python, PHP, JavaScript et les technologies web modernes. Mes compétences techniques incluent React.js, Next.js, Node.js, React Native et diverses bases de données comme MongoDB, MySQL et Prisma. Je suis également familier avec les bases de l'apprentissage automatique et les outils de visualisation de données comme Tableau.
      </p>
    </section>
  );
};

export default AboutSection;
