document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Animations on Scroll
    const reveals = document.querySelectorAll('.reveal');

    function reveal() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', reveal);
    
    // Trigger reveals on page load with slight stagger
    setTimeout(() => {
        reveals.forEach((reveal, index) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < window.innerHeight) {
                setTimeout(() => {
                    reveal.classList.add('active');
                }, index * 150); // Stagger effect
            }
        });
    }, 100);

    // 2. Mouse Spotlight Tracker for Background
    const spotlight = document.createElement('div');
    spotlight.classList.add('spotlight');
    document.body.appendChild(spotlight);

    document.addEventListener('mousemove', (e) => {
        spotlight.style.setProperty('--x', e.clientX + 'px');
        spotlight.style.setProperty('--y', e.clientY + 'px');
    });

    // 3. Removed 3D Tilt Effect per user request.

    // 4. Beautiful Mermaid Diagram Styling (Neon Dark Theme)
    if (window.mermaid) {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'base',
            themeVariables: {
                // Background & Flow
                background: 'transparent',
                primaryColor: 'rgba(20, 10, 40, 0.95)', // Deep purple/black nodes
                primaryTextColor: '#ffffff',
                primaryBorderColor: '#0ff', // Neon Cyan borders
                
                // Lines & edges
                lineColor: '#f0f', // Neon Magenta connecting lines
                edgeLabelBackground: 'rgba(20, 10, 40, 0.95)',
                
                // Clusters & secondary
                secondaryColor: 'rgba(139, 92, 246, 0.15)', // Purple glow internally
                tertiaryColor: 'rgba(0, 0, 0, 0.3)',
                nodeBorder: '#0ff',
                
                // Fonts
                fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                fontSize: '15px'
            },
            flowchart: {
                curve: 'basis', // Smooth curving lines
                nodeSpacing: 50,
                rankSpacing: 60,
                htmlLabels: true
            }
        });
    }
});
