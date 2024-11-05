import './styles.css'; // Import CSS

import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

// Function to initialize the application
function init() {
    const contentDiv = document.getElementById('content');

    // Load the home page by default
    loadHome(contentDiv);

    // Add event listeners for tab switching
    document.getElementById('home').addEventListener('click', () => {
        contentDiv.innerHTML = ''; // Clear current content
        loadHome(contentDiv); // Load home content
    });

    document.getElementById('menu').addEventListener('click', () => {
        contentDiv.innerHTML = ''; // Clear current content
        loadMenu(contentDiv); // Load menu content
    });

    document.getElementById('contact').addEventListener('click', () => {
        contentDiv.innerHTML = ''; // Clear current content
        loadContact(contentDiv); // Load contact content
    });
}

// Run the initialization function
init();
