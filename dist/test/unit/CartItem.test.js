"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CartItem_1 = __importDefault(require("../../src/domain/entities/CartItem"));
test("should create an cart item", function () {
    const orderItem = new CartItem_1.default('123', 1000, 10);
    expect(orderItem.getTotal()).toBe(10000);
});
