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
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 
    });

    elementsToReveal.forEach(element => {
        observer.observe(element);
    });

    // Auto-update copyright year
    document.getElementById("copyright").innerHTML = "© " + new Date().getFullYear() + " Justin Larkey";


    // --- MODAL FUNCTIONALITY (UPDATED) ---
    const modal = document.getElementById("music-modal");
    const link = document.getElementById("walking-contradictions-link");
    const closeBtn = document.querySelector(".close-button");
    const modalContent = document.querySelector(".modal-content");

    // Function to handle the closing animation
    function closeModal() {
        if (!modal || !modalContent) return;

        // 1. Add the CSS class that triggers the slideOut animation
        modalContent.classList.add("closing");

        // 2. Wait 300ms (matches the 0.3s CSS animation) before hiding
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
            
            // 3. Reset the class so it's ready to slide IN next time
            modalContent.classList.remove("closing");
        }, 300);
    }

    if (link && modal && closeBtn) {
        // Open Modal
        link.addEventListener("click", function(event) {
            event.preventDefault();
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        });

        // Close when clicking the X
        closeBtn.addEventListener("click", closeModal);

        // Close when clicking outside the box
        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                closeModal();
            }
        });
    }
});
