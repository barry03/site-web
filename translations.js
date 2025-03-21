const translations = {
    "fr": {
        "nav-about": "À propos",
        "nav-skills": "Compétences & Stack",
        "nav-projects": "Projets",
        "nav-contact": "Contactez-moi",
        "nav-blog": "Blog & Veille",
        "nav-back": "← Retour"
    },
    "en": {
        "nav-about": "About",
        "nav-skills": "Skills & Stack",
        "nav-projects": "Projects",
        "nav-contact": "Contact Me",
        "nav-blog": "Blog & Insights",
        "nav-back": "← Back"
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

// ✅ Fonction pour définir la langue et sauvegarder le choix
function setLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang); // Sauvegarde la langue choisie
    applyTranslations(lang);
}

// ✅ Écouteur d'événements sur les boutons de langue
document.addEventListener("DOMContentLoaded", function () {
    console.log("🌍 Langue enregistrée :", localStorage.getItem("selectedLanguage"));

    // Vérifie et attache les événements aux boutons
    const frButton = document.getElementById("fr-btn");
    const enButton = document.getElementById("en-btn");

    if (frButton) {
        frButton.addEventListener("click", () => setLanguage("fr"));
    } else {
        console.error("❌ Bouton FR introuvable !");
    }

    if (enButton) {
        enButton.addEventListener("click", () => setLanguage("en"));
    } else {
        console.error("❌ Bouton EN introuvable !");
    }

    // ✅ Appliquer la langue enregistrée dès le chargement de la page
    const savedLanguage = localStorage.getItem("selectedLanguage") || "fr";
    applyTranslations(savedLanguage);
});
