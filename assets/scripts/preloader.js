(() => {
    const preLoader = document.getElementById('pre_loader'),
        topLid = document.querySelector('.section__top'),
        bottomLid = document.querySelector('.section__bottom'),
        spinner = document.querySelector('.spinner'),
        logo = document.querySelector('.logo'),
        mainContainer = document.querySelector('main');


    // Display:none when animation finished
    const hidePreLoaderComponent = (e) => {
        if (preLoader.classList.contains('hidden')) return;

        preLoader.classList.add('hidden');
    }

    if (!preLoader) {
        mainContainer.classList.remove('stop-scrolling');
        return;
    }


    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            spinner.classList.add('play');
        }, 1000);
        setTimeout(() => {
            logo.classList.add('play');
        }, 1500);

        // Fade out
        setTimeout(() => {
            logo.classList.remove('play');
            spinner.classList.remove('play');
            logo.classList.add('end');
            spinner.classList.add('end');
            // Lids open up
            topLid.classList.add('play');
            bottomLid.classList.add('play');
        }, 5000);

        // Lid animationend listeners
        topLid.addEventListener('animationend', hidePreLoaderComponent);
        bottomLid.addEventListener('animationend', () => {
            hidePreLoaderComponent();
            mainContainer.classList.remove('stop-scrolling');
        });
    });
})();
