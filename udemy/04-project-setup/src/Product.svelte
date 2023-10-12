<script>
	import { createEventDispatcher } from "svelte";

	export let id;
	export let title;
	export let price;
	export let bestseller = false;

	const dispatch = createEventDispatcher();

	function addtoCart() {
		dispatch("add-cart", "p1");
	}
</script>

<article>
	<h1>{title}</h1>
	<h2>${price}</h2>
	{#if bestseller}
		<h3>BEST SELLER!!</h3>
	{/if}
	<button on:click={addtoCart}>Add to Cart</button>
	<button on:click={() => dispatch("delete-cart")}>Delete from Cart</button>
	<footer>
		<small><i>{id}</i></small>
	</footer>
</article>

<style>
	footer {
		color: burlywood;
	}
</style>
