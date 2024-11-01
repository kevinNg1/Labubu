// List of Labubu character images, names, and colors
const labubuCharacters = [
    { name: 'Green Grape Labubu', image: 'assets/greengrape.png', color: '#a4a981' },
    { name: 'Lychee Berry Labubu', image: 'assets/lychee.png', color: '#d7909c' },
    { name: 'Sea Salt Coconut Labubu', image: 'assets/seasalt.png', color: '#838e98' },
    { name: 'Sesame Bean Labubu', image: 'assets/sesame.png', color: '#a29994' },
    { name: 'Soy Milk Labubu', image: 'assets/soymilk.png', color: '#dac2a7' },
    { name: 'Toffee Labubu', image: 'assets/toffee.png', color: '#c1a389' },
    { name: 'Oh no you got a Lafufu', image: 'assets/toffee.png', color: 'red' },
];

// Elements from the DOM
const blindBox = document.getElementById('blindBox');
const labubuDisplay = document.getElementById('labubuDisplay');
const labubuName = document.getElementById('labubuName'); // New element for the Labubu name
const openAnotherBtn = document.getElementById('openAnotherBtn');
const tapToReveal = document.getElementById('tapToReveal'); // Paragraph element for tap-to-reveal text

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
        labubuName.style.color = selectedLabubu.color; // Set the color based on Labubu character
        labubuName.classList.remove('hidden');  // Show the Labubu name
        openAnotherBtn.classList.remove('hidden');  // Show the "Open Another?" button

        // Update the "Tap to reveal" text
        tapToReveal.textContent = "You have received..."; // Change text to "You have received..."
        tapToReveal.classList.add('hidden'); // Hide the text after a Labubu is received

        isUnboxing = false;
    }, 600); // Match this delay to the animation duration
}

// Function to reset the display for another unboxing
function resetUnboxing() {
    labubuDisplay.innerHTML = '';         // Clear the displayed Labubu
    labubuName.classList.add('hidden');   // Hide the Labubu name
    blindBox.classList.remove('hidden');  // Show the box again
    openAnotherBtn.classList.add('hidden');  // Hide the "Open Another?" button
    tapToReveal.textContent = "Tap the box to reveal your Labubu!"; // Reset the "Tap to reveal" text
    tapToReveal.classList.remove('hidden'); // Show the "Tap the box..." paragraph again
}

// Add event listeners
blindBox.addEventListener('click', unboxLabubu);
openAnotherBtn.addEventListener('click', resetUnboxing);
