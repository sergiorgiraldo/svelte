<script>
	export let member;
</script>

<div>
	<h1>{member.name}</h1>
	{#if member.isParent}
		{#each member.children as child}
			<svelte:self member={child} />
		{/each}
	{/if}
</div>

<style>
	div {
		margin-left: 2rem;
	}
</style>
