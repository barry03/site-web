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

    logos.forEach((logo) => {
        let posX = Math.random() * 80; // Position aléatoire X
        let posY = Math.random() * 50 + 20; // Position aléatoire Y
        let speedX = (Math.random() - 0.5) * 1.2; // Réduction vitesse X
        let speedY = (Math.random() - 0.5) * 1.2; // Réduction vitesse Y

        logo.style.position = "absolute";
        logo.style.left = `${posX}%`;
        logo.style.top = `${posY}%`;

        function moveLogo() {
            posX += speedX;
            posY += speedY;

            if (posX <= 5 || posX >= 90) speedX *= -1;
            if (posY <= 10 || posY >= 90) speedY *= -1;

            logo.style.left = `${posX}%`;
            logo.style.top = `${posY}%`;

            requestAnimationFrame(moveLogo);
        }

        moveLogo();
    });
});