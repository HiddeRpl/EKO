document.addEventListener('DOMContentLoaded', function () {

    'use strict';

// Get all of the images that are marked up to lazy load
    const images = document.querySelectorAll('.slide, .serviceImg');
    const config = {
        threshold: 0.5,
    };

// The observer for the images on the page
    let observer = new IntersectionObserver(onIntersection, config);
    images.forEach(image => {
        observer.observe(image);
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