document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('shinra-btn');
    const output = document.getElementById('status-output');
    const container = document.querySelector('.container');

    // Make video play smoothly on mobile browsers
    const bgVideo = document.getElementById('bg-video');
    if (bgVideo) {
        bgVideo.play().catch(error => {
            console.log("Autoplay prevented by browser, playing muted.");
        });
    }

    // Interactive Web3 Shockwave Action
    btn.addEventListener('click', () => {
        // Trigger visual pulse effect
        container.classList.add('repulsion-active');
        
        // Update terminal output
        output.textContent = "CRITICAL: Gravity field generated. Pain's Rinnegan activated.";
        output.style.color = "#ff4d4d";

        setTimeout(() => {
            container.classList.remove('repulsion-active');
            output.textContent = "SYSTEM READY...";
            output.style.color = "#c77dff";
        }, 1200);
    });
});
