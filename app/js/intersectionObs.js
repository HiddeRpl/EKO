document.addEventListener('DOMContentLoaded', function () {

    'use strict';

// Get all of the images that are marked up to lazy load
    const slides = document.querySelectorAll('.slide');
    const config = {
        threshold: 0.5,
    };

// The observer for the images on the page
    let observer = new IntersectionObserver(onIntersection, config);
    slides.forEach(slide => {
        observer.observe(slide);
    });

    function onIntersection(entries) {
        // Loop through the entries
        entries.forEach(entry => {
            // Are we in viewport?
            if (entry.intersectionRatio > 0) {
                console.log('in view');
                // Stop watching and load the image
                observer.unobserve(entry.target);
                applyImage(entry.target);
            }
        });
    }

    function applyImage(image) {
        image.classList.add('loaded');
    }
});