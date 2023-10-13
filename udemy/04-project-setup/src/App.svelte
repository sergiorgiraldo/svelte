<script>
	import { tick } from "svelte";
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

	let text =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia harum deleniti illo numquam doloremque provident culpa repellendus commodi tempora? Earum natus odit eveniet sequi vel, beatae quas delectus obcaecati?";

	async function transform(event) {
		if (event.key != "Tab") {
			return;
		}
		event.preventDefault();

		const { selectionStart, selectionEnd, value } = this;
		const selection = value.slice(selectionStart, selectionEnd);
		const replacement = /[a-z]/.test(selection)
			? selection.toUpperCase()
			: selection.toLowerCase();

		text =
			value.slice(0, selectionStart) +
			replacement +
			value.slice(selectionEnd);

		await tick();

		this.selectionStart = selectionStart;
		this.selectionEnd = selectionEnd;
	}
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
<p>
	<textarea rows="5" cols="80" value={text} on:keydown={transform} />
</p>
