document.addEventListener('DOMContentLoaded', () => {
    // Dynamically inject reveal classes for deep staggering without cluttering HTML
    document.querySelectorAll('.solution-section').forEach(el => el.classList.add('reveal'));
    document.querySelectorAll('.calc-list li').forEach((el, index) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${(index % 4) * 150}ms`; // Stagger list items
    });
    document.querySelectorAll('.data-table tbody tr').forEach((el, index) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${(index % 5) * 100}ms`; // Stagger table rows
    });

    // Reveal Animations on Scroll
    const reveals = document.querySelectorAll('.reveal');

    function reveal() {
        const windowHeight = window.innerHeight;
        const elementVisible = 120;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', reveal);
    
    // Trigger once on load
    setTimeout(reveal, 200);

    // Initialize Particles.js Configuration for beautiful interactive background
    if (window.particlesJS) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 60,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#8b5cf6", "#3b82f6", "#10b981", "#f43f5e"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#cbd5e1",
                    "opacity": 0.1,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Initialize Mermaid Diagram after fonts are loaded
    if (window.mermaid) {
        mermaid.initialize({
            startOnLoad: false,
            theme: 'base',
            themeVariables: {
                background: 'transparent',
                primaryColor: 'rgba(30, 41, 59, 0.95)',
                primaryTextColor: '#ffffff',
                primaryBorderColor: '#00f0ff',
                lineColor: '#ff00ff',
                secondaryColor: 'rgba(139, 92, 246, 0.3)',
                tertiaryColor: 'rgba(15, 23, 42, 0.5)',
                fontFamily: "'Inter', sans-serif"
            },
            flowchart: {
                curve: 'basis',
                nodeSpacing: 80,
                rankSpacing: 100,
                padding: 30, // HUGE padding to completely prevent cutoff
                htmlLabels: false // Forces pure SVG text to stop div layout bugs forever
            }
        });

        document.fonts.ready.then(() => {
            mermaid.init(undefined, document.querySelectorAll('.mermaid'));
        });
    }
});
