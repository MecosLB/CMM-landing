(() => {
    gsap.registerPlugin(ScrollTrigger);

    const logos = gsap.utils.toArray('#members .logo');

    document.addEventListener('DOMContentLoaded', () => {
        // MEMBERS
        gsap.from(logos, {
            scrollTrigger: {
                trigger: '#members',
                toggleActions: 'restart pause pause reverse',
            },
            duration: 1,
            delay: 1,
            opacity: 0,
            stagger: 0.2,
            y: 20,
        });
    });
})();