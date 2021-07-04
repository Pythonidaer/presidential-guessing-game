// Declare an array of Presidents
// Note 1: Middle names have been added for most or all. Harry Truman's middle name is literally 'S.'
// Note 2: Repeats have been removed (1 or 2 tenures are irrelevant; Grover Cleveland was President twice)
let presidentsArray = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler", "James Knox Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses Simpson Grant", "Rutherford Birchard Hayes", "James Abram Garfield", "Chester Alan Arthur", "Grover Cleveland", "Benjamin Harrison", "William McKinley", "Theodore Roosevelt", "William Howard Taft", "Woodrow Wilson", "Warren Gamaliel Harding", "Calvin Coolidge", "Herbert Clark Hoover", "Franklin Delano Roosevelt", "Harry S Truman", "Dwight David Eisenhower", "John Fitzgerald Kennedy", "Lyndon Baines Johnson", "Richard Milhous Nixon", "Gerald Rudolph Ford", "Jimmy Earl Carter", "Ronald Wilson Reagan", "George Herbert Walker Bush", "Bill Jefferson Clinton", "George Walker Bush", "Barack Hussein Obama", "Donald John Trump", "Joseph Robinette Biden"];

// Map new array with every President's name to lowercase
let presArrToLowerCase = presidentsArray.map(pres => pres.toLowerCase());

// Declare an array of every letter in the English alphabet
// let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
// Get the test Element I want to write the President to
let getPres = document.getElementById("write-president");

// Capture the content of our game (introduction, then the game itself)
let introText = document.getElementById("intro-text");
let gameContent = document.getElementById('game-content');
gameContent.style.display = 'none';

// Grab id of 'Begin!' start button
let beginBtn = document.getElementById("start-btn");

// Grad id of 'START GAME' button
let introBtn = document.getElementById('intro-btn');


// set count to 0 so the computer guesses 5 times (asks 5 questions - those questions are 5 "random" letters)
let count = 0;
// set guesses to 5 so the computer prompts the User to confirm Y/N 5 times when 'startGameBtn' is clicked
let guesses = 5;

// When clicked, hide the intro box and display the game content box
introBtn.addEventListener('click', e => {
    e.preventDefault();
    introText.style.display = 'none';
    gameContent.style.display = 'block';
})

// // Transform a string into an object of unique letters from the above array, then spread them into an array
const getUniqueLetters = (array) =>  [...new Set(array)].sort();

// This will clean an array, turn it into one string with no special characters
// Assign it to a new array, then that new array will be spread into individual characters, stripped of all duplicates
const randomEnhancer = (array, array2) => {
    array = array2.join("").replace(/ /g, '');
    array = getUniqueLetters(array)
    return array;
}



// This becomes re-assignable array of remaining letters within the updated presidential array.
let letters;

// Basically, compare array 1 to array 2. These will contain letters/string characters. 
// For the length of the second array, filter the first array so that it does not contain any letters from the second array.
let filterUsedLetters = (array, array2) => {
    for (let j = 0; j < array2.length; j++) {
        array = array.filter(arr => 
            !arr.match(RegExp(array2[j], 'g')));
    }
}

// 
let usedLetters = [];

// Declare a function that grabs a random letter from the letters array
let randomLetter = (array, array2) => {
    filterUsedLetters(array, array2)
    return array[Math.floor(Math.random() * array.length)];
}


// This begins the game, that will loop for n amount of guesses (see above), and filter an array of remaining options each time
beginBtn.addEventListener('click', e => {
    e.preventDefault();



    for (count; count < guesses; count++) {
        letters = randomEnhancer(letters, presArrToLowerCase);
        let randLetter = randomLetter(letters, usedLetters);
        usedLetters.push(randLetter);
        let answer = confirm(`Does your President's name contain the letter '${randLetter.toUpperCase()}'?`)
        if (answer) {
            presArrToLowerCase = presArrToLowerCase.filter(president =>
                president.match(RegExp(randLetter, 'g')));
                randomEnhancer(letters, presArrToLowerCase);
            } else {
                presArrToLowerCase = presArrToLowerCase.filter(president =>
                    !president.match(RegExp(randLetter, 'g')));
                randomEnhancer(letters, presArrToLowerCase);
            }
            
        }

        let compSelection = presArrToLowerCase[Math.floor(Math.random() * presArrToLowerCase.length)];
        compSelection = String(compSelection).split(" ").map(word => word[0].toUpperCase() + word.substr(1)).join(" ");

        let finalAnswer = confirm(`
            Did you pick ${compSelection}?
        `)
        // console.log(compSelection);
        // console.log(finalAnswer);
    getPres.innerHTML = compSelection.toUpperCase();
})

// Look at below instructions for populating the dropdown with presidents array (capitalized)
/*
                    <!-- Get select by #id -->
                    <!-- Create option with value attribute -->
                    <!-- For each president in array, make an option element -->
                    <!-- Place value of index within html as well as value value -->


*/



// End of game notes -- User might not know that their president's middle name has that letter.
// It might make sense to only include first/last names, or to finish the game highlighting this fact.


// TO DO:
// 1. Make a dropdown of all the presidents, just to show the user their options.
// 2.   --- Look up how to write values into a dropdown from JavaScript.
// 3. Once this language is updated, add that middle names are used per Letty's observation.
// 4. Recreate the 'confirm' functionality into a custom modal. Maybe look up how to make one from scratch, since I am not using a library?
// 5. Once more clarifications have been made, I need to test this out with some people, double check the filters, and update future developments.
// 6. Buy me a coffee:
// 7.    --- If the User selects Yes, then we win! They should donate $5.
// 8.    --- If the User selects No, then we lose! They should still donate $5.
// 9. Find 40+ pictures for each president that shows their face in a shape similar to the placeholder now (Ike). Make this appear for every compGuess (1 per game).
// 10. Add functionality that prompts user to click yes or no, then add a green checkmark or X on the photo. When game is over, maybe hide the content box.
// 11. After User confirms I was right or wrong, hide photo (especially if it's wrong!). Ask User to play again, and make the "buy me a coffee" button appear.
// 12. If the User chooses to play again, either instruct them to refresh the browser, or button to refresh.
// 13. Future dev: re-visit sorting algorithms - there is definitely a way to enhance this further, but I think it's diminished returns for now.

/* =====================
NOTES ON THE LETTER FILTER FEATURE
Apparently there are three ways I can try to do this:

const someArray = ['a', 'b', 'b', 'c', 'd', 'a', 'd']

1. const getUniqueValues = (array) => (
    array.filter((currentValue, index, arr) => (
        arr.indexOf(currentValue) === index
    ))
);

getUniqueValues(someArray);

2. const getUniqueValues = (array) => (
    array.reduce((acc, currentValue) => (
        acc.includes(currentValue) ? acc : [...acc, currentValue]
    ), [])
);

getUniqueValues(someArray);

3. const getUniqueValues = (array) => (
    [...new Set(array)]
);

getUniqueValues(someArray);

======================= */