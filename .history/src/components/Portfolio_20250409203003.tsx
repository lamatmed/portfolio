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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Icon,
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
    href: "https://github.com",
    color: 'text-[#24292f] dark:text-white hover:text-[#24292f]/80 dark:hover:text-white/80' // Updated GitHub colors
  },
  {
    Icon: Linkedin,
    href: "https://linkedin.com",
    color: "text-[#0077B5] hover:text-[#0077B5]/80",
  },
  {
    Icon: Mail,
    href: "mailto:example@email.com",
    color: "text-[#EA4335] hover:text-[#EA4335]/80",
  },
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const { theme, setTheme } = useContext(ThemeContext);

  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Built a real-time analytics platform using Next.js, TensorFlow.js",
      tech: ["React", "TensorFlow.js", "WebGL"],
      stars: 128,
    },
    {
      title: "Quantum Computing Simulator",
      description:
        "Created a quantum circuit simulator with visual programming",
      tech: ["TypeScript", "Three.js", "WebAssembly"],
      stars: 256,
    },
    {
      title: "Neural Interface Design System",
      description:
        "Developed a comprehensive UI kit for brain-computer interfaces",
      tech: ["React", "Framer Motion", "WebXR"],
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
      <div className="max-w-6xl mx-auto p-8">
        <header className="flex justify-between items-center mb-16">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
            Jane Cooper
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

        // ... partie inchangée au-dessus

<main className="grid grid-cols-1 md:grid-cols-12 gap-8">
  <div className="md:col-span-4">
    <div
      className={`backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-lg
        ${theme === "dark" ? "bg-gray-800/70" : "bg-white/70"}`}
    >
      <div className="relative mb-8 flex justify-center">
        <Image
          className="rounded-2xl w-40 h-40 object-cover" // taille réduite + centrée
          src="/lmt.jpg"
          width={160}
          height={160}
          alt="Professional headshot of Jane Cooper"
        />
        <div
          className={`absolute -bottom-4 right-4 md:-right-4 p-3 rounded-xl shadow-lg
            ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
        >
          <Code className="w-6 h-6 text-indigo-400" />
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center md:text-left">
        Senior Software Engineer
      </h2>
      <p className={`text-sm mb-6 text-center md:text-left 
        ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
        Crafting innovative solutions at the intersection of AI and human experience.
      </p>

      <div className="flex justify-center md:justify-start gap-4 flex-wrap">
        {socialLinks.map((link: SocialLink, index: number) => (
          <a
            key={index}
            href={link.href}
            className={`p-2 rounded-lg transition-all duration-300 ${theme === "dark"
              ? "bg-gray-700 hover:bg-gray-600 hover:scale-110"
              : "bg-gray-100 hover:bg-gray-200 hover:scale-110"
            }`}
          >
            <link.Icon className={`w-5 h-5 ${link.color}`} />
          </a>
        ))}
      </div>
    </div>
  </div>

  <div className="md:col-span-8">
    {/* Le reste reste similaire mais peut être ajusté : */}
    {/* Ex: text-sm pour descriptions, gap-4 au lieu de 8 sur mobile, etc. */}
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
