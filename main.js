// Numbers
const zero = (operator) => (!operator ? 0 : operator(0));
const one = (operator) => (!operator ? 1 : operator(1));
const two = (operator) => (!operator ? 2 : operator(2));
const three = (operator) => (!operator ? 3 : operator(3));
const four = (operator) => (!operator ? 4 : operator(4));
const five = (operator) => (!operator ? 5 : operator(5));
const six = (operator) => (!operator ? 6 : operator(6));
const seven = (operator) => (!operator ? 7 : operator(7));
const eight = (operator) => (!operator ? 8 : operator(8));
const nine = (operator) => (!operator ? 9 : operator(9));

// Operators
const plus = (a) => (b) => a + b;
const minus = (a) => (b) => a - b;
const multiple = (a) => (b) => a * b;
const devide = (a) => (b) => a / b;
