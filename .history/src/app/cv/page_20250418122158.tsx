'use client'

import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image } from "@react-pdf/renderer";
import { Github, Linkedin, Mail, Phone, MapPin, Briefcase, GraduationCap, Award } from "lucide-react";

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        padding: 20,  // Réduit le padding
    },
    header: {
        flexDirection: "row",
        marginBottom: 10,  // Réduit la marge
        borderBottomWidth: 1,  // Ligne plus fine
        borderBottomColor: "#4F46E5",
        paddingBottom: 10,  // Réduit l'espacement
    },
    name: {
        fontSize: 20,  // Taille réduite
        fontWeight: "bold",
        color: "#1F2937",
        marginBottom: 2,  // Réduit l'espacement
    },
    title: {
        fontSize: 12,  // Taille réduite
        color: "#6B7280",
    },
    contactInfo: {
        fontSize: 9,  // Taille réduite
        color: "#6B7280",
        lineHeight: 1.2,  // Interligne réduit
    },
    photo: {
        width: 60,  // Taille réduite
        height: 60,
        borderRadius: 30,
        borderWidth: 1,  // Bordure plus fine
        borderColor: "#4F46E5",
    },
    section: {
        marginBottom: 10,  // Réduit l'espacement
    },
    sectionTitle: {
        fontSize: 14,  // Taille réduite
        fontWeight: "bold",
        color: "#4F46E5",
        marginBottom: 5,  // Réduit l'espacement
        borderBottomWidth: 0.5,  // Ligne plus fine
        borderBottomColor: "#E5E7EB",
        paddingBottom: 2,  // Réduit l'espacement
    },
    // ... (garder le reste des styles similaires mais avec des valeurs réduites)
});

// Données du CV
const cvData = {
    name: "Lamat Abdellahi",
    title: "Senior Software Engineer",
    about: "Passionné par la création d'applications web et mobiles performantes avec des technologies modernes. Mon approche combine esthétique, fonctionnalité et performance pour des produits digitaux exceptionnels.",
    contacts: [
        { icon: Mail, text: "lamat032025@email.com" },
        { icon: Phone, text: "+222 30 57 28 16" },
        { icon: MapPin, text: "Nouakchott, Mauritanie" },
        { icon: Github, text: "github.com/ton-pseudo" },
        { icon: Linkedin, text: "linkedin.com/in/ton-profil" },
    ],
    technicalSkills: [
        "React & NextJS",
        "TypeScript",
        "Appwrite",
        "Firebase",
        "Prisma",
        "MongoDB",
        "Node.js",
        "Tailwind CSS",
    ],
    softSkills: [
        "Résolution de problèmes",
        "Communication",
        "Esprit d'équipe",
        "Autonomie & rigueur",
        "Adaptabilité",
        "Gestion du temps",
    ],
    experience: [
        {
            title: "Développeur Web Fullstack — Freelance",
            company: "Indépendant",
            period: "Depuis 2021",
            description: "Création d'applications web & mobiles avec Next.js et React Native",
            icon: Award,
        },
        {
            title: "Développeur Frontend",
            company: "Startup Locale",
            period: "2018 – 2021",
            description: "Création d'interfaces utilisateurs avec React & Tailwind CSS",
            icon: Briefcase,
        },
        {
            title: "Technicien Informatique / Web",
            company: "CDI",
            period: "Depuis 2014",
            description: "Création de sites vitrines en HTML/CSS/JS, développement backend avec PHP & MySQL",
            icon: Briefcase,
        },
    ],
    education: [
        {
            title: "Master en Systèmes Intelligents Mobiles",
            institution: "Université de Batna, Algérie",
            period: "2012 – 2014",
            description: "Approfondissement en IA mobile, systèmes embarqués intelligents, cloud computing et applications mobiles avancées.",
            icon: GraduationCap,
        },
        {
            title: "Licence en Informatique",
            institution: "Université de Batna, Algérie",
            period: "2009 – 2012",
            description: "Apprentissage des bases du développement logiciel, bases de données et systèmes.",
            icon: GraduationCap,
        },
        {
            title: "Baccalauréat Scientifique C",
            institution: "Lycée Arabe, Mauritanie",
            period: "2005 – 2008",
            description: "Formation scientifique de base avec spécialisation en mathématiques et physique.",
            icon: GraduationCap,
        },
    ],
    projects: [
        {
            title: "Application mobile d'inscription à deux étapes",
            description: "Gestion complète du compte utilisateur avec upload dans un bucket",
            technologies: ["React Native", "Appwrite", "TypeScript"],
        },
        {
            title: "Gestion de stock local",
            description: "Authentification, gestion des rôles, historique des mouvements",
            technologies: ["TypeScript", "Next.js", "Neon", "Prisma"],
        },
        {
            title: "Plateforme e-commerce",
            description: "Système complet de panier, paiement, admin produits, catégories, images",
            technologies: ["Next.js", "Framer Motion", "Stripe", "Prisma"],
        },
    ],
};

const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* En-tête compact */}
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.name}>{cvData.name}</Text>
                    <Text style={styles.title}>{cvData.title}</Text>
                </View>
                <Image src="/l.jpg" style={styles.photo} />
            </View>

            {/* Section À propos réduite */}
            <View style={[styles.section, { marginBottom: 10 }]}>
                <Text style={styles.contactInfo}>{cvData.about}</Text>
            </View>

            {/* Colonnes principales optimisées */}
            <View style={styles.twoColumns}>
                {/* Colonne gauche compacte */}
                <View style={styles.column}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Contact</Text>
                        {cvData.contacts.map((contact, index) => (
                            <View key={index} style={[styles.socialLink, { marginBottom: 3 }]}>
                                <contact.icon style={styles.socialIcon} />
                                <Text style={styles.socialText}>{contact.text}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Compétences</Text>
                        <Text style={[styles.itemSubtitle, { marginBottom: 5 }]}>Techniques:</Text>
                        <View style={styles.skillsContainer}>
                            {cvData.technicalSkills.map((skill, index) => (
                                <Text key={index} style={[styles.skill, { marginBottom: 3 }]}>{skill}</Text>
                            ))}
                        </View>

                        <Text style={[styles.itemSubtitle, { marginTop: 5, marginBottom: 5 }]}>Soft skills:</Text>
                        <View style={styles.skillsContainer}>
                            {cvData.softSkills.map((skill, index) => (
                                <Text key={index} style={[styles.skill, { marginBottom: 3 }]}>{skill}</Text>
                            ))}
                        </View>
                    </View>
                </View>

                {/* Colonne droite optimisée */}
                <View style={styles.column}>
                    {/* Expérience professionnelle compacte */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Expérience</Text>
                        {cvData.experience.map((exp, index) => (
                            <View key={index} style={[styles.item, { marginBottom: 8 }]}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.itemTitle}>{exp.title}</Text>
                                    <Text style={styles.itemSubtitle}>{exp.period}</Text>
                                </View>
                                <Text style={[styles.itemSubtitle, { fontSize: 9 }]}>{exp.company}</Text>
                                <Text style={[styles.itemContent, { fontSize: 9 }]}>{exp.description}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Formation compacte */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Formation</Text>
                        {cvData.education.map((edu, index) => (
                            <View key={index} style={[styles.item, { marginBottom: 8 }]}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.itemTitle}>{edu.title}</Text>
                                    <Text style={styles.itemSubtitle}>{edu.period}</Text>
                                </View>
                                <Text style={[styles.itemSubtitle, { fontSize: 9 }]}>{edu.institution}</Text>
                                <Text style={[styles.itemContent, { fontSize: 9 }]}>{edu.description}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>

            {/* Projets en bas de page */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Projets</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {cvData.projects.map((project, index) => (
                        <View key={index} style={{ width: '48%', marginBottom: 10 }}>
                            <Text style={[styles.itemTitle, { fontSize: 10 }]}>{project.title}</Text>
                            <Text style={[styles.itemContent, { fontSize: 8 }]}>{project.description}</Text>
                            <View style={[styles.skillsContainer, { marginTop: 3 }]}>
                                {project.technologies.map((tech, i) => (
                                    <Text key={i} style={[styles.skill, { fontSize: 7 }]}>{tech}</Text>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </Page>
    </Document>
);

// Composant de la page CV
const CVPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Mon Curriculum Vitae</h1>

                <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                    <p className="text-lg text-center text-gray-600 mb-6">
                        Téléchargez mon CV complet au format PDF
                    </p>

                    <div className="flex justify-center">
                        <PDFDownloadLink
                            document={<MyDocument />}
                            fileName="Lamat_Abdellahi_CV.pdf"
                            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
                        >
                            Télécharger le CV
                        </PDFDownloadLink>
                    </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                    <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Aperçu du CV</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                        <div>
                            <h3 className="font-bold mb-2 text-indigo-600">Informations personnelles</h3>
                            <ul className="space-y-2">
                                <li><span className="font-medium">Nom:</span> {cvData.name}</li>
                                <li><span className="font-medium">Titre:</span> {cvData.title}</li>
                                <li><span className="font-medium">Email:</span> {cvData.contacts[0].text}</li>
                                <li><span className="font-medium">Téléphone:</span> {cvData.contacts[1].text}</li>
                                <li><span className="font-medium">Localisation:</span> {cvData.contacts[2].text}</li>
                            </ul>

                            <h3 className="font-bold mt-4 mb-2 text-indigo-600">Compétences clés</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                {cvData.technicalSkills.slice(0, 5).map((skill, index) => (
                                    <li key={index}>{skill.replace(/^[^\s]+\s/, '')}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2 text-indigo-600">Expérience récente</h3>
                            <ul className="space-y-3">
                                {cvData.experience.slice(0, 2).map((exp, index) => (
                                    <li key={index}>
                                        <p className="font-medium">{exp.title}</p>
                                        <p className="text-sm text-gray-600">{exp.company} • {exp.period}</p>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="font-bold mt-4 mb-2 text-indigo-600">Formation</h3>
                            <ul className="space-y-3">
                                {cvData.education.slice(0, 2).map((edu, index) => (
                                    <li key={index}>
                                        <p className="font-medium">{edu.title}</p>
                                        <p className="text-sm text-gray-600">{edu.institution} • {edu.period}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CVPage;