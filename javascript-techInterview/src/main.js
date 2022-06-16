const SMALL_SEPARATOR = '- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -';

function printQuestionTitle(title) {
  console.log(SMALL_SEPARATOR);
  console.log(title);
  console.log(SMALL_SEPARATOR);
}

// PROBLEMS

const problem1Title = 'Question11 (PROBLEM): Find the missing number in a given integer array of 1 to 10';

function problem1() {
  printQuestionTitle(problem1Title);
  const array = [1, 3, 4, 5, 2, 8, 10, 7, 6]; // 9 missed
  console.log('array: ', array);

  // FUN FACT: This option doesn't work because the sorted function set the 10 number in the second position (After 1, before 2)

  // Option 1
  /* const arraySorted = array.sort();
  let pos = 0;
  let numberToFind = pos + 1;
  console.log("arraySorted: ", arraySorted);
  while (numberToFind === arraySorted[pos]) {
    pos += 1;
    numberToFind += 1;
  }
  console.log(`option 1: ${numberToFind}`);
  */

  // Option 2
  let numberToFind = 1;
  let found = false;
  while (!found) {
    if (array.includes(numberToFind)) {
      numberToFind += 1;
    } else {
      found = true;
    }
  }
  console.log('Option 2: ', numberToFind);

  // Option 3
  let number = 1;
  let numberMissedFound = null;
  while (!numberMissedFound) {
    let numberFound = false;
    let pos = 0;
    while (!numberMissedFound && !numberFound && pos <= array.length) {
      if (array[pos] === number) numberFound = true;
      pos += 1;
    }
    if (!numberFound) numberMissedFound = number;
    number += 1;
  }
  console.log('Option 3: ', numberMissedFound);
}
problem1();

const problem2Title = 'Question12 (PROBLEM): Find duplicated number in a given integer array';

function problem2() {
  printQuestionTitle(problem2Title);
  const array = [1, 3, 4, 5, 2, 8, 8, 10, 7, 10, 6, 1];
  console.log('array: ', array);

  const numbersRepetitions = {};
  array.forEach((number) => {
    if (!numbersRepetitions[number]) numbersRepetitions[number] = 0;
    numbersRepetitions[number] += 1;
  });

  const numbersRepeated = Object.keys(numbersRepetitions).filter((key) => numbersRepetitions[key] > 1);
  console.log('numbersRepeated: ', numbersRepeated);
}
problem2();

const problem3Title = 'Question13 (PROBLEM): Return accumulative of an array';

function problem3() {
  printQuestionTitle(problem3Title);
  const array = [1, 5, 10, 8, 20];
  console.log('array: ', array);
  const solution = array.map((number, index) => array.slice(0, index + 1).reduce((total, num) => num + total));
  console.log('solution: ', solution);
}
problem3();

const problem4Title = 'Question14 (PROBLEM): Find nearest number of 21 from a sorted array';

function problem4() {
  printQuestionTitle(problem4Title);
  let array = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const nearestNumber = 21;

  // Option 1
  /* let found = 0;
  while (!found) {
    const midPos = Math.floor(array.length / 2);
    const midValue = array[midPos];
    const midValuePlusOne = array[midPos + 1];

    // nearest number founded
    if (midValue <= nearestNumber && (!midValuePlusOne || midValuePlusOne >= nearestNumber)) {
      // Check which of number is the nearest number
      const midDifference = nearestNumber - midValue;
      const midPlusOneDifference = midValuePlusOne && midValuePlusOne - nearestNumber;
      if (!midPlusOneDifference || midDifference <= midPlusOneDifference) found = midValue;
      else found = midValuePlusOne;
    }

    // reduce array
    if (midValue >= nearestNumber) {
      array = array.splice(0, midPos + 1);
    } else {
      array = array.splice(midPos);
    }
  }
  console.log('Option 1: ', found);
   */

  // Option 2 -> recursive mode
  const getNearestNumber = (arrayToCheck, nearestNumberToCheck) => {
    const midPos = Math.floor(arrayToCheck.length / 2);
    const midValue = arrayToCheck[midPos];
    const midValuePlusOne = arrayToCheck[midPos + 1];

    // Case 0
    if (midValue <= nearestNumberToCheck && (!midValuePlusOne || midValuePlusOne >= nearestNumberToCheck)) {
      // Check which of number is the nearest number
      const midDifference = nearestNumberToCheck - midValue;
      const midPlusOneDifference = midValuePlusOne && midValuePlusOne - nearestNumberToCheck;
      if (!midPlusOneDifference || midDifference <= midPlusOneDifference) return midValue;
      return midValuePlusOne;
    }

    // reduce array
    if (midValue >= nearestNumberToCheck) {
      array = array.splice(0, midPos + 1);
    } else {
      array = array.splice(midPos);
    }
    return getNearestNumber(array, nearestNumberToCheck);
  };
  console.log(' Option 2: ', getNearestNumber(array, nearestNumber));
}
problem4();

// THEORY QUESTIONS

const question1Title = 'Question 1: Equalty';
function question1() {
  printQuestionTitle(question1Title);

  const number = 42;
  const string = '42';
  console.log(`number: ${number}`);
  console.log(`string: "${string}"`);
  console.log(`== -> ${number == string}`);
  console.log(`=== -> ${number === string}`);
}
question1();

// Question 2: bind()
const question2Title = 'Question 2: When to use Bind';
function question2() {
  printQuestionTitle(question2Title);
  console.log('I use it in react to get the context of the class that I want');
}
question2();

const question3Title = 'Question 3: Difference between Object.freeze() vs const';

function question3() {
  printQuestionTitle(question3Title);

  const objectVar1 = { key1: 'value1' };

  console.log('objectVar1: ', JSON.stringify(objectVar1));

  // objectVar1 = {}; -> read only because is a const
  objectVar1.key1 = 'value2';
  console.log('objectVar1: ', JSON.stringify(objectVar1));
  Object.freeze(objectVar1);
  objectVar1.key1 = 'value3';
  console.log('objectVar1: ', JSON.stringify(objectVar1));
  console.log("objectVar1.key1 didn't change to value3 because I wrote the instruction 'Object.freeze(objectVar1);' before ' objectVar1.key1 = 'value3';' ");
}
question3();

const question4Title = 'Question4: booleans';
function question4() {
  printQuestionTitle(question4Title);

  console.log(`"" -> ${Boolean('')}`);
  console.log(`0 -> ${Boolean(0)}`);
  console.log(`null -> ${Boolean(null)}`);
  console.log(`undefined -> ${Boolean(undefined)}`);

  console.log('');

  console.log(`1 -> ${Boolean(1)}`);
  console.log(`[] -> ${Boolean([])}`);
  console.log(`{} -> ${Boolean({})}`);
  console.log(`() => {} -> ${Boolean(() => {})}`);
}
question4();

const question5Title = 'Question5: IIFE';
(function IIFE() {
  printQuestionTitle(question5Title);
  console.log('IIFE');
}());

const question6Title = 'Question6: Wait to execute code';
(function IIFE() {
  printQuestionTitle(question6Title);
  console.log('before timeOut');
  setTimeout(() => {
    console.log(SMALL_SEPARATOR);
    console.log('Savage line appeared! (inside timeOut - question 6)');
    console.log(SMALL_SEPARATOR);
  }, 250);
  console.log('After timeOut');
}());

const question7Title = 'Question7: Class vs function vs array functions';

function question7() {
  printQuestionTitle(question7Title);
  console.log('Class when you need a constructor');
  console.log('function for global scope');
  console.log('Anarchy!!!... it is a joke, everywhere else');
}
question7();

const question8Title = 'Question8: Difference between map and forEach';

function question8() {
  printQuestionTitle(question8Title);
  console.log('Map returns a new list. forEach "only" read the array ');
}
question8();

const question9Title = 'Question9: Async functions';

function question9() {
  printQuestionTitle(question9Title);
  new Promise((resolve, reject) => {
    resolve(10);
    reject(new Error('Error manually throwed'));
  }).then((response) => {
    console.log(SMALL_SEPARATOR);
    console.log(`response question9 (promise): ${response}`);
    console.log(SMALL_SEPARATOR);
  }).catch((error) => {
    console.log(`error: ${error}`);
  });
}
question9();

const question10Title = 'Question10: slice vs splice';

function question10() {
  printQuestionTitle(question10Title);
  const array = [1, 2, 3, 4, 5];
  console.log('array: ', array);
  console.log('array.slice(2,): ', array.slice(2));
  console.log('array: ', array);
  console.log('array.splice(2,): ', array.splice(2));
  console.log('array: ', array);
  console.log('Slice get the elements without extract them of the array');
}
question10();

const question11Title = 'Question11: sort array with objects';

function question11() {
  printQuestionTitle(question11Title);
  const array = [
    { id: 1, name: 'Zaquiel' },
    { id: 6, name: 'Tom' },
    { id: 2, name: 'Martha' },
    { id: 10, name: 'Esther' },
    { id: 8, name: 'Jack' },
  ];
  console.log('array: ', array);
  const arraySorted = array.sort((a, b) => a.id - b.id);
  console.log('arraySorted: ', arraySorted);
}
question11();
