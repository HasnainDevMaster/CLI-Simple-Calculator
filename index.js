import inquirer from "inquirer";
import chalk from "chalk";
async function performCalculation() {
    let continueCalculation = true;
    while (continueCalculation) {
        // Prompt the user for input
        const answer = await inquirer.prompt([
            {
                message: chalk.blue("Enter the first number:"),
                type: "input", // Change type to "input"
                name: "firstNumber",
                validate: (input) => {
                    const parsedNumber = parseFloat(input);
                    if (isNaN(parsedNumber)) {
                        return "Please enter a valid number.";
                    }
                    return true;
                },
            },
            {
                message: chalk.blue("Enter the second number:"),
                type: "input", // Change type to "input"
                name: "secondNumber",
                validate: (input) => {
                    const parsedNumber = parseFloat(input);
                    if (isNaN(parsedNumber)) {
                        return "Please enter a valid number.";
                    }
                    return true;
                },
            },
            {
                message: chalk.blue("Select an operator to perform the action:"),
                type: "list",
                name: "operator",
                choices: ["Addition", "Subtraction", "Multiplication", "Division"],
            },
        ]);
        // Perform the calculation based on the selected operator
        let result;
        switch (answer.operator) {
            case "Addition":
                result = answer.firstNumber + answer.secondNumber;
                break;
            case "Subtraction":
                result = answer.firstNumber - answer.secondNumber;
                break;
            case "Multiplication":
                result = answer.firstNumber * answer.secondNumber;
                break;
            case "Division":
                result = answer.firstNumber / answer.secondNumber;
                break;
            default:
                console.log(chalk.red("Please select a valid operator."));
                continue; // Ask for input again
        }
        // Display the result
        console.log(chalk.yellow("Result:"), result);
        // Ask if the user wants to continue
        const { continueAction } = await inquirer.prompt([
            {
                message: chalk.blue("Do you want to perform another calculation? (yes/no)"),
                type: "confirm",
                name: "continueAction",
            },
        ]);
        continueCalculation = continueAction;
    }
    console.log(chalk.green("Thank you for using the calculator!"));
}
performCalculation();
