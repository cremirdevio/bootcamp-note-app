// Note

// - title
// - content
// - timestamp

// Data Structure

// - Json Object 
// - Array

// Data
// Stores the note object
let notes = [];

// When browser has loaded, action to perform
window.addEventListener('load', function() {
    if (notes.length == 0) {
        // Show the get started page if only notes is empty
        showStarted();
    }
})

// Function to hide the get started page
function getStarted() {
    let starter = document.getElementsByClassName("starter")[0]
    starter.style.visibility = "hidden";
}

// Function to show the get started page
function showStarted() {
    let starter = document.getElementsByClassName("starter")[0]
    starter.style.visibility = "visible";
}

