let operation = prompt("Enter operation (+, -, *, /):");
let number1 = Number(prompt("Enter first number:"));
let number2 = Number(prompt("Enter second number:"));
let result;

if (operation === "+") {
    result = number1 + number2;
} else if (operation === "-") {
    result = number1 - number2;
} else if (operation === "*") {
    result = number1 * number2;
} else if (operation === "/") {
    result = number1 / number2;
} else {
    result = "Invalid Operation";
}

console.log("Result:", result);

document.getElementById("op").textContent = "Operation: " + operation;
document.getElementById("n1").textContent = "Number 1: " + number1;
document.getElementById("n2").textContent = "Number 2: " + number2;
document.getElementById("result").textContent = "Result: " + result;
let mark = Number(prompt("Enter your mark:"));
let grade;

if (mark < 50) {
    grade = "FAIL";
}
else if (mark >= 50 && mark <= 59) {
    grade = "D";
}
else if (mark >= 60 && mark <= 69) {
    grade = "C";
}
else if (mark >= 70 && mark <= 79) {
    grade = "B";
}
else if (mark >= 80 && mark <= 89) {
    grade = "A";
}
else if (mark >= 90 && mark <= 100) {
    grade = "A+";
}
else {
    grade = "Invalid Mark";
}

console.log("Your Grade is:", grade);
document.write("Your Grade is: " + grade);

