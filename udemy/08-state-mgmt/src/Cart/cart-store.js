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

export default cart;
