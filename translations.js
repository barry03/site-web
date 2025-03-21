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

// ✅ Met à jour la langue et l'enregistre dans localStorage
function setLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang);
    applyTranslations(lang);
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Langue enregistrée :", localStorage.getItem("selectedLanguage"));

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

    // ✅ Appliquer la langue enregistrée sur toutes les pages
    const savedLanguage = localStorage.getItem("selectedLanguage") || "fr"; 
    applyTranslations(savedLanguage);
});


