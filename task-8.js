// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const array = [1, 3, 4, 5, 9];

const findSecondSmallestNum = (array) => {
  let secondSmallestNum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    secondSmallestNum = element;
    console.log(element);
    if (secondSmallestNum > element) {
      secondSmallestNum = element;
    } else {
    }
  }
  console.log(secondSmallestNum);
};

findSecondSmallestNum(array);
