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

    const audioPlayers = document.querySelectorAll('[data-audio-player]');

    function formatTime(seconds) {
        if (!Number.isFinite(seconds) || seconds < 0) {
            return "0:00";
        }
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    function setPlayIcon(button, isPlaying) {
        const icon = button.querySelector('i');
        if (!icon) return;
        icon.className = isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
        button.setAttribute('aria-label', isPlaying ? 'Pause Impossible' : 'Play Impossible');
    }

    function setVolumeIcon(button, audio) {
        const icon = button.querySelector('i');
        if (!icon) return;

        if (audio.muted || audio.volume === 0) {
            icon.className = 'fa-solid fa-volume-xmark';
            button.setAttribute('aria-label', 'Unmute Impossible');
            return;
        }

        if (audio.volume <= 0.5) {
            icon.className = 'fa-solid fa-volume-low';
        } else {
            icon.className = 'fa-solid fa-volume-high';
        }
        button.setAttribute('aria-label', 'Mute Impossible');
    }

    audioPlayers.forEach(player => {
        const audio = player.querySelector('.project-audio-element');
        const playPauseBtn = player.querySelector('.play-pause');
        const muteBtn = player.querySelector('.mute-toggle');
        const seekInput = player.querySelector('.audio-seek');
        const volumeInput = player.querySelector('.audio-volume');
        const currentTimeEl = player.querySelector('.current-time');
        const durationEl = player.querySelector('.duration');

        if (!audio || !playPauseBtn || !muteBtn || !seekInput || !volumeInput || !currentTimeEl || !durationEl) {
            return;
        }

        function setLoadingState(isLoading) {
            player.classList.toggle('is-loading', isLoading);
        }

        audio.volume = 0.5;
        volumeInput.value = audio.volume;
        setPlayIcon(playPauseBtn, false);
        setVolumeIcon(muteBtn, audio);

        playPauseBtn.addEventListener('click', () => {
            if (audio.paused) {
                const playPromise = audio.play();
                if (playPromise && typeof playPromise.catch === 'function') {
                    playPromise.catch(() => {});
                }
            } else {
                audio.pause();
            }
        });

        muteBtn.addEventListener('click', () => {
            audio.muted = !audio.muted;
            setVolumeIcon(muteBtn, audio);
        });

        seekInput.addEventListener('input', () => {
            audio.currentTime = Number(seekInput.value);
        });

        volumeInput.addEventListener('input', () => {
            audio.volume = Number(volumeInput.value);
            audio.muted = audio.volume === 0;
            setVolumeIcon(muteBtn, audio);
        });

        audio.addEventListener('loadedmetadata', () => {
            const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
            seekInput.max = duration;
            durationEl.textContent = formatTime(duration);
            setLoadingState(false);
        });

        audio.addEventListener('loadeddata', () => {
            setLoadingState(false);
        });

        audio.addEventListener('timeupdate', () => {
            seekInput.value = audio.currentTime;
            currentTimeEl.textContent = formatTime(audio.currentTime);
        });

        audio.addEventListener('play', () => {
            setPlayIcon(playPauseBtn, true);
        });

        audio.addEventListener('loadstart', () => {
            setLoadingState(true);
        });

        audio.addEventListener('waiting', () => {
            setLoadingState(true);
        });

        audio.addEventListener('seeking', () => {
            setLoadingState(true);
        });

        audio.addEventListener('stalled', () => {
            setLoadingState(true);
        });

        audio.addEventListener('canplay', () => {
            setLoadingState(false);
        });

        audio.addEventListener('canplaythrough', () => {
            setLoadingState(false);
        });

        audio.addEventListener('playing', () => {
            setLoadingState(false);
        });

        audio.addEventListener('seeked', () => {
            setLoadingState(false);
        });

        audio.addEventListener('pause', () => {
            setPlayIcon(playPauseBtn, false);
        });

        audio.addEventListener('ended', () => {
            setPlayIcon(playPauseBtn, false);
            setLoadingState(false);
        });

        audio.addEventListener('error', () => {
            setLoadingState(false);
        });

        audio.addEventListener('volumechange', () => {
            if (!audio.muted) {
                volumeInput.value = audio.volume;
            }
            setVolumeIcon(muteBtn, audio);
        });
    });


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
