document.addEventListener('DOMContentLoaded', function () {

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

});