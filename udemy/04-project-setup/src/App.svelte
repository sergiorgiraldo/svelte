<script>
	import Product from "./Product.svelte";
	import Modal from "./Modal.svelte";
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

<Modal>
	<b>Hi martians!</b>
</Modal>>
