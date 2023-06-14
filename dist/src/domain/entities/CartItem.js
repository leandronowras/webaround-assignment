"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartItem {
    constructor(idItem, price, quantity) {
        this.idItem = idItem;
        this.price = price;
        this.quantity = quantity;
    }
    getTotal() {
        return this.price * this.quantity;
    }
}
exports.default = CartItem;
