// app.js

// List of Labubu character images and names
const labubuCharacters = [
    { name: 'Green Grape', image: 'assets/greengrape.png' },
    { name: 'Lychee Berry', image: 'assets/lychee.png' },
    { name: 'Sea Salt Coconut', image: 'assets/seasalt.png' },
    { name: 'Sesame Bean', image: 'assets/sesame.png' },
    { name: 'Soy Milk', image: 'assets/soymilk.png' },
    { name: 'Toffee', image: 'assets/toffee.png' },
];

// Elements from the DOM
const blindBox = document.getElementById('blindBox');
const labubuDisplay = document.getElementById('labubuDisplay');
const labubuName = document.getElementById('labubuName'); // New element for the Labubu name
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

    // Randomly select a Labubu character
    const randomIndex = Math.floor(Math.random() * labubuCharacters.length);
    const selectedLabubu = labubuCharacters[randomIndex];

    // Display the selected Labubu after the spin animation
    setTimeout(() => {
        blindBox.classList.add('hidden');  // Hide the box
        blindBox.classList.remove('quick-spin-3d'); // Remove class after animation
        labubuDisplay.innerHTML = `<img src="${selectedLabubu.image}" alt="${selectedLabubu.name} Character">`;
        labubuName.textContent = selectedLabubu.name; // Display the name of the Labubu
        labubuName.classList.remove('hidden');  // Show the Labubu name
        openAnotherBtn.classList.remove('hidden');  // Show the "Open Another?" button
        isUnboxing = false;
    }, 600); // Match this delay to the animation duration
}

// Function to reset the display for another unboxing
function resetUnboxing() {
    labubuDisplay.innerHTML = '';         // Clear the displayed Labubu
    labubuName.classList.add('hidden');   // Hide the Labubu name
    blindBox.classList.remove('hidden');  // Show the box again
    openAnotherBtn.classList.add('hidden');  // Hide the "Open Another?" button
}

// Add event listeners
blindBox.addEventListener('click', unboxLabubu);
openAnotherBtn.addEventListener('click', resetUnboxing);
