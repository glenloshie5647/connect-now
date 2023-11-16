/*
Filename: SophisticatedCode.js
Content: Sophisticated JavaScript code for a complex data analysis algorithm.
*/

// Constants
const MAX_ITERATIONS = 10000;
const THRESHOLD = 0.0001;
const DATA_SIZE = 1000;

// Initialize data
const data = [];
for (let i = 0; i < DATA_SIZE; i++) {
  const randomNumber = Math.random();
  data.push(randomNumber);
}

// Function to analyze the data
function analyzeData() {
  let currentSum = 0;
  let previousSum = 0;
  let iteration = 0;

  while (iteration < MAX_ITERATIONS && Math.abs(currentSum - previousSum) > THRESHOLD) {
    previousSum = currentSum;

    for (let i = 0; i < DATA_SIZE; i++) {
      const nextValue = data[i];
      currentSum += nextValue;
    }

    iteration++;
  }

  return currentSum / DATA_SIZE;
}

// Calculate average of the data
const average = analyzeData();

// Output result
console.log(`The average of the data is: ${average}`);

// Function to format the result as a percentage
function formatAsPercentage(value) {
  return `${value * 100}%`;
}

// Calculate range of the data
const range = Math.max(...data) - Math.min(...data);

// Output result
console.log(`The range of the data is: ${range}`);