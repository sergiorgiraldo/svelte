import { writable } from "svelte/store";

const products = writable([
    {
      id: "p1",
      title: "A Book",
      price: 9.99,
      description: "A great book!"
    },
    {
      id: "p2",
      title: "A Carpet",
      price: 99.99,
      description: "Red and green."
    },
    {
      id: "p3",
      title: "A Pan",
      price: 99.99,
      description: "Non-stick"
    },
    {
		id: "p888",
		title: "John Doe",
		price: 9.99,
        description: "Misterious man"
	},
	{
		id: "p999",
		title: "Jane Doe",
		price: 9.99,
        description: "Misterious woman"
	}
  ]);

export default products;
