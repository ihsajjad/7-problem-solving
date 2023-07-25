// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

// Example Input: "hello world" Example Output: "dlrow olleh"

const reverseString = (string) => {
  const chars = string.split("");

  let reversedChars = [];

  for (let i = chars.length; i >= 0; i--) {
    const element = chars[i];
    reversedChars.push(element);
  }

  const reversedString = reversedChars.join("");
  return reversedString;
};

const result = reverseString("hello world");
console.log(result); // Out put : dlrow olleh
