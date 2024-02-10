const readline = require('readline');
const fs = require('fs'); // for file operations

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to load questions from a JSON file
function loadQuestionsFromFile(filePath) {
    try {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading file:', err);
        return [];
    }
}

// Function to ask questions
function askQuestion(question, options) {
    console.log(question);
    options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });

    return new Promise((resolve, reject) => {
        rl.question('Enter your choice: ', (answer) => {
            const choice = parseInt(answer);
            if (isNaN(choice) || choice < 1 || choice > options.length) {
                console.log("Invalid choice. Please enter a valid number.");
                reject("Invalid choice");
            } else {
                resolve(choice - 1); // Subtract 1 to match array index
            }
        });
    });
}

// Function to run the quiz
async function runQuiz(questions) {
    let score = 0;
    const totalQuestions = questions.length;

    for (let i = 0; i < totalQuestions; i++) {
        const question = questions[i];
        const userChoice = await askQuestion(question.question, question.options);
        const correctAnswerIndex = question.options.findIndex(option => option === question.answer);

        if (userChoice === correctAnswerIndex) {
            console.log("Correct!");
            score++;
        } else {
            console.log("Incorrect! The correct answer is:", question.answer);
        }
    }

    console.log("Quiz complete!");
    console.log("Your final score is:", score, "out of", totalQuestions);
    rl.close();
}

// Main function
function main() {
    const questionsFilePath = "question.json"; // Change file path accordingly
    const questions = loadQuestionsFromFile(questionsFilePath);

    if (questions.length === 0) {
        console.log("No questions found. Exiting...");
        rl.close();
        return;
    }

    runQuiz(questions);
}

main();
