// Define the image directories and their respective image counts
const imageDirectories = {
    cad: 47,
    experimental: 78,
    hairdryers: 294,
    projectors: 142,
    sketches: 21,
    stihl: 21
};

let lastImage = null;

// Function to hide the overlay
function hideOverlay() {
    const img = document.querySelector('#fit-image');
    img.src = ''; // Clear the image source
    document.getElementById('overlay').style.display = 'none';
}

// Function to show the overlay and set a new random image
function showOverlay() {
    setRandomImageSrc();
    document.getElementById('overlay').style.display = 'flex';
}

// Function to select a random image from the directories
function getRandomImage() {
    let randomDir;
    let randomIndex;
    let randomImage;

    do {
        // Get a random directory
        const dirs = Object.keys(imageDirectories);
        randomDir = dirs[Math.floor(Math.random() * dirs.length)];
        
        // Get a random image index within the directory
        const maxImages = imageDirectories[randomDir];
        randomIndex = Math.floor(Math.random() * maxImages) + 1;
        
        // Construct the image path
        randomImage = `../image/${randomDir}/${randomIndex}.jpg`;
    } while (randomImage === lastImage);

    lastImage = randomImage;
    return randomImage;
}

// Function to set the random image in the img tag
function setRandomImageSrc() {
    const randomImage = getRandomImage();
    const img = document.querySelector('#fit-image');
    img.src = randomImage;
}