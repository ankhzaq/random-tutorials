'use strict';

import User from './features/privateProperties';
// import awaitTop from './features/awaiTop';

function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
}

counter();

// FIRST FEATURE -> '#' symbols makes a variable or method private, so you can't access to those private variables/methods out of the file.

const user = new User("zaquielverse@gmail.com");

// console.log(user.#id === 1); // this line throw an error because #id is a private variable
// console.log(user.#checkEmailIsDefined("zaquielverse@gmail.com")); // this line throw an error because #checkEmailIsDefined is a private method

console.log(user.email); // This line is correct because email is a public variable.

//SECOND FEATURE -> you can use await outside of async function

const response = await fetch("https://reqres.in/api/users?api=1");

const json = await response.json();
console.log(json);


