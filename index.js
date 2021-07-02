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

let currentTitle = "";
let currentContent = "";


// DOM ELements
let titleDOM = document.getElementById("title");
let contentDOM = document.getElementById("note_content");

// When browser has loaded, action to perform
window.addEventListener('load', function() {
    if (notes.length == 0) {
        // Show the get started page if only notes is empty
        showStarted();
    }
})

// Event Listner to track the title of notes
titleDOM.addEventListener('keyup', function(event) {
    currentTitle = event.target.innerText;
})

// Event listners to track the content of the note
contentDOM.addEventListener('keyup', function(event) {
    currentContent = event.target.value;
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

