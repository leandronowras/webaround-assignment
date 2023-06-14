"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(userData) {
        if (!this.isValidStringInput(userData.firstName))
            throw new Error("Invalid string format");
        if (!this.isValidStringInput(userData.lastName))
            throw new Error("Invalid string format");
        if (!this.isValidEmail(userData.email))
            throw new Error("Invalid email format");
        if (!this.isValidPassword(userData.password))
            throw new Error("Invalid password: password less than 8 chars long");
        this.id = userData.id;
        this.firstName = this.capitalizeName(userData.firstName);
        this.lastName = this.capitalizeName(userData.lastName);
        this.email = userData.email;
        this.password = userData.password;
    }
    isValidStringInput(input) {
        return input.length > 0 && input.length < 100;
    }
    capitalizeName(name) {
        const firstLetter = name[0].toUpperCase();
        const rest = name.slice(1);
        return firstLetter + rest;
    }
    isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    isValidPassword(password) {
        return password.length >= 8;
    }
}
exports.default = User;
