
document.addEventListener("DOMContentLoaded", function() {
    tsParticles.load("name-particles", {
        fpsLimit: 60,
        particles: {
            number: {
                value: 0
            },
            color: {
                value: "#000000"
            },
            shape: {
                type: "text",
                options: {
                    text: {
                        value: "Taulant Matraku",
                        font: "bold 40px Arial"
                    }
                }
            },
            opacity: {
                value: 1
            },
            size: {
                value: 3,
                random: {
                    enable: true,
                    minimumValue: 2
                }
            },
            move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: true,
                straight: false,
                outMode: "out",
                bounce: false
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onClick: {
                    enable: true,
                    mode: "push"
                }
            },
            modes: {
                push: {
                    quantity: 10
                }
            }
        },
        detectRetina: true
    });
});
