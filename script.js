// Wait for the entire page to load before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Add floating nav to reveal elements
    const floatingNav = document.querySelector('.floating-nav');
    if (floatingNav && window.innerWidth >= 1025) {
        floatingNav.classList.add('is-visible');
    }
    
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
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            // If the element is on screen (isIntersecting)
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the animation
                entry.target.classList.add('is-visible');
                
                // We only want the animation to happen once
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 
    });

    // Loop over every element we selected and tell the observer to watch it
    elementsToReveal.forEach(element => {
        observer.observe(element);
    });

    // Auto-update copyright year
    document.getElementById("copyright").innerHTML = "© " + new Date().getFullYear() + " Justin Larkey";


    // --- MODAL FUNCTIONALITY ---
    const modal = document.getElementById("music-modal");
    const link = document.getElementById("walking-contradictions-link");
    const closeBtn = document.querySelector(".close-button");

    if (link && modal && closeBtn) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Stop the link from jumping to top
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Stop background scrolling
        });

        // Close when clicking the X
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        });

        // Close when clicking outside the box
        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    }
});
