/* 
1. Create a function that creates blocks in JS
2. Create a an Event Listener that will load said function
3. Apply CSS styling to said blocks
4. Make blocks clickable in JS
5. Make blocks turn opaque once clicked in JS
6. Create an array with the different numbers that then builds the URL 
7. Create and insert new block into the DOM.
*/

function createUser() {

    // Randomly choose an index from the array.
    let userImages = ["men/18", "women/21", "men/22", "men/25", "men/42", "men/58", "men/3", "men/2", "men/0", "men/26", "women/1", "women/72", "women/92", "women/82", "women/38", "women/84", "women/85", "women/40", "women/52", "women/9"];
    // Math.random() gives us a number from 0-1
    // Multiply it by the lengths of the array to scale it up,
    // then round down.
    let chosen = Math.floor(Math.random() * userImages.length);    
    // Create a new img
    let user = document.createElement('img');
    user.src = "https://randomuser.me/api/portraits/" + userImages[chosen] + ".jpg";
    // Give it a 'block' class
    user.classList.add('block');
    // Find a parent
    let parent = document.querySelector('body');
    // Adopt
    parent.appendChild(user);
}

window.addEventListener('load', function () {
    for (let i = 0; i < 1; i++) {
        createUser();
    }

    setInterval(createUser, 100000);
})