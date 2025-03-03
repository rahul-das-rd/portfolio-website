document.querySelectorAll('.skill-item, .project-item, .experience-item, .education-item').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;  // 0-1
        const y = (e.clientY - rect.top) / rect.height;  // 0-1
        
        // Convert to -0.5 to 0.5 range
        const tiltX = (y - 0.5) * -15; // Vertical mouse affects X rotation
        const tiltY = (x - 0.5) * 15;  // Horizontal mouse affects Y rotation
        
        card.style.transform = `
            perspective(1000px)
            rotateX(${tiltX}deg)
            rotateY(${tiltY}deg)
            scale(1.05)
            translateZ(30px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
            translateZ(0)`;
    });
}); 