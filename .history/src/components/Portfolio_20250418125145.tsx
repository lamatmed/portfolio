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

  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => null,
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
      title: "Application mobile d'inscription à deux étapes",
      emoji: "📱",
      description:
        "Gestion complète du compte utilisateur avec upload dans un bucket",
      tech: ["React Native", "Appwrite", "TypeScript"],
      stars: 128,
    },
    {
      title: "Gestion de stock local",
      emoji: "📦",
      description:
        "Authentification, gestion des rôles, historique des mouvements",
      tech: ["TypeScript", "Next.js", "Neon", "Prisma"],
      stars: 256,
    },
    {
      title: "Plateforme e-commerce",
      emoji: "🛒",
      description:
        "Système complet de panier, paiement, admin produits, catégories, images",
      tech: ["Next.js", "Framer Motion", "Stripe", "Prisma"],
      stars: 512,
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 
      ${theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500 mb-2">
              Lamat Abdellahi
            </h1>
            <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Senior Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <nav className="flex gap-1 p-1 rounded-xl backdrop-blur-sm" style={{
              background: theme === "dark" ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.5)'
            }}>

              {["about", "projects", "experience", "CV"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all capitalize text-sm font-medium
                      ${activeSection === section
                      ? theme === "dark"
                        ? "bg-gray-700 text-white shadow"
                        : "bg-white text-gray-900 shadow"
                      : theme === "dark"
                        ? "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                        : "text-gray-600 hover:bg-white/70 hover:text-gray-900"
                    }`}
                >
                  {section === "cv" ? "Télécharger CV" : section}
                </button>
              ))}
            </nav>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2.5 rounded-xl transition-all hover:scale-105
                ${theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-600 text-gray-100"
                  : "bg-white hover:bg-gray-100 text-gray-900"
                } shadow`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div
              className={`rounded-3xl p-8 shadow-xl border border-opacity-10 transition-all hover:shadow-2xl
              ${theme === "dark"
                  ? "bg-gray-800/70 border-gray-600"
                  : "bg-white/80 border-gray-300"
                }`}
            >
              <div className="relative mb-8 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-2xl opacity-20 group-hover:opacity-30 transition duration-500 blur-sm"></div>
                <Image
                  width={240}
                  height={240}
                  src="/l.jpg"
                  alt="Mon profile"
                  className="relative rounded-2xl object-cover w-full h-auto aspect-square"
                />
                <div
                  className={`absolute -bottom-4 -right-4 p-3 rounded-xl shadow-lg transition-transform hover:scale-110
                  ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
                >
                  <Code className="w-6 h-6 text-indigo-500" />
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-3">
                Développeur Fullstack
              </h2>
              <p
                className={`mb-6 text-lg leading-relaxed
                ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
              >
                Passionné par la création d&lsquo;applications web et mobiles performantes avec des technologies modernes.
              </p>

              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((link: SocialLink, index: number) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 shadow
                      ${theme === "dark"
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-gray-100 hover:bg-gray-200"
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

          <div className="lg:col-span-8 space-y-8">

            {activeSection === "about" && (
              <div
                className={`rounded-3xl p-8 shadow-xl border border-opacity-10
                ${theme === "dark"
                    ? "bg-gray-800/70 border-gray-600"
                    : "bg-white/80 border-gray-300"
                  }`}
              >
                <h3 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                  À propos de moi
                </h3>
                <p
                  className={`mb-8 text-lg leading-relaxed
                  ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                >
                  Je crée des interfaces modernes et performantes avec une attention particulière
                  à l&lsquo;expérience utilisateur. Mon approche combine esthétique, fonctionnalité
                  et performance pour des produits digitaux exceptionnels.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["Compétences techniques", "Soft skills"].map(
                    (category, index) => (
                      <div
                        key={index}
                        className={`p-6 rounded-2xl transition-all hover:shadow-lg
                        ${theme === "dark" ? "bg-gray-700/50 hover:bg-gray-700" : "bg-gray-50 hover:bg-white"}`}
                      >
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                          {category === "Compétences techniques" ? (
                            <Code className="w-5 h-5 text-indigo-500" />
                          ) : (
                            <Award className="w-5 h-5 text-rose-500" />
                          )}
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {(category === "Compétences techniques"
                            ? [
                              "⚛️ ▲ React NextJS",
                              "🟦 TypeScript",
                              "🎯 Appwrite",
                              "🔥 Firebase",
                              "🔷 Prisma",
                              "🍃 MongoDB",
                              "🟩 Node.js",
                              "🎨 Tailwind CSS",
                            ]
                            : [
                              "🛠️ Résolution de problèmes",
                              "🧠 Communication",
                              "🤝 Esprit d'équipe",
                              "📋 Autonomie & rigueur",
                              "🔄 Adaptabilité",
                              "🕐 Gestion du temps",
                            ]
                          ).map((skill) => (
                            <span
                              key={skill}
                              className={`px-3 py-2 rounded-xl text-sm font-medium transition-all
                                ${theme === "dark"
                                  ? "bg-gray-600 hover:bg-gray-500"
                                  : "bg-white hover:bg-gray-100"
                                } shadow`}
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
                    className={`rounded-3xl p-8 shadow-xl border border-opacity-10 transition-all hover:shadow-2xl
                      ${theme === "dark"
                        ? "bg-gray-800/70 border-gray-600 hover:bg-gray-800/80"
                        : "bg-white/80 border-gray-300 hover:bg-white"
                      }`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl mt-1">{project.emoji}</span>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                      </div>
                      <div
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-xl
                        ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}
                      >
                        <Star className="w-4 h-4 text-amber-400" />
                        <span className="text-sm font-medium">{project.stars}</span>
                      </div>
                    </div>
                    <p
                      className={`mb-6 text-gray-500 dark:text-gray-400`}
                    >
                      {project.description}
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-2 rounded-xl text-sm font-medium
                            ${theme === "dark"
                              ? "bg-gray-700 text-gray-200"
                              : "bg-gray-100 text-gray-800"
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
                className={`rounded-3xl p-8 shadow-xl border border-opacity-10
                ${theme === "dark"
                    ? "bg-gray-800/70 border-gray-600"
                    : "bg-white/80 border-gray-300"
                  }`}
              >
                <h3 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                  Parcours Professionnel
                </h3>

                <div className="space-y-8">
                  {[
                    {
                      icon: GraduationCap,
                      color: "violet",
                      title: "Baccalauréat Scientifique C",
                      org: "Lycée Arabe, Mauritanie",
                      period: "2005 – 2008",
                      description:
                        "Formation scientifique de base avec spécialisation en mathématiques et physique.",
                    },
                    {
                      icon: GraduationCap,
                      color: "violet",
                      title: "Licence en Informatique",
                      org: "Université de Batna, Algérie",
                      period: "2009 – 2012",
                      description:
                        "Apprentissage des bases du développement logiciel, bases de données et systèmes.",
                    },
                    {
                      icon: GraduationCap,
                      color: "violet",
                      title: "Master en Systèmes Intelligents Mobiles",
                      org: "Université de Batna, Algérie",
                      period: "2012 – 2014",
                      description:
                        "Approfondissement en IA mobile, systèmes embarqués intelligents, cloud computing et applications mobiles avancées."
                    },
                    {
                      icon: Briefcase,
                      color: "indigo",
                      title: "Technicien Informatique / Web",
                      org: "CDI",
                      period: "Depuis 2014",
                      description:
                        "Création de sites vitrines en HTML/CSS/JS, développement backend avec PHP & MySQL",
                    },
                    {
                      icon: Briefcase,
                      color: "rose",
                      title: "Développeur Frontend",
                      org: "Startup Locale",
                      period: "2018 – 2021",
                      description:
                        "Création d'interfaces utilisateurs avec React & Tailwind CSS",
                    },
                    {
                      icon: Award,
                      color: "amber",
                      title: "Développeur Web Fullstack — Freelance",
                      org: "Indépendant",
                      period: "Depuis 2021",
                      description:
                        "Création d'applications web & mobiles avec Next.js et React Native",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-6 group">
                      <div
                        className={`flex-shrink-0 p-3 rounded-xl h-min transition-all group-hover:scale-110
                        ${theme === "dark"
                            ? `bg-${item.color}-900/30 text-${item.color}-400`
                            : `bg-${item.color}-100 text-${item.color}-600`
                          }`}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div
                        className={`pb-6 flex-grow ${index !== 5 ? "border-b" : ""}
                        ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}
                      >
                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                        <p
                          className={`mb-3 font-medium
                          ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                        >
                          {item.org} • {item.period}
                        </p>
                        <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeSection === "cv" && (
              <div
                className={`rounded-3xl p-8 shadow-xl border border-opacity-10
    ${theme === "dark"
                    ? "bg-gray-800/70 border-gray-600"
                    : "bg-white/80 border-gray-300"
                  }`}
              >
                <h3 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                  Mon Curriculum Vitae
                </h3>

                <div className="flex flex-col items-center justify-center py-12">
                  <div className={`mb-8 p-6 rounded-2xl ${theme === "dark" ? "bg-gray-700/50" : "bg-gray-50"}`}>
                    <p className={`text-lg text-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"} mb-6`}>
                      Téléchargez mon CV complet au format PDF
                    </p>

                    <div className="flex justify-center">
                      <a
                        href="/cv.pdf"
                        download="Lamat_Abdellahi_CV.pdf"
                        className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all hover:scale-105
              ${theme === "dark"
                            ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                            : "bg-indigo-500 hover:bg-indigo-600 text-white"
                          }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Télécharger le CV
                      </a>
                    </div>
                  </div>

                  <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-gray-700/50" : "bg-gray-50"}`}>
                    <h4 className="text-xl font-bold mb-4 text-center">Informations du CV</h4>
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                      <div>
                        <h5 className="font-bold mb-2">Compétences clés</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Développement Fullstack (React, Next.js, Node.js)</li>
                          <li>Applications mobiles avec React Native</li>
                          <li>Bases de données (SQL, NoSQL)</li>
                          <li>Architecture cloud et serverless</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold mb-2">Certifications</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Certification AWS Cloud Practitioner</li>
                          <li>React Advanced Concepts</li>
                          <li>TypeScript Mastery</li>
                        </ul>
                      </div>
                    </div>
                  </div>
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