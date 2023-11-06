<script lang="ts">
    export let nm:string;
</script>

<svelte:head>
	<title>{nm}</title>
	<meta name="description" content="{nm}" />
</svelte:head>

<div class="text-column">
	<h1>{nm}</h1>

    <p>
        Take a look at this lad, {nm.toLowerCase()}!
    </p>

	<p>
		<img src="https://placehold.co/600x400/orange/white?text={nm}" alt="the lad"/>
	</p>
</div>
