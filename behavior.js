// Declare an array of Presidents
// Note 1: Middle names have been added for most or all. Harry Truman's middle name is literally 'S.'
// Note 2: Repeats have been removed (1 or 2 tenures are irrelevant; Grover Cleveland was President twice)
let presidentsArray = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler", "James Knox Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses Simpson Grant", "Rutherford Birchard Hayes", "James Abram Garfield", "Chester Alan Arthur", "Grover Cleveland", "Benjamin Harrison", "William McKinley", "Theodore Roosevelt", "William Howard Taft", "Woodrow Wilson", "Warren Gamaliel Harding", "Calvin Coolidge", "Herbert Clark Hoover", "Franklin Delano Roosevelt", "Harry S Truman", "Dwight David Eisenhower", "John Fitzgerald Kennedy", "Lyndon Baines Johnson", "Richard Milhous Nixon", "Gerald Rudolph Ford", "Jimmy Earl Carter", "Ronald Wilson Reagan", "George Herbert Walker Bush", "Bill Jefferson Clinton", "George Walker Bush", "Barack Hussein Obama", "Donald John Trump", "Joseph Robinette Biden"];

// Map new array with every President's name to lowercase
let presArrToLowerCase = presidentsArray.map(pres => pres.toLowerCase());

// Declare an array of every letter in the English alphabet
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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

// Store a random letter within a variable, then use that same letter until the function is invoked again.
let randLetter;

// Currently receives pushed indices from the presToLowerCase [] that matches a random letter
// I no longer think I need this because the presArrToLowerCase can simply filter itself
// let matchPresArr = [];

// When clicked, hide the intro box and display the game content box
introBtn.addEventListener('click', e => {
    e.preventDefault();
    introText.style.display = 'none';
    gameContent.style.display = 'block';
})

// Then add functionality to it that generates a randomPresident by letter - when clicked/pushed
beginBtn.addEventListener('click', e => {
    e.preventDefault();

    for (count; count < guesses; count++) {
        randLetter = randomLetter();
        let answer = confirm(`Does your President's name contain the letter '${randLetter.toUpperCase()}'?`)
            if (answer) {
                presArrToLowerCase = presArrToLowerCase.filter(president =>
                     president.match(RegExp(randLetter, 'g')));
                console.log(presArrToLowerCase);
            } else {
                presArrToLowerCase = presArrToLowerCase.filter(president =>
                    !president.match(RegExp(randLetter, 'g')));
                console.log(presArrToLowerCase);
            }
            // console.log(answer);
        }
        let compSelection = presArrToLowerCase[Math.floor(Math.random() * presArrToLowerCase.length)];
        compSelection = String(compSelection).split(" ").map(word => word[0].toUpperCase() + word.substr(1)).join(" ");


        let finalAnswer = confirm(`
            Did you pick ${compSelection}?
        `)
        console.log(compSelection);
        console.log(finalAnswer);
    // getPres.innerHTML = matchPresArr[Math.floor(Math.random() * matchPresArr.length)].toUpperCase();
})


// Declare a function that grabs a random letter from the letters array
let randomLetter = () => {
    return letters[Math.floor(Math.random() * letters.length)];
}


// End of game notes -- User might not know that their president's middle name has that letter.
// It might make sense to only include first/last names, or to finish the game highlighting this fact.

// MOST RECENT ToDos: 7/30/2021:
// 1. Comprise random letters out of all the available presidents
//    - This can be done because all Presidents combined have at least 1 of every letter in the alphabet.
//    - let name = ["jonathan", "hammond"] // i.e. every president name
//    - I need to join every president together into one string, possibly like .join(""). ---- name = name.join(""); == "jonathanhammond"
//    - I then need to split every letter within that string into its own string with .split("") ---- name = name.split(""); == ["j", "o"] etc.
//    - I then need to filter every unique string character within that array into a new one. I don't think new Set is the method I want to go down.
// 2. Once I have letters that can be comprised of remaining presidents in an array, I should be able to enhance my random letter search (no z if unnecessary).
// 3. Once I make my letter filter feature, I want to remake a modal of the confirm helper function, to fully control the styles of my layout.
// 4. I might want to make a dropdown too, that can show the User the list of Presidents to imply that I am considering middle names as well.
// 5. I want to add an array of photos that will work for every president, even the presidents I don't like :)
// 6. When I guess a President, I want to plop their name on the screen for one final "yes" or "no". When that happens, a check or an x goes over the image if I am right or wrong.
// 7. I then want to add the "buy me a coffee" button to begin working with donations.
// 8. I then want to offer a refresh button to play again.

// NEXT FUNCTION:
// 1. As  User,
// 2. When I click the 'Begin!' button,
// 3. Then the computer loops 5 times and confirms with the Okay/Cancel functionality:
// 4. "Does your president contain the letter ${letter}?"
        // 5. If the User clicks 'Okay', then I want to filter the President's array with options matching that letter
// 6. If the User clicks 'Cancel', then I want to filter the President's array with options not-matching that letter
// 7. This means that if (true) else (false) should decision tree into two separate functions
// ---------- For example, yesResponse() and noResponse()
// 8. For now, another letter should be randomized from the 26 letters of the English alphabet (array)
// 9. Once we see how this function looks, refactor.
// 10. After the loop ends, there WILL definitely be an array of presidents, even if there is only one option.
// 11. When the game is over, the computer will randomize an index from the final array, and that will be the PC's guess.
// 12. If the User selects Yes, then we win! They should donate $5.
// 13. If the User selects No, then we lose! They should still donate $5.

/*
Todo (later) / PSEUDOCODE:
   1. I want this to be a Presidential guessing game.
   2. I want the User to begin the came by clicking 'Begin!'
   3. When this happens, I want to randomly generate a letter from an array.
   4. I want to write to the screen "Does your President's name contain the letter ${letter}?"
   5. I want two buttons to appear after User begins game: 'Yes' or 'No'
   6. These buttons contain important functionality that decides the contents of future arrays.
   7. Basically, the game starts with an array of every President.
         8. I want the computer to attempt to guess the User's President in 5 turns (or less).
   9. I want to loop and ask the User about their letter 5 times
   10. If the User answers 'yes' to a letter, filter a new array of only the Presidents with that letter.
   11. If the User answers 'no' to a letter, filter a new array of only the Presidents without that letter.
   12. After the fifth time, the array should be relatively smaller - ask the User if it's the first array index.
   13. Ideally, if the filter works well enough, there will only be one index in the array anyway - corret Pres
       14. Note, with each letter guessed, there should be no repeats.
      15. This means I should filter an array each time to elminate the possibility of re-using a letter in 5 turns.
      16. Future Development: Square photos for every president, with alt tags matching their names in the array
      17. Future Dev: When the computer guesses the User's president, let that president photo appear (see Dwight).
      18. Future Dev: This will be a final Yes / No button - if user clicks Yes, a green checkmark over the photo.
      19. Future Dev: If user clicks No, a red X over the photo.
      20. At this point, the game is over, so maybe let a box pop up that asks the user if they want to play again.
      21. If the User chooses to play again, either instruct them to refresh the browser, or button to refresh.

Thought:
   - I bet there is a way to generate an array based off every letter in the Presidents array.
   - Since I want to filter/make new arrays each time anyway, maybe I could have letters based off the array.
   - This might make my selection more enhanced, because then it only chooses from letters remaining in the list of possible Presidents
   - I might need to do this by joining each president in the array into one string, splitting every letter into a string index, then filtering out that way.
   - I need to make a modal containing the same "Yes" or "No" functionality so that I do not use the "confirm" out of the box functionality.

*/