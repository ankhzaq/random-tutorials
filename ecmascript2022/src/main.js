'use strict';

import User from './features/privateProperties';

function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
}

counter();

// First feature -> '#' symbols makes a variable or method private, so you can't access to those private variables/methods out of the file.

const user = new User("zaquielverse@gmail.com");

// console.log(user.#id === 1); // this line throw an error because #id is a private variable
// console.log(user.#checkEmailIsDefined("zaquielverse@gmail.com")); // this line throw an error because #checkEmailIsDefined is a private method
console.log(user.email); // This line is correct because email is a public variable.
