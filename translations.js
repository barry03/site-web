const translations = {
    "fr": {
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
        "footer-title": "En savoir plus ? 📚",
        "footer-text": "Découvrez mes réalisations techniques et mes dernières publications.",
        "footer-links-title": "Ressources complémentaires 🔗",
        "footer-link-1": "👉 Code source du projet (GitLab)",
        "footer-link-2": "👉 Mes certifications professionnelles"
    },
    "en": {
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
        "footer-title": "Want to know more? 📚",
        "footer-text": "Discover my technical projects and latest publications.",
        "footer-links-title": "Additional Resources 🔗",
        "footer-link-1": "👉 Project source code (GitLab)",
        "footer-link-2": "👉 My professional certifications"
    }
};

function setLanguage(lang) {
    document.getElementById("page-title").innerText = translations[lang]["title"];
    document.getElementById("page-subtitle").innerText = translations[lang]["subtitle"];
    document.getElementById("context-title").innerText = "🎯 " + translations[lang]["context"];
    document.getElementById("context-text").innerText = translations[lang]["context-text"];
    document.getElementById("context-point-1").innerText = translations[lang]["context-point-1"];
    document.getElementById("context-point-2").innerText = translations[lang]["context-point-2"];
    document.getElementById("context-point-3").innerText = translations[lang]["context-point-3"];
    document.getElementById("context-point-4").innerText = translations[lang]["context-point-4"];
    document.getElementById("dashboards-title").innerText = "📊 " + translations[lang]["dashboards"];
    document.getElementById("dashboards-text").innerText = translations[lang]["dashboards-text"];
    document.getElementById("dashboard-country-title").innerText = translations[lang]["dashboard-country-title"];
    document.getElementById("dashboard-project-title").innerText = translations[lang]["dashboard-project-title"];
    document.getElementById("btn-dashboard").innerText = translations[lang]["btn-dashboard"];
    document.getElementById("ci-cd-title").innerText = "⚙️ " + translations[lang]["ci-cd-title"];
    document.getElementById("ci-cd-text").innerText = translations[lang]["ci-cd-text"];
    document.getElementById("btn-ci-cd").innerText = translations[lang]["btn-ci-cd"];
    document.getElementById("footer-title").innerText = translations[lang]["footer-title"];
    document.getElementById("footer-text").innerText = translations[lang]["footer-text"];
    document.getElementById("footer-links-title").innerText = translations[lang]["footer-links-title"];
    document.getElementById("footer-link-1").innerText = translations[lang]["footer-link-1"];
    document.getElementById("footer-link-2").innerText = translations[lang]["footer-link-2"];
}


      