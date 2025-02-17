document.addEventListener("DOMContentLoaded", function() {
    // ✅ Ajout du fade-in sur les sections sauf #skills
    const sections = document.querySelectorAll("section:not(#skills)");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // ✅ Bouton "Retour en haut" avec vérification d'existence
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                backToTopButton.classList.add("visible");
            } else {
                backToTopButton.classList.remove("visible");
            }
        });

        backToTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ✅ Animation aléatoire des logos techs
    const logos = document.querySelectorAll(".tech-logos img");

    logos.forEach(logo => {
        let posX = Math.random() * 80; // Position initiale X
        let posY = Math.random() * 80; // Position initiale Y
        let speedX = (Math.random() - 0.5) * 1.5; // Vitesse X
        let speedY = (Math.random() - 0.5) * 1.5; // Vitesse Y

        function moveLogo() {
            posX += speedX;
            posY += speedY;

            // ✅ Ajout de rebonds aux bords du cadre
            if (posX <= 0 || posX >= 80) speedX *= -1;
            if (posY <= 0 || posY >= 80) speedY *= -1;

            logo.style.transform = `translate(${posX}%, ${posY}%)`;

            requestAnimationFrame(moveLogo);
        }

        moveLogo();
    });
});
