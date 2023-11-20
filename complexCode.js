/*
 * Filename: complexCode.js
 * Description: A complex code example showcasing various sophisticated JavaScript concepts and techniques.
 */

// Global variables
const PI = 3.14159265359;
let counter = 0;

// Function to calculate the nth Fibonacci number using recursion
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// A class representing a complex number
class ComplexNumber {
  constructor(realPart, imaginaryPart) {
    this.real = realPart;
    this.imaginary = imaginaryPart;
  }

  add(otherComplex) {
    const real = this.real + otherComplex.real;
    const imaginary = this.imaginary + otherComplex.imaginary;
    return new ComplexNumber(real, imaginary);
  }

  multiply(otherComplex) {
    const real =
      this.real * otherComplex.real - this.imaginary * otherComplex.imaginary;
    const imaginary =
      this.real * otherComplex.imaginary + this.imaginary * otherComplex.real;
    return new ComplexNumber(real, imaginary);
  }
}

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// An array of strings representing programming languages
const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "Go",
  "Rust",
];

// Function to sort an array in descending order
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

// Function to calculate the sum of squares of numbers
function sumOfSquares(...numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

// Function to generate a random integer between min (inclusive) and max (inclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Callback function for an API request
function apiCallback(response) {
  if (response.status === 200) {
    console.log("API request succeeded.");
  } else {
    console.log("API request failed!");
  }
}

// Generator function to generate a sequence of numbers
function* numberGenerator() {
  let num = 1;
  while (true) {
    yield num++;
  }
}

// Custom error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// Function with async/await to fetch data from an API
async function fetchDataFromAPI(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Main function
function main() {
  console.log("Starting the program...");

  // Use various complex functionalities

  const fibNumber = fibonacci(10);
  console.log(`Fibonacci number at index 10: ${fibNumber}`);

  const complexNum1 = new ComplexNumber(2, 3);
  const complexNum2 = new ComplexNumber(-1, 4);
  const complexSum = complexNum1.add(complexNum2);
  console.log(
    `Sum of complex numbers ${complexNum1.real} + ${complexNum1.imaginary}i and ${complexNum2.real} + ${complexNum2.imaginary}i: ${complexSum.real} + ${complexSum.imaginary}i`
  );

  const factNumber = factorial(6);
  console.log(`Factorial of 6: ${factNumber}`);

  const sortedLanguages = sortDescending(programmingLanguages);
  console.log("Languages sorted in descending order:", sortedLanguages);

  const sumSquares = sumOfSquares(2, 3, 4, 5);
  console.log("Sum of squares:", sumSquares);

  const randomNum = getRandomInteger(1, 100);
  console.log("Random number:", randomNum);

  const numbers = numberGenerator();
  console.log("Generated numbers:");
  for (let i = 0; i < 5; i++) {
    console.log(numbers.next().value);
  }

  throw new CustomError("Something went wrong!");

  fetchDataFromAPI("https://api.example.com/data", apiCallback);

  console.log("Program execution completed.");
}

// Execute the main function
main();