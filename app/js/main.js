document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    // ### HAMBURGER ###
    const hamburger = document.querySelector('.hamClick');
    const navMobile = document.querySelector('.navMobile');

    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        navMobile.classList.toggle('active');
    });

    document.addEventListener('click', function () {
        if (document.activeElement !== hamburger) {
            hamburger.classList.remove('active');
            navMobile.classList.remove('active');
        }
    });
    // ### END ###

    // ### SLIDER ###
    const sliderWrap = document.querySelector('.slider-wrapper');
    const sliderLeft = document.querySelector('.goLeft');
    const sliderRight = document.querySelector('.goRight');
    let slider = 0;

    function moveSlider(direction) {
        clearInterval(sliderMoving);
        sliderWrap.classList.remove(`slider-${slider}`);
        if (direction === 'left') {
            slider--;
            if (slider < 0) {
                slider = 2;
            }
        }
        else {
            slider++;
            if (slider > 2) {
                slider = 0;
            }
        }
        sliderWrap.classList.add(`slider-${slider}`);
    }

    const sliderMoving = setInterval(() => {
        sliderWrap.classList.remove(`slider-${slider}`);
        slider++;
        if (slider > 2) {
            slider = 0;
        }
        sliderWrap.classList.add(`slider-${slider}`);
    }, 5000);

    sliderLeft.addEventListener('click', () => {
        moveSlider('left');
    });
    sliderRight.addEventListener('click', () => {
        moveSlider('right');
    });
    // ### END ###

});