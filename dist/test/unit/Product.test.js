"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../../src/domain/entities/Product"));
let productData;
beforeEach(() => {
    productData = {
        id: '1234',
        title: 'piano',
        description: 'best musical instrument',
        price: 1000
    };
});
test('should create a product', () => {
    const product = new Product_1.default(productData);
    expect(product.id).toBe('1234');
    expect(product.title).toBe('piano');
    expect(product.description).toBe('best musical instrument');
    expect(product.price).toBe(1000);
});
test('should throw an error if description is greater than 500 characters', () => {
    const longDescription = "x".repeat(501);
    productData.description = longDescription;
    expect(() => new Product_1.default(productData)).toThrow(new Error("Invalid description: description should be less or equal to 500 chars"));
});
test('should pass if the description is an empty string', () => {
    // its not optional for consistency and performance
    productData.description = '';
    const product = new Product_1.default(productData);
    expect(product.description).toBe('');
});
test('should throw an error if the price is less or equal to zero', () => {
    productData.price = 0;
    expect(() => new Product_1.default(productData)).toThrow(new Error("Invalid price: price should be greater than zero"));
    productData.price = -1;
    expect(() => new Product_1.default(productData)).toThrow(new Error("Invalid price: price should be greater than zero"));
});
test('should throw an error if the title is greater than 100 characters', () => {
    const longTitle = "x".repeat(101);
    productData.title = longTitle;
    expect(() => new Product_1.default(productData)).toThrow(new Error("Invalid title: title should be less or equal to 100 chars long"));
});
