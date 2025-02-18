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

    logos.forEach((logo, index) => {
        let angle = index * (360 / logos.length);
        let radius = 150; // Ajustement de la taille du cercle
        let centerX = 50;
        let centerY = 50;

        function moveLogo() {
            angle += 1;
            let x = centerX + radius * Math.cos(angle * Math.PI / 180);
            let y = centerY + radius * Math.sin(angle * Math.PI / 180);
            
            logo.style.transform = `translate(${x}px, ${y}px)`;
            requestAnimationFrame(moveLogo);
        }

        moveLogo();
    });
});