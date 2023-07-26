// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (a, b, operator) => {
  let result =
    (operator === "+" && a + b) ||
    (operator === "*" && a * b) ||
    (operator === "-" && a - b) ||
    (operator === "/" && a / b);

  return result;
};

const result = calculator(5, 5, "*");
console.log(result);
