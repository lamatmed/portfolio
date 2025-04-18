import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 30,
    },
    section: {
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 5,
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
    },
});

const CVPDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>Lamat Abdellahi</Text>
                <Text style={styles.subtitle}>Senior Software Engineer</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Expérience Professionnelle</Text>
                <Text style={styles.text}>- Développeur Web Fullstack — Freelance (Depuis 2021)</Text>
                <Text style={styles.text}>- Développeur Frontend — Startup Locale (2018 – 2021)</Text>
                <Text style={styles.text}>- Technicien Informatique / Web — CDI (Depuis 2014)</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Formation</Text>
                <Text style={styles.text}>- Master en Systèmes Intelligents Mobiles — Université de Batna (2012 – 2014)</Text>
                <Text style={styles.text}>- Licence en Informatique — Université de Batna (2009 – 2012)</Text>
                <Text style={styles.text}>- Baccalauréat Scientifique C — Lycée Arabe, Mauritanie (2005 – 2008)</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Compétences</Text>
                <Text style={styles.text}>- React, NextJS, TypeScript</Text>
                <Text style={styles.text}>- Appwrite, Firebase, Prisma</Text>
                <Text style={styles.text}>- MongoDB, Node.js, Tailwind CSS</Text>
            </View>
        </Page>
    </Document>
);

export const PDFDownloadButton = () => (
    <PDFDownloadLink document={<CVPDF />} fileName="cv-lamat-abdellahi.pdf">
        {({ loading }) => (
            <button disabled={loading}>
                {loading ? 'Chargement...' : 'Télécharger CV'}
            </button>
        )}
    </PDFDownloadLink>
);

export default CVPDF;