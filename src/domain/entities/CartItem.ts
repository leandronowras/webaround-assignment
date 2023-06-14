export default class CartItem {

	constructor (
    readonly idItem: string, readonly price: number, readonly quantity: number
    ) {}

	getTotal () {
		return this.price * this.quantity;
	}
}