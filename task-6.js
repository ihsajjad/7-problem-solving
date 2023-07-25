// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generatePassord = () => {
  const charsString =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const chars = charsString.split("");

  const passwordLength = 12;

  let passwordArr = [];

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.ceil(Math.random() * charsString.length - 1);
    const randomChar = chars[randomIndex];
    passwordArr.push(randomChar);
  }

  const password = passwordArr.join("");

  return password;
};

const result = generatePassord();

console.log(result);
