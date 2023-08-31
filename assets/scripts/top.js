(() => {
    gsap.registerPlugin(ScrollTrigger);

    // HORIZONTAL SCROLL
    // const slides = gsap.utils.toArray('.slide'),
    //     // Container for tweens
    //     timeLine = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '#top',
    //             pin: true,
    //             scrub: 1,
    //             snap: 1 / (slides.length - 1),
    //             end: '+=3000'
    //         }
    //     });
    if(!document.querySelector('#top')) return;

    const slides = gsap.utils.toArray('#top .slide'),
        topTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#top',
                // pin: true,
                scrub: 1,
                // snap: 1 / (slides.length - 1),
                start: "top",
                // end: `+=${(slides.length-2) * 100}%`,
            }
        });

    const unFocus = document.querySelector('.un-focus'),
        toFocus = document.querySelector('.to-focus'),
        halfViewer = unFocus.offsetWidth / 2;

    const getCoordinates = (e) => {
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left - halfViewer;
        var y = e.clientY - rect.top - halfViewer;

        unFocus.style.transform = "translate(" + x + "px," + y + "px)";
        unFocus.style.backgroundPosition = -x + "px" + " " + -y + "px";
    };


    document.addEventListener('DOMContentLoaded', () => {
        // HORIZONTAL SCROLL
        // Animation to final values
        // timeLine.to(slides, {
        //     xPercent: -100 * (slides.length),
        //     ease: 'none',
        // });

        topTl.to(slides, {
            yPercent: -100 * (slides.length - 1),
            ease: 'none',
        });

        // const experienceSensor = gsap.timeline({
        //     ease: 'power.0',
        //     scrollTrigger: {
        //         trigger: '.experience',
        //         scrub: true,
        //         once: true,
        //     }
        // });

        // experienceSensor.to('.title', {
        //     scale: 2,
        // });

        // UNFOCUS EFFECT
        toFocus.addEventListener('mousemove', getCoordinates);
    });
})();