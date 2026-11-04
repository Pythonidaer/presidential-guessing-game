const presidents = [
    "George Washington",
    "John Adams",
    "Thomas Jefferson",
    "James Madison Jr.",
    "James Monroe",
    "John Quincy Adams",
    "Andrew Jackson",
    "Martin Van Buren",
    "William Henry Harrison",
    "John Tyler",
    "James Knox Polk",
    "Zachary Taylor",
    "Millard Fillmore",
    "Franklin Pierce",
    "James Buchanan Jr.",
    "Abraham Lincoln",
    "Andrew Johnson",
    "Ulysses S. Grant",
    "Rutherford Birchard Hayes",
    "James Abram Garfield",
    "Chester Alan Arthur",
    "Stephen Grover Cleveland",
    "Benjamin Harrison",
    "William McKinley Jr.",
    "Theodore Roosevelt Jr.",
    "William Howard Taft",
    "Thomas Woodrow Wilson",
    "Warren Gamaliel Harding",
    "John Calvin Coolidge Jr.",
    "Herbert Clark Hoover",
    "Franklin Delano Roosevelt",
    "Harry S. Truman",
    "Dwight David Eisenhower",
    "John Fitzgerald Kennedy",
    "Lyndon Baines Johnson",
    "Richard Milhous Nixon",
    "Gerald Rudolph Ford Jr.",
    "James Earl Carter Jr.",
    "Ronald Wilson Reagan",
    "George Herbert Walker Bush",
    "William Jefferson Clinton",
    "George Walker Bush",
    "Barack Hussein Obama II",
    "Donald John Trump",
    "Joseph Robinette Biden Jr."
].map((displayName, id) => ({
    id,
    displayName,
    searchName: displayName.toLowerCase().replace(/[^a-z]/g, "")
}));

const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
const totalQuestions = 6;

const intro = document.getElementById("intro-text");
const game = document.getElementById("game-content");
const referenceSelect = document.getElementById("president-reference");
const startButton = document.getElementById("start-btn");
const progress = document.getElementById("progress");
const question = document.getElementById("question");
const remaining = document.getElementById("remaining");
const answerActions = document.getElementById("answer-actions");
const resultActions = document.getElementById("result-actions");
const resultMessage = document.getElementById("result-message");
const playAgainButton = document.getElementById("play-again-btn");

let candidates = [];
let availableLetters = [];
let currentLetter = "";
let questionsAsked = 0;

presidents.forEach(({ displayName }) => {
    const option = document.createElement("option");
    option.textContent = displayName;
    // The value only enables the start button; it is never read by the game.
    option.value = "confirmed";
    referenceSelect.append(option);
});

referenceSelect.addEventListener("change", () => {
    startButton.disabled = referenceSelect.value === "";
});

startButton.addEventListener("click", startGame);
document.getElementById("yes-btn").addEventListener("click", () => answerQuestion(true));
document.getElementById("no-btn").addEventListener("click", () => answerQuestion(false));
document.getElementById("correct-btn").addEventListener("click", () => finishGame(true));
document.getElementById("incorrect-btn").addEventListener("click", () => finishGame(false));
playAgainButton.addEventListener("click", resetGame);

function startGame() {
    candidates = [...presidents];
    availableLetters = [...alphabet];
    questionsAsked = 0;
    resultMessage.textContent = "";
    playAgainButton.hidden = true;
    resultActions.hidden = true;
    answerActions.hidden = false;
    intro.hidden = true;
    game.hidden = false;
    askNextQuestion();
}

function askNextQuestion() {
    if (candidates.length <= 1 || questionsAsked === totalQuestions) {
        showGuess();
        return;
    }

    currentLetter = chooseBestLetter(
        candidates,
        availableLetters,
        totalQuestions - questionsAsked
    );

    if (!currentLetter) {
        showGuess();
        return;
    }

    questionsAsked += 1;
    progress.textContent = `Question ${questionsAsked} of ${totalQuestions}`;
    question.textContent =
        `Does the full name contain the letter “${currentLetter.toUpperCase()}”?`;
    remaining.textContent =
        `${candidates.length} possible ${candidates.length === 1 ? "president" : "presidents"} remain.`;
}

function answerQuestion(answerIsYes) {
    candidates = candidates.filter(({ searchName }) =>
        searchName.includes(currentLetter) === answerIsYes
    );
    availableLetters = availableLetters.filter(letter => letter !== currentLetter);

    if (candidates.length === 0) {
        showInconsistentAnswers();
        return;
    }

    askNextQuestion();
}

/*
 * Minimax decision tree:
 * Try every useful letter and choose the one that produces the smallest
 * possible worst-case group after all remaining questions.
 */
function chooseBestLetter(candidateSet, letters, depth) {
    const memo = new Map();

    function solve(currentCandidates, currentLetters, questionsLeft) {
        if (questionsLeft === 0 || currentCandidates.length <= 1) {
            return { worstCase: currentCandidates.length, letter: null };
        }

        const key = [
            questionsLeft,
            currentCandidates.map(candidate => candidate.id).join(","),
            currentLetters.join("")
        ].join("|");

        if (memo.has(key)) {
            return memo.get(key);
        }

        const theoreticalBest = Math.ceil(
            currentCandidates.length / (2 ** questionsLeft)
        );
        let best = { worstCase: currentCandidates.length, letter: null };

        for (const letter of currentLetters) {
            const yes = currentCandidates.filter(candidate =>
                candidate.searchName.includes(letter)
            );
            const no = currentCandidates.filter(candidate =>
                !candidate.searchName.includes(letter)
            );

            if (yes.length === 0 || no.length === 0) {
                continue;
            }

            const nextLetters = currentLetters.filter(item => item !== letter);
            const worstCase = Math.max(
                solve(yes, nextLetters, questionsLeft - 1).worstCase,
                solve(no, nextLetters, questionsLeft - 1).worstCase
            );

            if (worstCase < best.worstCase) {
                best = { worstCase, letter };
            }

            if (best.worstCase === theoreticalBest) {
                break;
            }
        }

        memo.set(key, best);
        return best;
    }

    return solve(candidateSet, letters, depth).letter;
}

function showGuess() {
    const guess = candidates[0];
    answerActions.hidden = true;
    resultActions.hidden = false;
    progress.textContent = "My guess";
    remaining.textContent =
        candidates.length > 1
            ? `Your answers left ${candidates.length} possible presidents.`
            : "";
    question.textContent = guess
        ? `Did you choose ${guess.displayName}?`
        : "I could not find a matching president.";
}

function showInconsistentAnswers() {
    answerActions.hidden = true;
    progress.textContent = "No match";
    question.textContent = "Those answers do not match any name in the list.";
    remaining.textContent = "Check the full spelling and try again.";
    resultMessage.textContent = "";
    playAgainButton.hidden = false;
}

function finishGame(wasCorrect) {
    resultActions.hidden = true;
    resultMessage.textContent = wasCorrect
        ? "Success! The decision tree found your president."
        : "You win! Double-check that every answer included the middle name and suffix.";
    playAgainButton.hidden = false;
}

function resetGame() {
    game.hidden = true;
    intro.hidden = false;
    referenceSelect.selectedIndex = 0;
    startButton.disabled = true;
}
