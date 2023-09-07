(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Vars
    const sections = [...document.querySelectorAll("#protokol .slide")],
        observer = new IntersectionObserver(callbackProtokol, options);

    if (!sections) return;

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

