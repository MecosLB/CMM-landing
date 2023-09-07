(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!document.querySelector('#top')) return;

    const sections = [...document.querySelectorAll("#members .slide")],
        observer = new IntersectionObserver(callback, options);

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

    });
})();