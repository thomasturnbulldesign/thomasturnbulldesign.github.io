// script.js

// Predefined list of URLs
const urlList = [
    "https://thomasturnbulldesign.com/",
    "https://thomasturnbulldesign.com/hairdryers/"
    // Add more URLs as needed
];

let lastUrl = null;

// Function to hide the overlay
function hideOverlay() {
    const iframe = document.querySelector('.window-content iframe');
    iframe.src = ''; // Clear the iframe source
    document.getElementById('overlay').style.display = 'none';
}

// Function to show the overlay and set a new URL
function showOverlay() {
    setRandomIframeSrc();
    document.getElementById('overlay').style.display = 'flex';
}

// Function to select a random URL from the list
function getRandomUrl() {
    let randomIndex;
    let randomUrl;
    
    do {
        randomIndex = Math.floor(Math.random() * urlList.length);
        randomUrl = urlList[randomIndex];
    } while (randomUrl === lastUrl);

    lastUrl = randomUrl;
    return randomUrl;
}

// Function to set the random URL in the iframe
function setRandomIframeSrc() {
    const randomUrl = getRandomUrl();
    const iframe = document.querySelector('.window-content iframe');
    iframe.src = randomUrl;
}
