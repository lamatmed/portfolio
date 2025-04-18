import React from "react";
import { NextPage } from "next";
import Head from "next/head";

const CVPage: NextPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <Head>
                <title>Lamat Abdellahi - CV</title>
                <meta name="description" content="Curriculum Vitae de Lamat Abdellahi" />
            </Head>

            <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Lamat Abdellahi</h1>
                        <p className="text-xl text-indigo-600 dark:text-indigo-400">Senior Software Engineer</p>
                    </div>

                    <div className="flex justify-center mb-8">
                        <a
                            href="/cv.pdf"
                            download="Lamat_Abdellahi_CV.pdf"
                            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium flex items-center gap-2 transition-all hover:scale-105"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Télécharger le CV complet
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2">Expérience Professionnelle</h2>
                            {/* Ajoutez vos expériences ici */}
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2">Formation</h2>
                            {/* Ajoutez vos formations ici */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CVPage;