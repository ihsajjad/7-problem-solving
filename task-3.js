// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];

const getMostFrequent = (array) => {
  let elementCounts = [];

  array.forEach((element) => {
    elementCounts[element] = (elementCounts[element] || 0) + 1;
  });

  let mostFrequentElement = null;
  let highestFrequency = 0;
  for (const element in elementCounts) {
    if (elementCounts[element] > highestFrequency) {
      highestFrequency = elementCounts[element];
      mostFrequentElement = element;
    }
  }

  console.log(elementCounts, mostFrequentElement);
};

getMostFrequent(array);
