// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (a, b, operator) => {
  const result = a + operator === "-" && -b;
  console.log(parseInt(result));
};

calculator(5, 5, "+");
