// Function to load a single image
function loadImage(image) {
    const img = document.createElement('img');
    img.src = image.dataset.src;
    img.alt = image.dataset.alt;
    image.appendChild(img);
}

// Function to observe images
function observeImages(folderPath, numImages) {
    const imageGrid = document.getElementById('imageGrid');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    for (let i = 1; i <= numImages; i++) {
        const a = document.createElement('a');
        const lowresPath = `${folderPath}_lowres/${i}.jpg`;
        const highresPath = `${folderPath}/${i}.jpg`;

        a.href = highresPath; // Link to the high-res image
        a.target = '_blank'; // Open link in new tab
        a.dataset.src = lowresPath; // Load low-res image
        a.dataset.alt = 'Image ' + i;

        imageGrid.appendChild(a);
        observer.observe(a);
    }
}

// Expose the function globally
window.observeImages = observeImages;

// Optional initialization function
window.initializeImageObserver = function(folderPath, numImages) {
    observeImages(folderPath, numImages);
};
