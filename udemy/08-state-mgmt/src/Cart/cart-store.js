import { writable } from "svelte/store";

const cart = writable([
	{
		id: "p888",
		title: "John Doe",
		price: 9.99
	},
	{
		id: "p999",
		title: "Jane Doe",
		price: 9.99
	}
]);

const customCart = {
	subscribe: cart.subscribe,
	addItem: (item) => {
		cart.update((items) => {
			if (items.find((i) => i.id === item.id)) {
				return [...items];
			}
			return [...items, item];
		});
	},
	removeItem: (id) => {
		cart.update((items) => {
			return items.filter((i) => i.id !== id);
		});
	}
};

export default customCart;
