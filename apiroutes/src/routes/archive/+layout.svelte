<script>
	export let data;
</script>

<div class="layout">
	<main>
		<p>
			<a href="/">Index</a>
		</p>
		<slot />
	</main>
</div>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 16em;
		}
	}
</style>