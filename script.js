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
    const container = document.querySelector(".tech-logos");
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    logos.forEach((logo) => {
        let posX = Math.random() * (containerWidth - 80); 
        let posY = Math.random() * (containerHeight - 80);
        let speedX = (Math.random() - 0.5) * 1.2;
        let speedY = (Math.random() - 0.5) * 1.2;

        logo.style.left = `${posX}%`;
        logo.style.top = `${posY}%`;

        function moveLogo() {
            posX += speedX;
            posY += speedY;

            if (posX <= 0 || posX >= (containerWidth - 80)) speedX *= -1;
            if (posY <= 0 || posY >= (containerHeight - 80)) speedY *= -1;

            logo.style.left = `${posX}%`;
            logo.style.top = `${posY}%`;

            requestAnimationFrame(moveLogo);
        }

        moveLogo();
    });
});