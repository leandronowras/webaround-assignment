import { iUserData } from './interfaces/iUserData';

export default class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(
    userData: iUserData
  ) {
    if (!this.isValidStringInput(userData.firstName)) throw new Error("Invalid string format")
    if (!this.isValidStringInput(userData.lastName)) throw new Error("Invalid string format")
    if (!this.isValidEmail(userData.email)) throw new Error("Invalid email format")
    if (!this.isValidPassword(userData.password)) throw new Error("Invalid password: password less than 8 chars long")
    this.id = userData.id
      this.firstName = this.capitalizeName(userData.firstName)
      this.lastName = this.capitalizeName(userData.lastName)
      this.email = userData.email
      this.password = userData.password
  }

  isValidStringInput(input: string): boolean {
    return input.length > 0 && input.length < 100
  }

  capitalizeName(name: string) {
    const firstLetter = name[0].toUpperCase()
    const rest = name.slice(1)

    return firstLetter + rest
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
  }

  isValidPassword(password: string): boolean {
    return password.length >= 8
  }
}
