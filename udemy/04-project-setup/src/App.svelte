<script>
	import Product from "./Product.svelte";
	import Modal from "./Modal.svelte";
	const products = [
		{
			id: "p1",
			title: "a book",
			price: 9.99
		},
		{
			id: "p2",
			title: "a pencil",
			price: 1.29
		}
	];
	let showModal = false;
</script>

{#each products as product}
	<p>
		<Product
			{...product}
			on:add-cart={(e) => alert("Added to cart:" + e.detail)}
			on:delete-cart={() => alert("Deleted from cart")} />
	</p>
{/each}

<br />

<button on:click={() => (showModal = true)}>Show Modal</button>

{#if showModal}
	<Modal
		on:cancel={() => (showModal = false)}
		on:close={() => (showModal = false)}
		let:didAgree={closeable}>
		<h1 slot="header">Hello!</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
			placeat libero vero aspernatur dignissimos animi rerum minima
			delectus natus rem velit eaque laborum, eum ad ratione iusto cum
			sint! Sit.
		</p>
		<button
			slot="footer"
			on:click={() => (showModal = false)}
			disabled={!closeable}>Confirm</button>
	</Modal>
{/if}
