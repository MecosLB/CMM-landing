(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Default settings
    ScrollTrigger.defaults({
        toggleActions: 'restart pause resume pause',
    });

    // Vars
    const pTitle = document.querySelector('.protokol-title rect'),
        pModules = {
            'branding': {
                lines: new Array(document.querySelectorAll(`.protokol-branding .line`).length),
                circle: 0,
                connect_line: new Array(document.querySelectorAll(`.protokol-branding .connect-line`).length),
            },
            'estrategia': {
                lines: new Array(document.querySelectorAll(`.protokol-estrategia .line`).length),
                circle: 0,
                connect_line: new Array(document.querySelectorAll(`.protokol-estrategia .connect-line`).length),
            }
        },
        ACTIONS = {
            PLAY: 'play',
            RESET: 'reset',
        };


    const addPlay = (target) => {
        target.classList.add('play');
    };

    const removePlay = (target) => {
        target.classList.remove('play');
    };

    const initDashValues = (target) => {
        const module = pModules[target];

        // LINES
        if ('lines' in module) {
            for (let i = 0; i < module.lines.length; i++) {
                let line = document.querySelectorAll(`.protokol-${target} .line`)[i];
                module.lines[i] = line.getTotalLength();

                line.setAttribute('style', `stroke-dasharray: ${module.lines[i]}; stroke-dashoffset: ${module.lines[i]}`);
            }
        }


        // CIRCLE
        if ('circle' in module) {
            let circle = document.querySelector(`.protokol-${target} .circle`);
            module.circle = circle.getTotalLength();

            circle.setAttribute('style', `stroke-dasharray: ${module.circle}; stroke-dashoffset: ${module.circle}`);
        }

        // CONNECTION LINES
        if ('connect_line' in module) {
            for (let i = 0; i < module.connect_line.length; i++) {
                let connect_line = document.querySelectorAll(`.protokol-${target} .connect-line`)[i];
                module.connect_line[i] = connect_line.getTotalLength();

                connect_line.setAttribute('style', `stroke-dasharray: ${module.connect_line[i]}; stroke-dashoffset: ${module.connect_line[i]}`);
            }
        }
    };

    const manipulateSVG = (target, action) => {
        const module = pModules[target];

        // LINES
        if ('lines' in module) {
            for (let i = 0; i < module.lines.length; i++) {
                let line = document.querySelectorAll(`.protokol-${target} .line`)[i];

                line.setAttribute('style', `stroke-dasharray: ${module.lines[i]}; stroke-dashoffset: ${action == 'play' ? 0 : module.lines[i]}`);
            }
        }


        // CIRCLE
        if ('circle' in module) {
            let circle = document.querySelector(`.protokol-${target} .circle`);

            circle.setAttribute('style', `stroke-dasharray: ${module.circle}; stroke-dashoffset: ${action == 'play' ? 0 : module.circle}`);
        }

        // CONNECTION LINES
        if ('connect_line' in module) {
            for (let i = 0; i < module.connect_line.length; i++) {
                let connect_line = document.querySelectorAll(`.protokol-${target} .connect-line`)[i];

                connect_line.setAttribute('style', `stroke-dasharray: ${module.connect_line[i]}; stroke-dashoffset: ${action == 'play' ? 0 : module.connect_line[i]}`);
            }
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        // DEFAULT VALUES 4 SVGs
        Object.keys(pModules).forEach(module => {
            initDashValues(module);
        });

        // TITLE
        gsap.from('.protokol-title svg', {
            opacity: 0,
        });

        gsap.to('.protokol-title svg', {
            scrollTrigger: {
                trigger: '.protokol-title',
                toggleActions: 'restart pause pause reverse',
                onEnter: () => {
                    addPlay(pTitle);
                },
                onLeaveBack: () => {
                    removePlay(pTitle);
                },
            },
            duration: 2,
            opacity: 1,
        });

        // BRANDING
        gsap.from('.protokol-branding svg', {
            opacity: 0,
        });

        gsap.to('.protokol-branding svg', {
            scrollTrigger: {
                trigger: '.protokol-branding',
                toggleActions: 'restart pause pause reverse',
                onEnter: () => {
                    manipulateSVG('branding', ACTIONS.PLAY);
                },
                onLeaveBack: () => {
                    manipulateSVG('branding', ACTIONS.RESET);
                },
            },
            duration: 2,
            opacity: 1,
        });

        // ESTRATEGIA
        gsap.from('.protokol-estrategia svg', {
            opacity: 0,
        });

        gsap.to('.protokol-estrategia svg', {
            scrollTrigger: {
                trigger: '.protokol-estrategia',
                toggleActions: 'restart pause pause reverse',
                onEnter: () => {
                    manipulateSVG('estrategia', ACTIONS.PLAY);
                },
                onLeaveBack: () => {
                    manipulateSVG('estrategia', ACTIONS.RESET);
                },
            },
            duration: 2,
            opacity: 1,
        });
    });
})();