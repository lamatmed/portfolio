'use client'

import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image } from "@react-pdf/renderer";
import { Github, Linkedin, Mail, Phone, MapPin, Briefcase, GraduationCap, Award } from "lucide-react";

// Styles optimisés pour une seule page
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        padding: 20, // Réduit le padding
        fontSize: 9, // Taille de police globale réduite
    },
    header: {
        flexDirection: "row",
        marginBottom: 15, // Réduit la marge
        borderBottomWidth: 1, // Bordure plus fine
        borderBottomColor: "#4F46E5",
        paddingBottom: 15,
    },
    headerText: {
        flex: 1,
    },
    name: {
        fontSize: 20, // Taille réduite
        fontWeight: "bold",
        color: "#1F2937",
        marginBottom: 3, // Marge réduite
    },
    title: {
        fontSize: 12, // Taille réduite
        color: "#6B7280",
        marginBottom: 8,
    },
    contactInfo: {
        fontSize: 8, // Taille réduite
        color: "#6B7280",
        marginBottom: 2,
        lineHeight: 1.2, // Interligne réduit
    },
    photo: {
        width: 60, // Taille réduite
        height: 60,
        borderRadius: 30,
        borderWidth: 1, // Bordure plus fine
        borderColor: "#4F46E5",
    },
    section: {
        marginBottom: 10, // Marge réduite
    },
    sectionTitle: {
        fontSize: 12, // Taille réduite
        fontWeight: "bold",
        color: "#4F46E5",
        marginBottom: 5, // Marge réduite
        borderBottomWidth: 0.5, // Bordure plus fine
        borderBottomColor: "#E5E7EB",
        paddingBottom: 2,
    },
    item: {
        marginBottom: 6, // Marge réduite
    },
    itemHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 3, // Marge réduite
    },
    itemTitle: {
        fontSize: 10, // Taille réduite
        fontWeight: "bold",
        color: "#1F2937",
    },
    itemSubtitle: {
        fontSize: 8, // Taille réduite
        color: "#6B7280",
    },
    itemContent: {
        fontSize: 8, // Taille réduite
        color: "#4B5563",
        textAlign: "justify",
        lineHeight: 1.2, // Interligne réduit
    },
    skillsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 3, // Marge réduite
    },
    skill: {
        fontSize: 7, // Taille réduite
        backgroundColor: "#E5E7EB",
        borderRadius: 8,
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginRight: 4,
        marginBottom: 4,
    },
    twoColumns: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8, // Marge réduite
    },
    column: {
        width: "48%",
    },
    socialLink: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 2, // Marge réduite
    },
    socialIcon: {
        marginRight: 4,
        color: "#4F46E5",
    },
    socialText: {
        fontSize: 7, // Taille réduite
        color: "#6B7280",
    },
    projectsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    projectItem: {
        width: '48%',
        marginBottom: 6, // Marge réduite
    }
});

// Données du CV (inchangées)
const cvData = {
    // ... (garder les mêmes données)
};

const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* En-tête compact */}
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.name}>{cvData.name}</Text>
                    <Text style={styles.title}>{cvData.title}</Text>
                    <Text style={[styles.contactInfo, { marginTop: 5 }]}>{cvData.about}</Text>
                </View>
                <Image src="/l.jpg" style={styles.photo} />
            </View>

            {/* Colonnes principales optimisées */}
            <View style={styles.twoColumns}>
                {/* Colonne gauche compacte */}
                <View style={styles.column}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Contact</Text>
                        {cvData.contacts.map((contact, index) => (
                            <View key={index} style={styles.socialLink}>
                                <contact.icon size={10} style={styles.socialIcon} />
                                <Text style={styles.socialText}>{contact.text}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Compétences Techniques</Text>
                        <View style={styles.skillsContainer}>
                            {cvData.technicalSkills.map((skill, index) => (
                                <Text key={index} style={styles.skill}>{skill}</Text>
                            ))}
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Soft Skills</Text>
                        <View style={styles.skillsContainer}>
                            {cvData.softSkills.map((skill, index) => (
                                <Text key={index} style={styles.skill}>{skill}</Text>
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
                            <View key={index} style={styles.item}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.itemTitle}>{exp.title}</Text>
                                    <Text style={styles.itemSubtitle}>{exp.period}</Text>
                                </View>
                                <Text style={styles.itemSubtitle}>{exp.company}</Text>
                                <Text style={styles.itemContent}>{exp.description}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Formation compacte */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Formation</Text>
                        {cvData.education.map((edu, index) => (
                            <View key={index} style={styles.item}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.itemTitle}>{edu.title}</Text>
                                    <Text style={styles.itemSubtitle}>{edu.period}</Text>
                                </View>
                                <Text style={styles.itemSubtitle}>{edu.institution}</Text>
                                <Text style={styles.itemContent}>{edu.description}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>

            {/* Projets en bas de page - version compacte */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Projets</Text>
                <View style={styles.projectsContainer}>
                    {cvData.projects.map((project, index) => (
                        <View key={index} style={styles.projectItem}>
                            <Text style={styles.itemTitle}>{project.title}</Text>
                            <Text style={styles.itemContent}>{project.description}</Text>
                            <View style={styles.skillsContainer}>
                                {project.technologies.map((tech, i) => (
                                    <Text key={i} style={styles.skill}>{tech}</Text>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </Page>
    </Document>
);

// Le reste du composant CVPage reste inchangé
const CVPage = () => {
    return (
        // ... (garder le même code)
    );
};

export default CVPage;