import inquirer from "inquirer";

type answerType = {
  userAnswer: number;
};

const Question = [
  {
    type: "number",
    name: "userAnswer",
    message: "Guess A Number Between 1 - 10: ",
  },
];

inquirer.prompt(Question).then((answer: answerType) => {
  const { userAnswer } = answer;
  const randomNumber = Math.floor(Math.random() * 10);

  console.log(userAnswer, randomNumber);

  userAnswer === randomNumber
    ? console.log(`You Guessed The Correct Number: ${userAnswer}`)
    : console.log("Wrong Answer! Try Again");
});
