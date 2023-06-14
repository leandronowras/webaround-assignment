import CartItem from "../../src/domain/entities/CartItem";

test("should create an cart item", function () {
	const orderItem = new CartItem('123', 1000, 10);

	expect(orderItem.getTotal()).toBe(10000);
});