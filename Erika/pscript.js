document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-fall-container');
    const imageSources = [
        'images/img1.webp',
        'images/img2.webp',
        'images/img3.webp',
        'images/img4.webp',
        'images/img5.webp',
        'images/img6.webp',
        'images/img7.webp',
        'images/img8.webp',
        'images/img9.webp',
        'images/img10.webp',
        'images/img11.webp',
        'images/img12.webp',
        'images/img13.webp',
        'images/img14.webp',
        'images/img15.webp',
        'images/draw1.webp',
        'images/draw3.webp',
        'images/draw4.webp',
        'images/draw5.webp',
        'images/draw6.webp'
    ];
    const numberOfImages = 21; // Total number of falling images desired

    /**
     * Shuffles array in place using Fisher-Yates algorithm.
     * @param {Array} array Array to shuffle.
     */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    /**
     * Creates a single falling image element and adds it to the container.
     * @param {string} src The image source path.
     */
    function createFallingImage(src) {
        if (!src) {
            console.warn("Image source is missing.");
            return;
        }

        const img = document.createElement('img');
        img.src = src;
        img.alt = "Romantic moment or drawing";
        img.classList.add('falling-image');

        // Add a special class if it's a drawing image
        if (src.startsWith('images/draw')) {
            img.classList.add('falling-drawing');
        }

        // Randomize properties
        const randomSize = Math.random() * 50 + 50; // Size between 50px and 100px
        const randomLeft = Math.random() * 100; // Horizontal position (0% to 100%)
        const randomDuration = Math.random() * 5 + 8; // Fall duration between 8s and 13s
        const randomDelay = Math.random() * 5; // Start delay up to 5s

        img.style.width = `${randomSize}px`;
        img.style.height = 'auto';
        img.style.left = `${randomLeft}%`;
        img.style.animationDuration = `${randomDuration}s`;
        img.style.animationDelay = `${randomDelay}s`;

        imageContainer.appendChild(img);
    }

    // --- Image Creation Logic --- 

    if (imageSources.length === 0) {
        console.warn("No image sources provided. Cannot create falling images.");
        return; // Exit if no images are available
    }

    // 1. Create one of each image first
    let shuffledSources = [...imageSources]; // Create a copy
    shuffleArray(shuffledSources); // Shuffle the copy

    const uniqueImageCount = shuffledSources.length;
    const imagesToCreateInitially = Math.min(numberOfImages, uniqueImageCount);

    for (let i = 0; i < imagesToCreateInitially; i++) {
        createFallingImage(shuffledSources[i]);
    }

    // 2. Create remaining images randomly if needed
    const remainingImages = numberOfImages - imagesToCreateInitially;
    if (remainingImages > 0) {
        for (let i = 0; i < remainingImages; i++) {
            // Pick randomly from the original full list for the remainder
            const randomSrc = imageSources[Math.floor(Math.random() * imageSources.length)];
            createFallingImage(randomSrc);
        }
    }

    // --- Optional: Reveal question on scroll --- 
    // Uncomment this section if you want the question to appear only after scrolling.
    
    const questionSection = document.getElementById('question-section');
    // const initialScreen = document.getElementById('initial-screen'); // Keep this commented if observing questionSection directly

    // Hide question section initially if using scroll reveal
    // Make sure to uncomment the corresponding CSS (`#question-section { opacity: 0; ... }`)
    // questionSection.style.opacity = '0'; // CSS will handle this now

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the initial screen is no longer intersecting (scrolled past)
            // if (!entry.isIntersecting && entry.target === initialScreen) { // Keep commented
                 // You could fade in the question section here
                 // document.body.classList.add('scrolled'); // Add class to body // Keep commented
                 // Or directly change opacity:
                 // questionSection.style.opacity = '1'; // Keep commented
                 
                 // We only need to observe this once
                 // observer.unobserve(initialScreen); // Keep commented
            // }
            // Alternatively, observe the question section directly:
            if (entry.isIntersecting && entry.target === questionSection) {
               entry.target.style.opacity = '1'; // Fade in the section
               observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    // Start observing the initial screen or the question section
    // observer.observe(initialScreen); // Keep commented
    observer.observe(questionSection); // Observe the question section directly
    
    // By default, the question section is always visible after the initial screen section.
});

// CSS for fading effect
document.addEventListener('DOMContentLoaded', () => {
    const dedicationContainer = document.querySelector('.dedication-container');
    // adjust the opacity of the dedication container
    const fadeOutDistance = 300;

    if (dedicationContainer) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            let newOpacity = 1;

            if (scrollY <= fadeOutDistance) {
                newOpacity = 1 - (scrollY / fadeOutDistance);
            }
            else {
                newOpacity = 0;
            }

            // Clamp opacity between 0 and 1 just in case
            newOpacity = Math.max(0, Math.min(1, newOpacity));

            dedicationContainer.style.opacity = newOpacity;
        });
    }
});