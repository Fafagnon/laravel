document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const card = document.getElementById('mainCard');
    const celebration = document.getElementById('celebration');
    const confettiCanvas = document.getElementById('confetti-canvas');

    // Button "No" interaction
    const moveButton = () => {
        // Calculate available area within the card or viewport
        // Moving it randomly within the window but ensuring it stays visible
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    };

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent click on touch
        moveButton();
    });
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveButton();
    });

    // Button "Yes" interaction
    yesBtn.addEventListener('click', () => {
        // Hide card
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.display = 'none';
        }, 500);

        // Show celebration
        celebration.classList.remove('hidden');
        // Small delay to allow display change to register before opacity transition
        setTimeout(() => {
            celebration.classList.add('visible');
            triggerConfetti();
        }, 50);
    });

    // Confetti logic
    const triggerConfetti = () => {
        var myConfetti = confetti.create(confettiCanvas, {
            resize: true,
            useWorker: true
        });

        var duration = 15 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            myConfetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            myConfetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    };
});
