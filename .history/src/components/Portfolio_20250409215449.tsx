import React, { useState, createContext, useContext, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Star,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Sun,
  Moon,
  Phone, MapPin,
} from "lucide-react";
import Image from "next/image";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => null, // default empty function
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.className = "dark";
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

type SocialLink = {
  Icon: React.ElementType;
  href: string;
  color: string;
};

// Define the social links array with proper typing
const socialLinks: SocialLink[] = [
  {
    Icon: Github,
    href: "https://github.com/ton-pseudo",
    color: 'text-[#24292f] dark:text-white hover:text-[#24292f]/80 dark:hover:text-white/80',
  },
  {
    Icon: Linkedin,
    href: "https://linkedin.com/in/ton-profil",
    color: "text-[#0077B5] hover:text-[#0077B5]/80",
  },
  {
    Icon: Mail,
    href: "mailto:lamat032025@email.com",
    color: "text-[#EA4335] hover:text-[#EA4335]/80",
  },
  {
    Icon: Phone,
    href: "tel:+22230572816",
    color: "text-[#34A853] hover:text-[#34A853]/80",
  },
  {
    Icon: MapPin,
    href: "https://www.google.com/maps/place/Ton+Adresse",
    color: "text-[#FBBC05] hover:text-[#FBBC05]/80",
  },
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const { theme, setTheme } = useContext(ThemeContext);

  const projects = [
    {
      title: "📱Application mobile d'inscription à deux étapes",
      description:
        "Gestion complète du compte utilisateur avec upload dans un bucket",
      tech: ["React Native", "Appwrite", " TypeScript"],
      stars: 128,
    },
    {
      title: "📦 Gestion de stock local",
      description:
        "Authentification, gestion des rôles, historique des mouvements",
      tech: ["TypeScript", "Next.js", "Neon","Prisma"],
      stars: 256,
    },
    {
      title: "🛒 Projet e-commerce",
      description:
        "Système complet de panier, paiement, admin produits, catégories, images",
      tech: ["Next.js", "Framer Motion", "Stripe", " Prisma"],
      stars: 512,
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-200 
      ${theme === "dark"
          ? "bg-gradient-to-br from-gray-900 to-indigo-950 text-white"
          : "bg-gradient-to-br from-indigo-50 to-rose-50 text-gray-900"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-16">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
            Lamat Abdellahi
          </h1>
          <div className="flex items-center gap-8">
            <nav className="flex gap-4">
              {["about", "projects", "experience"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all capitalize
                    ${activeSection === section
                      ? theme === "dark"
                        ? "bg-gray-800 shadow-lg"
                        : "bg-white shadow-lg"
                      : theme === "dark"
                        ? "hover:bg-gray-800/50"
                        : "hover:bg-white/50"
                    }`}
                >
                  {section}
                </button>
              ))}
            </nav>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-lg transition-colors
                ${theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100"
                }`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </header>

        <main className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <div
              className={`backdrop-blur-lg rounded-2xl p-8 shadow-lg
              ${theme === "dark" ? "bg-gray-800/70" : "bg-white/70"}`}
            >
              <div className="relative mb-8">
                {/* Profile Image */}
                <Image
                  // Local image path (uncomment and add your image to public/images folder)
                  // src="/images/profile.jpg"
                  width={200}
                  height={200}
                  // Temporary placeholder image (replace with your actual image in production)
                  src="/lmt.jpg"
                  alt="Mon profile"
                  // Styling classes:
                  // rounded-2xl -> Adds rounded corners (16px radius)
                  // w-full -> Makes image fill its container width
                  // Optional: add 'object-cover' if you want to maintain aspect ratio
              
                />
                <div
                  className={`absolute -bottom-4 -right-4 p-3 rounded-xl shadow-lg
                  ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
                >
                  <Code className="w-6 h-6 text-indigo-400" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                Senior Software Engineer
              </h2>
              <p
                className={`mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
              >
               Développeur fullstack passionné, spécialisé en Next.js pour le web 
               et React Native pour le mobile. 
              </p>

              <div className="flex gap-4">
                {socialLinks.map((link: SocialLink, index: number) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`p-2 rounded-lg transition-all duration-300 ${theme === "dark"
                        ? "bg-gray-700 hover:bg-gray-600 hover:scale-110"
                        : "bg-gray-100 hover:bg-gray-200 hover:scale-110"
                      }`}
                  >
                    <link.Icon
                      className={`w-5 h-5 transition-colors ${link.color}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-8">
            {activeSection === "about" && (
              <div
                className={`backdrop-blur-lg rounded-2xl p-8 shadow-lg
                ${theme === "dark" ? "bg-gray-800/70" : "bg-white/70"}`}
              >
                <h3 className="text-2xl font-semibold mb-6">À propos de moi</h3>
                <p
                  className={`mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                 J&apos;aime créer des interfaces modernes, 
               performantes et intuitives, aussi bien côté client que serveur. 
               Je suis autonome, rigoureux, et j&apos;adore relever de nouveaux défis techniques.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Compétences techniques", "Compétences non techniques"].map(
                    (category, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl
                      ${theme === "dark" ? "bg-gray-700" : "bg-gray-50"}`}
                      >
                        <h4 className="font-semibold mb-2">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {(category === "Compétences techniques"
                            ? [
                              "⚛️ ▲ React NextJS",
                              "🟦TypeScript",
                              "🎯Appwrite",
                              "🔥Firebase",
                              "🔷Prisma",
                              "🍃MongoDB",
                            ]
                            : [
                              "🛠️ Résolution de problèmes",
                              "🧠 Communication",
                              "🤝 Esprit d'équipe",
                              "🕐 Autonomie & rigueur",
                            ]
                          ).map((skill) => (
                            <span
                              key={skill}
                              className={`px-3 py-1 rounded-lg text-sm
                              ${theme === "dark" ? "bg-gray-600" : "bg-white"}`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {activeSection === "projects" && (
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`backdrop-blur-lg rounded-2xl p-6 shadow-lg
                      ${theme === "dark" ? "bg-gray-800/70" : "bg-white/70"}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <div
                        className={`flex items-center gap-1 px-2 py-1 rounded-lg
                        ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}
                      >
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{project.stars}</span>
                      </div>
                    </div>
                    <p
                      className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                      {project.description}
                    </p>
                    <div className="flex gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-lg text-sm
                            ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === "experience" && (
              <div
                className={`backdrop-blur-lg rounded-2xl p-8 shadow-lg
                ${theme === "dark" ? "bg-gray-800/70" : "bg-white/70"}`}
              >
                <div className="space-y-8">
                  {[
                    {
                      icon: Briefcase,
                      color: "indigo",
                      title: "Technicien Informatique / Web",
                      org: "CDI",
                      period: "Depuis 2014",
                      description:
                        "Création de petits sites vitrines en HTML/CSS/JS,Introduction au développement backend avec PHP & MySQL",
                    },
                    {
                      icon: GraduationCap,
                      color: "rose",
                      title: "Développeur Frontend",
                      org: "Startup Locale",
                      period: " 2018 – 2021",
                      description:
                        "Création d'interfaces utilisateurs avec React & Tailwind CSS",
                    },
                    {
                      icon: Award,
                      color: "amber",
                      title: "Développeur Web Fullstack — Freelance / Indépendant",
                      org: "Local",
                      period: "Depuis 2021 — Aujourd'hui",
                      description:
                        "Création d'applications web & mobiles avec Next.js et React Native",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div
                        className={`bg-${item.color}-100 p-2 rounded-lg h-min
                        ${theme === "dark" ? `bg-${item.color}-900/30` : ""}`}
                      >
                        <item.icon
                          className={`w-6 h-6 text-${item.color}-400`}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p
                          className={
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }
                        >
                          {item.org} • {item.period}
                        </p>
                        <p className="mt-2">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

const PortfolioWithTheme = () => (
  <ThemeProvider>
    <Portfolio />
  </ThemeProvider>
);

export default PortfolioWithTheme;
