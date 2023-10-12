<script>
	import Product from "./Product.svelte";

	const products = [
		{
			id: "p1",
			title: "a book",
			price: 9.99
		}
	];
</script>

{#each products as product}
	<Product
		{...product}
		on:add-cart={(e) => alert("Added to cart:" + e.detail)}
		on:delete-cart={() => alert("Deleted from cart")} />
{/each}
