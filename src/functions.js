function capitalise(string) {
  string = string.toUpperCase();
  string.substring(1).toLowerCase();
}

function reverseString(string) {
  let stringArray = string.split("");
  let reverseArray = [];
  for (let letter in stringArray) {
    reverseArray.push(letter);
  }
  string = "";
  for (let reversedLetter in reverseArray) {
    string += reversedLetter;
  }
  return string;
}

// Calculator calcuator = new Calculator();

let calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
};

function caeserCipher(string, shiftFactor) {
  let toReturn = "";
  const alphabet = [
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
  ];
  let stringArray = string.split("");
  for (let letter in stringArray) {
    for (let i = 0; i < alphabet.length; i++) {
      if (letter === alphabet[i]) {
        if (i + shiftFactor != alphabet.length) {
          letter = alphabet[i + shiftFactor];
        } else {
          let excessShift = i + shiftFactor - alphabet.length;
          letter = alphabet(excessShift);
        }
        toReturn += letter;
      }
    }
  }
}

function analyseArray(numberArray) {
  let total = 0;
  let averageNum = 0;
  let minNumber = 999999;
  let maxNumber = 0;
  let lengthOfArray = numberArray.length;
  for (let number in numberArray) {
    total = total + number;
    if (number < minNumber) {
      minNumber = number;
    }
    if (number > maxNumber) {
      maxNumber = number;
    }
  }
  averageNum = total / length;

  const expectedObject = {
    average: averageNum,
    min: minNumber,
    max: maxNumber,
    length: lengthOfArray,
  };
}
