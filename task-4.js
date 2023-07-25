// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

const numbers = [1, 3, 6, 8, 11, 15]; // Array of numbers

// This function returns the indices of the two numbers that add up to the targeted value
const getTwoIndicesNum = (numbers, targetedNumber) => {
  let indicesNumbers = []; // to hold the indices

  // this function will add two numbers and compare the result to the targeted value
  const sum = (a, b, value) => {
    if (a + b === value) {
      return [a, b];
    }
  };

  let secondaryIndex = 0; // for input the second number based on index;

  for (let i = 0; i < numbers.length; i++) {
    for (let i = 0; i < numbers.length; i++) {
      const result = sum(numbers[i], numbers[secondaryIndex], targetedNumber); // calling the sum function with three arguments;

      // checking the indexs of the numbers that returned by the sum function
      if (result?.length === 2) {
        const a = numbers.indexOf(result[0]);
        const b = numbers.indexOf(result[1]);
        indicesNumbers = [b, a]; // Setting the indexes to the indecesNumbers variable that is declared on the top
        break;
      }

      // Increasing the secondaryIndex value if expected data did not find from previous loops
      if (i === numbers.length - 1) {
        secondaryIndex += 1;
      }
    }

    // breaking the loop after getting the indicesNumbers
    if (indicesNumbers.length === 2) {
      break;
    }
  }

  if (indicesNumbers.length < 2) {
    indicesNumbers = "Unavailable Input";
  }

  return indicesNumbers;
};

// calling the getTwoIndicesNum function
const result = getTwoIndicesNum(numbers, 4);
console.log(result);
