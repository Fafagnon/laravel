document.addEventListener('DOMContentLoaded', () => {
    const u16Btn = document.getElementById('u16Btn');
    const studentBtn = document.getElementById('studentBtn');
    const result = document.getElementById('result');
    const choicesBox = document.querySelector('.choices-box');
    const title = document.querySelector('h1');
    const subtitle = document.querySelector('.subtitle');

    // Function to move the U16 button randomly
    const runAway = (e) => {
        // Get window dimensions
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;

        // Button dimensions
        const btnWidth = u16Btn.offsetWidth;
        const btnHeight = u16Btn.offsetHeight;

        // Calculate new random position
        // Ensure it stays within viewport with some padding
        const newX = Math.random() * (winWidth - btnWidth - 40) + 20;
        const newY = Math.random() * (winHeight - btnHeight - 40) + 20;

        // Avoid layout jump by adding a placeholder on first move
        if (u16Btn.style.position !== 'fixed') {
            const placeholder = document.createElement('div');
            placeholder.style.width = `${btnWidth}px`;
            placeholder.style.height = `${btnHeight}px`;
            placeholder.style.visibility = 'hidden';
            u16Btn.parentNode.insertBefore(placeholder, u16Btn);
            u16Btn.style.position = 'fixed';
        }
        u16Btn.style.left = `${newX}px`;
        u16Btn.style.top = `${newY}px`;

        // Add a funny rotation
        const rotation = (Math.random() - 0.5) * 40;
        u16Btn.style.transform = `rotate(${rotation}deg)`;
    };

    // Events for U16 button
    u16Btn.addEventListener('mouseover', runAway);
    u16Btn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent accidental selection on touch
        runAway();
    });
    u16Btn.addEventListener('click', (e) => {
        e.preventDefault();
        runAway(); // Just in case they manage to click
    });

    // Event for Student button (Success)
    studentBtn.addEventListener('click', () => {
        // Hide the choice UI
        choicesBox.style.display = 'none';
        title.style.display = 'none';
        subtitle.style.display = 'none';



        // Show result
        result.classList.remove('hidden');
    });
});
