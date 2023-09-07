(() => {
    if (!document.querySelector('#top')) return;

    const unFocus = document.querySelector('.un-focus'),
        toFocus = document.querySelector('.to-focus'),
        halfViewer = unFocus.offsetWidth / 2;

    const sections = [...document.querySelectorAll("#top .slide")],
        observer = new IntersectionObserver(callback, options);

    const getCoordinates = (e) => {
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left - halfViewer;
        var y = e.clientY - rect.top - halfViewer;

        unFocus.style.transform = "translate(" + x + "px," + y + "px)";
        unFocus.style.backgroundPosition = -x + "px" + " " + -y + "px";
    };

    document.addEventListener('DOMContentLoaded', () => {
        // ADD OBSERVER TO SECTIONS
        sections.forEach((section, index) => {
            const sectionChildren = [...section.children];

            // ADD DELAY TO EACH CHILD
            sectionChildren.forEach((el, index) => {
                el.style.setProperty("--delay", `${index * 250}ms`);
            });

            observer.observe(section);
        });

        // UNFOCUS EFFECT
        toFocus.addEventListener('mousemove', getCoordinates);
        toFocus.addEventListener('touchmove', getCoordinates);
    });
})();