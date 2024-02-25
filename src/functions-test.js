const capitalise = require("./capitalize");

test("return first letter capitalised", () => {
  expect(capitalise("james").toBe("James"));
});

const reverseString = require("./reverseString");

test("james -> semaj", () => {
  expect(reverseString("james").toBe("semaj"));
});

const calculator = require("./calculator");

test("calculator", () => {
  test("add", () => {
    expect(calculator.add(5, 3).toBe(8));
  });
  test("subtract", () => {
    expect(calculator.subtract(5, 3).toBe(2));
  });
  test("divide", () => {
    expect(calculator.divide(6, 3).toBe(2));
  });
  test("multiply", () => {
    expect(calculator.multiply(6, 3).toBe(18));
  });
});

const caeserCipher = require("./caeserCipher");

test("caeserCipher", () => {
  expect(caeserCipher("james", "6").toBe("pgsky"));
});

const analyseArray = require("./analyseArray");
const expectedObject = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

test("analyseArray", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6]).toBe(expectedObject));
});
