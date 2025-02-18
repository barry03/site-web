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
        let posX = Math.random() * 60 + 20; // Position limitée pour éviter débordement
        let posY = Math.random() * 40; // Évite que ça chevauche le footer
        let speedX = (Math.random() - 0.5) * 1.5; // Animation plus fluide
        let speedY = (Math.random() - 0.5) * 1.5; 

        logo.style.position = "absolute";
        logo.style.left = `${posX}%`;
        logo.style.top = `${posY}px`;

        function moveLogo() {
            posX += speedX;
            posY += speedY;

            if (posX <= 10 || posX >= 80) speedX *= -1;
            if (posY <= 0 || posY >= 80) speedY *= -1;

            logo.style.left = `${posX}%`;
            logo.style.top = `${posY}px`;

            requestAnimationFrame(moveLogo);
        }

        moveLogo();
    });
});