<script>
	import { tweened } from "svelte/motion";
	import { cubicIn } from "svelte/easing";
	import { fade, fly, slide, scale } from "svelte/transition";

	import Spring from "./Spring.svelte";

	let boxInput;
    let showParagraph = false;

	const progress = tweened(0, {
		delay: 0,
		duration: 700,
		easing: cubicIn
	});

	setTimeout(() => {
		progress.set(0.5);
	}, 1500);

	let boxes = [];
	let boxes1 = [];
	let boxes2 = [];
	let boxes3 = [];

	function addBox() {
		boxes = [...boxes, boxInput.value];
		boxes1 = [...boxes1, boxInput.value];
		boxes2 = [...boxes2, boxInput.value];
		boxes3 = [...boxes3, boxInput.value];
	}

	function discard(value, what) {
        if (what === 0) boxes = boxes.filter((el) => el !== value);
        if (what === 1) boxes1 = boxes1.filter((el) => el !== value);
        if (what === 2) boxes2 = boxes2.filter((el) => el !== value);
        if (what === 3) boxes3 = boxes3.filter((el) => el !== value);
	}
</script>

<!-- <progress value={$progress} /> -->
<!-- <Spring /> -->

<button
  on:click={() => {
    showParagraph = !showParagraph;
  }}>
  Toggle
</button>

{#if showParagraph}
  <p transition:fly={{ x: 300 }}>Can you see me?</p>
{/if}

<hr />

<input type="text" bind:this={boxInput} />
<button on:click={addBox}>Add</button> <i>click in box to get rid of it</i>

{#each boxes as box (box)}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div transition:fly={{ x: 200, y: 0 }} on:click={discard.bind(this, box, 0)}>
		{box}
	</div>
{/each}

<hr />

{#each boxes1 as box (box)}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="d1" transition:fade={{ x: 200, y: 0 }} on:click={discard.bind(this, box, 1)}>
		{box}
	</div>
{/each}

<hr />

{#each boxes2 as box (box)}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="d2" transition:slide={{ x: 200, y: 0 }} on:click={discard.bind(this, box, 2)}>
		{box}
	</div>
{/each}

<hr />

{#each boxes3 as box (box)}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="d3" transition:scale={{ x: 200, y: 0 }} on:click={discard.bind(this, box, 3)}>
		{box}
	</div>
{/each}

<style>
    hr {
        border: 3px solid cyan;
    }
	div {
		width: 5rem;
		height: 5rem;
		background: #ccc;
		margin: 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		border-radius: 5px;
		padding: 1rem;
	}
    div.d1 {
		width: 5rem;
		height: 5rem;
		background: greenyellow;
		margin: 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		border-radius: 5px;
		padding: 1rem;
	}
    div.d2 {
		width: 5rem;
		height: 5rem;
		background: paleturquoise;
		margin: 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		border-radius: 5px;
		padding: 1rem;
	}
    div.d3 {
		width: 5rem;
		height: 5rem;
		background: yellow;
		margin: 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		border-radius: 5px;
		padding: 1rem;
	}
</style>
