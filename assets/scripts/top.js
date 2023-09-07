(() => {
    if (!document.querySelector('#top')) return;

    const unFocus = document.querySelector('.un-focus'),
        toFocus = document.querySelector('.to-focus'),
        halfViewer = unFocus.offsetWidth / 2;

    const activeTouches = [];

    const sections = [...document.querySelectorAll('#top .slide')],
        observer = new IntersectionObserver(callback, options);

    const getCoordinates = (e) => {
        let rect = e.target.getBoundingClientRect(),
            x = e.clientX - rect.left - halfViewer,
            y = e.clientY - rect.top - halfViewer;

        unFocus.style.transform = 'translate(' + x + 'px,' + y + 'px)';
        unFocus.style.backgroundPosition = -x + 'px' + ' ' + -y + 'px';
    };

    const getCoordinatesMobile = (e, xR = 0, yR = 0) => {
        let rect = e.target.getBoundingClientRect(),
            x = xR - rect.left - halfViewer,
            y = yR - rect.top - halfViewer;

        unFocus.style.opacity = '1';
        unFocus.style.transform = 'translate(' + x + 'px,' + y + 'px)';
        unFocus.style.backgroundPosition = -x + 'px' + ' ' + -y + 'px';
    };

    document.addEventListener('DOMContentLoaded', () => {
        // ADD OBSERVER TO SECTIONS
        sections.forEach((section, index) => {
            const sectionChildren = [...section.children];

            // ADD DELAY TO EACH CHILD
            sectionChildren.forEach((el, index) => {
                el.style.setProperty('--delay', `${index * 250}ms`);
            });

            observer.observe(section);
        });

        // UNFOCUS EFFECT
        toFocus.addEventListener('mousemove', getCoordinates);

        // TOUCH IMIPLEMENTATION
        toFocus.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touches = e.changedTouches;

            for (let touch of touches)
                getCoordinatesMobile(e, touch.clientX, touch.clientY);
        });

        toFocus.addEventListener('touchend', (e) => {
            e.preventDefault();
            const touches = e.changedTouches;

            unFocus.style.opacity = '0';
        });

        toFocus.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touches = e.changedTouches;

            for (let touch of touches)
                getCoordinatesMobile(e, touch.clientX, touch.clientY);
        });
    });
})();