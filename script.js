// Wait for the entire page to load before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Mobile navigation setup
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Select all the elements you want to animate
    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');

    // Set up the Intersection Observer
    // This API is the modern, efficient way to watch for elements
    // entering the screen (the "viewport").
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            // If the element is on screen (isIntersecting)
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the animation
                entry.target.classList.add('is-visible');
                
                // We only want the animation to happen once, so
                // we stop watching the element after it's visible.
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Options: 'threshold' means the animation will trigger
        // when 15% of the element is visible.
        threshold: 0.15 
    });

    // Loop over every element we selected and tell the observer to watch it
    elementsToReveal.forEach(element => {
        observer.observe(element);
    });

    // *** NEW: Auto-update copyright year ***
    // This finds the element with id="copyright" and sets its text.
    // new Date().getFullYear() gets the current year automatically.
    document.getElementById("copyright").innerHTML = "© " + new Date().getFullYear() + " Justin Larkey";
});
