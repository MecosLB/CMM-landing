gsap.registerPlugin(ScrollTrigger);

// GLOBAL OPTIONS
const options = {
    rootMargin: "0px",
    threshold: 0.75,
};

const pModules = {
    'title': {},
    'branding': {},
    'estrategia': {},
    'campañas': {},
    'rh': {},
    'venta': {},
    'post-venta': {},
    'analisis': {},
    'full': {},
},
    KEYS = [
        'line',
        'circle',
        'connect-line'
    ],
    ACTIONS = {
        PLAY: 'play',
        RESET: 'reset',
    };

// GLOBAL METHODS
const initDashValues = (target) => {
    const module = pModules[target];

    KEYS.forEach(key => {
        for (let i = 0; i < module[key].length; i++) {
            let component = document.querySelectorAll(`.protokol-${target} .${key}`)[i];
            module[key][i] = component.getTotalLength();

            component.setAttribute('style', `stroke-dasharray: ${module[key][i]}; stroke-dashoffset: ${module[key][i]}`);
        }
    });
};

const manipulateSVG = (target, action) => {
    const module = pModules[target];

    KEYS.forEach((key, index) => {
        for (let i = 0; i < module[key].length; i++) {
            let component = document.querySelectorAll(`.protokol-${target} .${key}`)[i];

            component.setAttribute('style', `stroke-dasharray: ${module[key][i]}; stroke-dashoffset: ${action == 'play' ? 0 : module[key][i]}`);
        }
    });
};

const initSVGValues = () => {
    // Iterate over every module
    Object.keys(pModules).forEach(module => {

        KEYS.forEach(key => {
            pModules[module][key] = new Array(document.querySelectorAll(`.protokol-${module} .${key}`).length || 0);
        });

        initDashValues(module);
    });
};

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        const { target } = entry;

        if (entry.intersectionRatio >= 0.75)
            target.classList.add('is-visible');
        else
            target.classList.remove('is-visible');
    });
};

const callbackProtokol = (entries, observer) => {
    entries.forEach((entry) => {
        const { target } = entry;
        let moduleName;

        Object.keys(pModules).forEach(module => {
            if (target.classList.contains(`protokol-${module}`))
                moduleName = module;
        });


        if (entry.intersectionRatio >= 0.75) {
            manipulateSVG(moduleName, ACTIONS.PLAY)
            target.classList.add('is-visible');

            // if (target.classList.contains('left')) {
            //     gsap.to(target, {
            //         scrollTrigger: {
            //             trigger: '.protokol-campañas',
            //             toggleActions: "play none none reset",
            //         },
            //         x: '-100vw',
            //     });
            // }
        }
        else {
            manipulateSVG(moduleName, ACTIONS.RESET)
            target.classList.remove('is-visible');

            // if (target.classList.contains('left')) {
            //     gsap.to(target, {
            //         scrollTrigger: '.protokol-rh',
            //         x: '-100vw',
            //     });
            // }
        }

    });
};

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        initSVGValues();
    });
})();