(() => {
    const circleCursor = document.getElementById('cursor_element');
    // itemWithHover = document.querySelectorAll('.hover-effect');

    if (!circleCursor) return;

    document.addEventListener('DOMContentLoaded', () => {
        // MouseMove listener
        document.body.addEventListener('mousemove', (e) => {
            // Move custom cursor
            TweenMax.to(circleCursor, .4, {
                x: e.pageX - 15,
                y: e.pageY - 15,
            });
        });

        // Add hover effect to each element
        // itemWithHover.forEach(element => {
        //     element.addEventListener('mouseenter', () => {
        //         TweenMax.to(circleCursor, .3, {
        //             scale: 4,
        //         })
        //     });
        //     element.addEventListener('mouseleave', () => {
        //         TweenMax.to(circleCursor, .3, {
        //             scale: 1,
        //         })
        //     });
        // });
    });
})();