"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(product) {
        if (!this.isValidTitle(product.title))
            throw new Error('Invalid title: title should be less or equal to 100 chars long');
        if (!this.isValidPrice(product.price))
            throw new Error('Invalid price: price should be greater than zero');
        if (!this.isValidDescription(product.description))
            throw new Error('Invalid description: description should be less or equal to 500 chars');
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.description = product.description;
    }
    isValidPrice(price) {
        return price > 0;
    }
    isValidDescription(description) {
        return description.length <= 500;
    }
    isValidTitle(title) {
        return title.length <= 100;
    }
}
exports.default = Product;
