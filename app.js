// app.js

// List of Labubu character images
const labubuImages = [
    'assets/greengrape.png',
    'assets/lychee.png',
    'assets/seasalt.png',
    'assets/sesame.png',
    'assets/soymilk.png',
    'assets/toffee.png',
];

// Elements from the DOM
const blindBox = document.getElementById('blindBox');
const labubuDisplay = document.getElementById('labubuDisplay');
const openAnotherBtn = document.getElementById('openAnotherBtn');

// Flag to prevent multiple clicks during the unboxing animation
let isUnboxing = false;

// Function to reveal a random Labubu character
function unboxLabubu() {
    if (isUnboxing) return;

    // Set the unboxing state to true
    isUnboxing = true;

    // Add the quick-spin-3d class to trigger the fast cartoon-style spin animation
    blindBox.classList.add('quick-spin-3d');

    // Randomly select a Labubu image
    const randomLabubu = labubuImages[Math.floor(Math.random() * labubuImages.length)];

    // Display the selected Labubu after the spin animation
    setTimeout(() => {
        blindBox.classList.add('hidden');  // Hide the box
        blindBox.classList.remove('quick-spin-3d'); // Remove class after animation
        labubuDisplay.innerHTML = `<img src="${randomLabubu}" alt="Labubu Character">`;
        openAnotherBtn.classList.remove('hidden');  // Show the "Open Another?" button
        isUnboxing = false;
    }, 600); // Match this delay to the animation duration
}

// Function to reset the display for another unboxing
function resetUnboxing() {
    labubuDisplay.innerHTML = '';         // Clear the displayed Labubu
    blindBox.classList.remove('hidden');  // Show the box again
    openAnotherBtn.classList.add('hidden');  // Hide the "Open Another?" button
}

// Add event listeners
blindBox.addEventListener('click', unboxLabubu);
openAnotherBtn.addEventListener('click', resetUnboxing);
