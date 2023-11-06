<script>
	import Counter from "./Counter.svelte";

	import TailwindCss from "$lib/TailwindCSS.svelte";
</script>

<TailwindCss/>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-0.6">

	<h1 class="w-full py-8 px-4 border border-indigo-900 shadow-lg text-red-500">Hello from Tailwind!</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>