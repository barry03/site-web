
const quotes = {
    en: [
        `"In God we trust. All others must bring data." – W. Edwards Deming`,
        `"Code is like humor. When you have to explain it, it’s bad."`,
        `"Premature optimization is the root of all evil." – Donald Knuth`
    ],
    fr: [
        `"En Dieu nous croyons. Tous les autres doivent apporter des données." – W. Edwards Deming`,
        `"Le code est comme l'humour. Si vous devez l'expliquer, c’est qu’il est mauvais."`,
        `"L’optimisation prématurée est la racine de tout mal." – Donald Knuth`
    ]
};

// Fonction pour générer une citation selon la langue
function generateQuote() {
    const quoteResult = document.querySelector(".quote-result");
    const currentLang = localStorage.getItem("selectedLanguage") || "fr";
    const randomQuote = quotes[currentLang][Math.floor(Math.random() * quotes[currentLang].length)];

    quoteResult.style.opacity = 0;
    setTimeout(() => {
        quoteResult.textContent = randomQuote;
        quoteResult.style.opacity = 1;
    }, 300);
}

// Génère une citation au clic
document.querySelector(".quote-widget button").addEventListener("click", generateQuote);

// Génère une citation automatiquement au chargement
document.addEventListener("DOMContentLoaded", generateQuote);

