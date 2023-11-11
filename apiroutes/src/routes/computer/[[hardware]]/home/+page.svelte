<script>
	export let data;
</script>

<h1>COMPUTERS HARDWARE HOME PAGE</h1>
{#if data.w}
	<h2>this is hardware {data.w}</h2>
{:else}
	<h2>this is default hardware</h2>
{/if}

<i>{data.u}</i>
