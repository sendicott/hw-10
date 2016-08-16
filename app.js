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
    // -------------------------container-------------------------
    let container = document.createElement('div')
    container.classList.add('person');
    let grandparent = document.querySelector('body');
    grandparent.appendChild(container);
    // -------------------------container-------------------------

    // -------------------------Image-------------------------
    // Randomly choose an index from the array.
    let userImages = ["men/18", "men/1", "men/9", "women/21", "men/26", "men/38", "women/40", "women/42", "women/60", "men/58", "women/3", "women/2", "men/0", "women/72", "women/82", "women/84", "women/85", "women/92"];
    // Math.random() gives us a number from 0-1
    // Multiply it by the lengths of the array to scale it up,
    // then round down.
    let chosen = Math.floor(Math.random() * userImages.length);    
    // Create a new img
    let user = document.createElement('img');
    user.src = "https://randomuser.me/api/portraits/" + userImages[chosen] + ".jpg";
    // Give it a 'block' class
    user.classList.add('block');
    // Adopt
    container.appendChild(user);
    // -------------------------Image-------------------------

    // -------------------------Username-------------------------
    let firstNameArray = ["Alabama", "Arantxa", "Atlas", "Bentlee", "Diem", "Drishti", "Fenella", "Greenlee", "Zerubbabel", "Huxley", "Hephzibah", "Jazz", "Katana", "Bandit", "Rogue", "Nyx", "Tennyson", "Tate", "Twinkle", "Valkyrie", "Zeppelin", "Zowie", "Cedar", "Ferris", "Ace", "Whizdom", "Krithik", "Protoss", "Terran", "Zerg"];
    let secondNameArray = ["Daft", "Smellie", "Shufflebottom", "Dungworth", "Piggs", "Clutterbuck", "Bracegirdle", "Bonefat", "Turtle", "Rattlebag", "Willy", "Gunn", "Abramovich", "Aksyonov", "Akulov", "Dezhnyov", "Dragomirov", "Picklehammer", "Pattie", "Passwater", "Flournoy", "Ledbetter", "Snail", "Plexico", "Lavender", "Engelberger", "Fish", "Tshabalala", "Crackenbush", "Bloomgarden"]
    let randomName1 = Math.floor(Math.random() * firstNameArray.length);
    let randomName2 = Math.floor(Math.random() * secondNameArray.length);
    let name = document.createElement('h2');
    name.textContent = firstNameArray[randomName1] + " " + secondNameArray[randomName2];
    name.classList.add('name');
    container.appendChild(name);
    // -------------------------Username-------------------------

    // -------------------------Buttons-------------------------
    let button1 = document.createElement('button');
    button1.textContent = "Hello";
    container.appendChild(button1);
    button1.addEventListener('click', function () {
        container.classList.add('opaque');
        // let yep = document.createElement('h1');
        // yep.textContent = "Yep!";
        // yep.classList.add('stamp');
        // container.appendChild(yep);
    })

    let button2 = document.createElement('button');
    button2.textContent = "Goodbye";
    container.appendChild(button2);
    button2.addEventListener('click', function () {
        container.classList.add('opaque');
    })


    // -------------------------Buttons-------------------------
    
}


// -------------------------Repeat Creating Users-------------------------
window.addEventListener('load', function () {
    for (let i = 0; i < 1; i++) {
        createUser();
    }

    setInterval(createUser, 2000);
})
// -------------------------Repeat Creating Users-------------------------
