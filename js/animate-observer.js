/**
 * Animate Observer
 * v1.0.0
 */

"use strict";

const ao = document.querySelectorAll("[class^=ao__]");

if (ao.length) {
    // Create the observer
    var inViewOptions = {
        threshold: 0,
        rootMargin: "0px 0px -250px 0px"
    };
    const inView = new IntersectionObserver((entries, inView) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('inView');
            inView.unobserve(entry.target);
        });
    }, inViewOptions);

    // Add the inView class when in view
    ao.forEach(toAnimate => {
        inView.observe(toAnimate);
    });
}
