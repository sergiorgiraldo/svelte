<script>
	import Header from './Header.svelte';
	import './styles.css';
	import TailwindCss from "$lib/TailwindCSS.svelte";
</script>

<TailwindCss/>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex-1 flex flex-col w-full max-w-screen-lg box-border mx-auto my-0 p-4">
		<slot />
	</main>

	<footer class="flex flex-col justify-center items-center p-3">
		<p>visit <a href="https://kit.svelte.dev" class="font-[bold]">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>