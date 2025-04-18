'use client'

import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image } from "@react-pdf/renderer";
import { Github, Linkedin, Mail, Phone, MapPin, Briefcase, GraduationCap, Award } from "lucide-react";

// Styles pour le PDF
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        padding: 30,
    },
    header: {
        flexDirection: "row",
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: "#4F46E5",
        paddingBottom: 20,
    },
    headerText: {
        flex: 1,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1F2937",
        marginBottom: 5,
    },
    title: {
        fontSize: 14,
        color: "#6B7280",
        marginBottom: 10,
    },
    contactInfo: {
        fontSize: 10,
        color: "#6B7280",
        marginBottom: 3,
    },
    photo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#4F46E5",
    },
    section: {
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#4F46E5",
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E7EB",
        paddingBottom: 3,
    },
    item: {
        marginBottom: 10,
    },
    itemHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    itemTitle: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#1F2937",
    },
    itemSubtitle: {
        fontSize: 10,
        color: "#6B7280",
    },
    itemContent: {
        fontSize: 10,
        color: "#4B5563",
        textAlign: "justify",
    },
    skillsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 5,
    },
    skill: {
        fontSize: 9,
        backgroundColor: "#E5E7EB",
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 3,
        marginRight: 5,
        marginBottom: 5,
    },
    twoColumns: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    column: {
        width: "48%",
    },
    socialLink: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },
    socialIcon: {
        marginRight: 5,
        color: "#4F46E5",
    },
    socialText: {
        fontSize: 9,
        color: "#6B7280",
    },
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
        <Page size="A4" style={{ ...styles.page, padding: 30 }}>
            {/* En-tête */}
            <View style={[styles.header, { marginBottom: 16 }]}>
                <View style={styles.headerText}>
                    <Text style={[styles.name, { fontSize: 26 }]}>{cvData.name}</Text>
                    <Text style={[styles.title, { fontSize: 14 }]}>{cvData.title}</Text>
                </View>
                <Image src="/l.jpg" style={{ ...styles.photo, width: 80, height: 80 }} />
            </View>

            {/* À propos */}
            <View style={{ marginBottom: 12 }}>
                <Text style={[styles.contactInfo, { fontSize: 11, lineHeight: 1.5 }]}>{cvData.about}</Text>
            </View>

            {/* Deux colonnes */}
            <View style={styles.twoColumns}>
                {/* Colonne gauche */}
                <View style={styles.column}>
                    {/* Contact */}
                    <View style={[styles.section, { marginBottom: 14 }]}>
                        <Text style={[styles.sectionTitle, { fontSize: 15 }]}>Contact</Text>
                        {cvData.contacts.map((contact, index) => (
                            <View key={index} style={[styles.socialLink, { marginBottom: 4 }]}>
                                <contact.icon style={styles.socialIcon} />
                                <Text style={[styles.socialText, { fontSize: 10 }]}>{contact.text}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Compétences */}
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { fontSize: 15 }]}>Compétences</Text>
                        <Text style={[styles.itemSubtitle, { fontSize: 11 }]}>Techniques:</Text>
                        <View style={styles.skillsContainer}>
                            {cvData.technicalSkills.map((skill, index) => (
                                <Text key={index} style={[styles.skill, { fontSize: 9 }]}>{skill}</Text>
                            ))}
                        </View>
                        <Text style={[styles.itemSubtitle, { fontSize: 11, marginTop: 6 }]}>Soft skills:</Text>
                        <View style={styles.skillsContainer}>
                            {cvData.softSkills.map((skill, index) => (
                                <Text key={index} style={[styles.skill, { fontSize: 9 }]}>{skill}</Text>
                            ))}
                        </View>
                    </View>
                </View>

                {/* Colonne droite */}
                <View style={styles.column}>
                    {/* Expérience */}
                    <View style={[styles.section, { marginBottom: 14 }]}>
                        <Text style={[styles.sectionTitle, { fontSize: 15 }]}>Expérience</Text>
                        {cvData.experience.map((exp, index) => (
                            <View key={index} style={{ marginBottom: 8 }}>
                                <Text style={[styles.itemTitle, { fontSize: 12 }]}>{exp.title}</Text>
                                <Text style={[styles.itemSubtitle, { fontSize: 10 }]}>{exp.company} • {exp.period}</Text>
                                <Text style={[styles.itemContent, { fontSize: 10, lineHeight: 1.4 }]}>{exp.description}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Formation */}
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { fontSize: 15 }]}>Formation</Text>
                        {cvData.education.map((edu, index) => (
                            <View key={index} style={{ marginBottom: 8 }}>
                                <Text style={[styles.itemTitle, { fontSize: 12 }]}>{edu.title}</Text>
                                <Text style={[styles.itemSubtitle, { fontSize: 10 }]}>{edu.institution} • {edu.period}</Text>
                                <Text style={[styles.itemContent, { fontSize: 10, lineHeight: 1.4 }]}>{edu.description}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>

            {/* Projets */}
            <View style={[styles.section, { marginTop: 16 }]}>
                <Text style={[styles.sectionTitle, { fontSize: 15 }]}>Projets</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {cvData.projects.map((project, index) => (
                        <View key={index} style={{ width: '48%', marginBottom: 10 }}>
                            <Text style={[styles.itemTitle, { fontSize: 11 }]}>{project.title}</Text>
                            <Text style={[styles.itemContent, { fontSize: 9 }]}>{project.description}</Text>
                            <View style={styles.skillsContainer}>
                                {project.technologies.map((tech, i) => (
                                    <Text key={i} style={[styles.skill, { fontSize: 8 }]}>{tech}</Text>
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