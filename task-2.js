// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

const numbers = [2, -5, 10, -3, 7];

const getSum = (numbers) => {
  let sum = 0;
  numbers.filter((number) => number > 0 && (sum += number));
  return sum;
};

const result = getSum(numbers);
console.log(result);
