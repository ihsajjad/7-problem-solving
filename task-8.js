// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const array = [8, 3, 3, 4, 9];
const findSecondSmallestNum = (array) => {
  let smallestNum = array[0];
  let secondSmallestNum = array[0];

  // getting the smallest number
  for (const element of array) {
    if (smallestNum > element) {
      smallestNum = element;
    }
  }

  // getting the second smallest number
  for (const element of array) {
    if (smallestNum < element && secondSmallestNum > element) {
      secondSmallestNum = element;
    }
  }
  return secondSmallestNum;
};

const result = findSecondSmallestNum(array); // Output: 4
console.log(result);
