const translations = {
    "fr": {
        "nav-about": "À propos",
        "nav-skills": "Compétences & Stack",
        "nav-projects": "Projets",
        "nav-contact": "Contactez-moi",
        "nav-blog": "Blog & Veille",
        "nav-back": "← Retour",

        // 📌 HERO Section
        "hero-title": "Djouldé Barry",
        "hero-subtitle": "Data Engineer | Spécialiste ETL & Big Data",
        "hero-description": "Passionné par la gestion et la valorisation des données, je conçois des solutions robustes pour l'ingestion, la transformation et l'analyse de grands volumes de données. Mon expertise couvre l'ETL, le Big Data et le Cloud Computing.",
        "hero-btn-cv": "📄 Voir mon CV",
        "hero-btn-explore": "Pourquoi moi ? Découvrez-le !",

        // 📌 COMPÉTENCES Section
        "competences-title": "Compétences & Stack Technique",
        "competences-list-title": "Mes Compétences",
        "competences-skill-1": "📊 Modélisation & Data Processing",
        "competences-skill-2": "🔄 Développement de pipelines ETL",
        "competences-skill-3": "📡 Big Data & Cloud (AWS, GCP)",
        "competences-skill-4": "⚙️ Automatisation & CI/CD",
        "competences-skill-5": "📈 Data Visualisation (Power BI)",
        "competences-stack-title": "Stack Technique",
        
        // cas d'etude
        "title": "Cas d'étude : Analyse des téléchargements PyPI (GCP & Streamlit)",
        "subtitle": "Découvrez en détails ma méthodologie pour la création d'un pipeline de données scalable.",
        "context": "Contexte & Objectifs",
        "context-text": "Analyse des données publiques issues de PyPI sur les téléchargements de packages Python, avec un pipeline automatisé sur GCP et Streamlit.",
        "context-point-1": "Collecte automatique via Composer (Airflow)",
        "context-point-2": "Traitement SQL avec BigQuery",
        "context-point-3": "Dashboard interactif Streamlit",
        "context-point-4": "Automatisation CI/CD via GitLab et Docker",
        "dashboards": "Dashboards & Visualisations",
        "dashboards-text": "Quelques exemples concrets des dashboards interactifs réalisés :",
        "dashboard-country-title": "Téléchargements par Pays",
        "dashboard-project-title": "Top Projets PyPI téléchargés",
        "btn-dashboard": "Voir le Dashboard interactif",
        "ci-cd-title": "Méthodologie & CI/CD",
        "ci-cd-text": "Workflow entièrement automatisé et géré via GitLab CI/CD et Docker, avec séparation nette des environnements dev et prod.",
        "btn-ci-cd": "Voir les logs CI/CD",

        // blog
        "blog-title": "📖 Blog Technique",
        "blog-description": "Retrouvez ici mes articles techniques et retours d'expérience.",
        "external-articles-title": "🌍 Mes articles externes",
        "btn-devto": "🔗 Voir plus sur Dev.to",
        "btn-medium": "🔗 Voir plus sur Medium",
        "veille-title": "📡 Veille Technologique",
        "veille-description": "Mes sources préférées pour rester à jour sur l'écosystème tech et data."
    },
    "en": {
        "nav-about": "About",
        "nav-skills": "Skills & Stack",
        "nav-projects": "Projects",
        "nav-contact": "Contact Me",
        "nav-blog": "Blog & Insights",
        "nav-back": "← Back",

        // 📌 HERO Section
        "hero-title": "Djouldé Barry",
        "hero-subtitle": "Data Engineer | ETL & Big Data Specialist",
        "hero-description": "Passionate about data management and enhancement, I design robust solutions for ingestion, transformation, and analysis of large volumes of data. My expertise covers ETL, Big Data, and Cloud Computing.",
        "hero-btn-cv": "📄 View my CV",
        "hero-btn-explore": "Why me? Find out!",

        // 📌 COMPETENCES Section
        "competences-title": "Skills & Technical Stack",
        "competences-list-title": "My Skills",
        "competences-skill-1": "📊 Modeling & Data Processing",
        "competences-skill-2": "🔄 ETL Pipeline Development",
        "competences-skill-3": "📡 Big Data & Cloud (AWS, GCP)",
        "competences-skill-4": "⚙️ Automation & CI/CD",
        "competences-skill-5": "📈 Data Visualization (Power BI)",
        "competences-stack-title": "Technical Stack",

        // use case
        "title": "Case Study: Analysis of PyPI Downloads (GCP & Streamlit)",
        "subtitle": "Discover in detail my methodology for creating a scalable data pipeline.",
        "context": "Context & Objectives",
        "context-text": "Analysis of public PyPI data on Python package downloads, with an automated pipeline on GCP and Streamlit.",
        "context-point-1": "Automatic data collection via Composer (Airflow)",
        "context-point-2": "SQL processing with BigQuery",
        "context-point-3": "Interactive dashboard with Streamlit",
        "context-point-4": "CI/CD automation via GitLab and Docker",
        "dashboards": "Dashboards & Visualizations",
        "dashboards-text": "Some concrete examples of interactive dashboards created:",
        "dashboard-country-title": "Downloads by Country",
        "dashboard-project-title": "Most Downloaded PyPI Projects",
        "btn-dashboard": "View Interactive Dashboard",
        "ci-cd-title": "Methodology & CI/CD",
        "ci-cd-text": "Fully automated workflow managed via GitLab CI/CD and Docker, with a clear separation between dev and prod environments.",
        "btn-ci-cd": "View CI/CD Logs",

        // blog
        "blog-title": "📖 Technical Blog",
        "blog-description": "Find my technical articles and experience sharing here.",
        "external-articles-title": "🌍 My External Articles",
        "btn-devto": "🔗 See more on Dev.to",
        "btn-medium": "🔗 See more on Medium",
        "veille-title": "📡 Tech Watch",
        "veille-description": "My favorite sources to stay updated on the tech and data ecosystem."

    }
};

// ✅ Fonction pour appliquer les traductions
function applyTranslations(lang) {
    console.log("🌍 Application de la langue :", lang);

    // Liste des ID à traduire
    const elementsToTranslate = [
        "nav-about", "nav-skills", "nav-projects", "nav-contact", 
        "nav-blog", "nav-back"
    ];

    elementsToTranslate.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = translations[lang][id];
        }
    });
}

// ✅ Met à jour la langue et l'enregistre dans localStorage
function setLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang);
    applyTranslations(lang);
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Langue enregistrée :", localStorage.getItem("selectedLanguage"));

    const frButton = document.getElementById("fr-btn");
    const enButton = document.getElementById("en-btn");

    // Vérifier si on est sur index.html avant d'ajouter les eventListeners
    if (frButton && enButton) {
        frButton.addEventListener("click", () => setLanguage("fr"));
        enButton.addEventListener("click", () => setLanguage("en"));
    }

    // 🚀 Correction : Forcer "fr" si c'est la première visite
    let savedLanguage = localStorage.getItem("selectedLanguage");

    if (!savedLanguage) {  
        savedLanguage = "fr";  // Par défaut FR la première fois
        localStorage.setItem("selectedLanguage", "fr");
    }

    applyTranslations(savedLanguage);
});




