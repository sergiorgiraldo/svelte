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
	<h1 slot="header">Hi martians!</h1>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam tempore, neque ab aspernatur ullam sint. Ex provident qui eos officiis perferendis adipisci doloribus, animi, enim, doloremque dignissimos laboriosam accusamus?
	</p>
</Modal>>
