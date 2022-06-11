class User {
  #id;
  email;

  #checkEmailIsDefined(email) {
    if (email) return true;
    return false;
  }

  constructor(email) {
    this.#checkEmailIsDefined(email);
    this.#id = 1;
    this.email = email;
  }
}

export default User;
