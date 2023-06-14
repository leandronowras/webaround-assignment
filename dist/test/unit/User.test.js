"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../src/domain/entities/User"));
// capitalize letters
// password should be at least 8 chars long
let userData;
beforeEach(() => {
    userData = {
        id: '1234',
        firstName: 'Leandro',
        lastName: 'Abreu',
        password: '12345678',
        email: 'leandro@gmail.com'
    };
});
test('should create an user', () => {
    const user = new User_1.default(userData);
    expect(user.id).toBe('1234');
    expect(user.firstName).toBe('Leandro');
    expect(user.lastName).toBe('Abreu');
    expect(user.password).toBe('12345678');
    expect(user.email).toBe('leandro@gmail.com');
});
test('should capitalize firstName and lastName', () => {
    userData.firstName = 'leandro';
    userData.lastName = 'abreu';
    const user = new User_1.default(userData);
    expect(user.firstName).toBe('Leandro');
    expect(user.lastName).toBe('Abreu');
});
test('should throw an error if the password is less than 8 chars long', () => {
    userData.password = '123';
    expect(() => new User_1.default(userData)).toThrow(new Error("Invalid password: password less than 8 chars long"));
});
test('should throw an error if receives an invalid email', () => {
    userData.email = 'leandro.com';
    expect(() => new User_1.default(userData)).toThrow(new Error("Invalid email format"));
});
test('should throw an error if receives a first name of length zero', () => {
    userData.firstName = '';
    expect(() => new User_1.default(userData)).toThrow(new Error("Invalid string format"));
});
test('should throw an error if receives a first name of length zero', () => {
    userData.lastName = '';
    expect(() => new User_1.default(userData)).toThrow(new Error("Invalid string format"));
});
