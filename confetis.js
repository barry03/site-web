// Confettis à la première visite de la session sur la page d'accueil
window.addEventListener("DOMContentLoaded", () => {
    const hasSeenConfetti = sessionStorage.getItem("confettiShown");

    if (!hasSeenConfetti) {
        // Marque la visite comme faite
        sessionStorage.setItem("confettiShown", "true");

        const canvas = document.createElement("canvas");
        canvas.id = "confetti-canvas";
        canvas.style.position = "fixed";
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = 9999;
        document.body.appendChild(canvas);

        const confetti = confettiCanvas(canvas);
        confetti.start();

        // Stop après 3 secondes
        setTimeout(() => {
            confetti.stop();
            canvas.remove();
        }, 3000);
    }
});

function confettiCanvas(canvas) {
    const context = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 120 }, () => createParticle());

    function createParticle() {
        return {
            x: Math.random() * width,
            y: Math.random() * height - height,
            r: Math.random() * 8 + 6, // taille augmentée
            d: Math.random() * 30 + 10,
            color: `hsl(${Math.random() * 360}, 90%, 60%)`,
            tilt: Math.random() * 10 - 5,
            tiltAngle: 0,
            tiltAngleIncrement: Math.random() * 0.1 + 0.05,
            shape: Math.random() > 0.5 ? "circle" : "rect"
        };
    }
    

    function draw() {
        context.clearRect(0, 0, width, height);
        particles.forEach(p => {
            context.beginPath();
            context.fillStyle = p.color;
            context.strokeStyle = p.color;
    
            if (p.shape === "circle") {
                context.arc(p.x + p.tilt, p.y, p.r / 2, 0, Math.PI * 2);
                context.fill();
            } else {
                context.save();
                context.translate(p.x + p.tilt, p.y);
                context.rotate(p.tiltAngle);
                context.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 0.6);
                context.restore();
            }
        });
    
        update();
    }
    

    function update() {
        particles.forEach(p => {
            p.tiltAngle += p.tiltAngleIncrement;
            p.y += 2 + p.r * 0.2; // chute plus naturelle
            p.tilt = Math.sin(p.tiltAngle) * 12;
    
            if (p.y > height + 20) {
                p.x = Math.random() * width;
                p.y = -20;
            }
        });
    }    

    let animationFrame;
    function loop() {
        draw();
        animationFrame = requestAnimationFrame(loop);
    }

    return {
        start() {
            loop();
        },
        stop() {
            cancelAnimationFrame(animationFrame);
        },
    };
}
