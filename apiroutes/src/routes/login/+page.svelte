<script>
	export let form;
</script>

<form method="POST">
	<p>
		<label>
			Email
			<input name="email" type="email" />
		</label>
		<label>
			Password
			<input name="password" type="password" />
		</label>
		<button>Log in</button>
	</p>
</form>
{#if form}
	<p>Successfully logged in!</p>
	<hr/>
	<h2>
		returned form data:
	</h2>
	{#each Object.entries(form) as [key_, value_]}
		{#each Object.entries(value_) as [key, value]}
			<p>
				{key}: {value}
			</p>
		{/each}	
	{/each}	
{/if}

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 50%;
	}
	label {
		display: flex;
		flex-direction: column;
	}
	input {
		margin-bottom: 1em;
		width: 40rem;
	}
	button {
		margin-top: 1em;
	}
</style>
