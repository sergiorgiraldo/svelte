<script lang="ts">
	import { onMount } from "svelte";

	let result: string = "";

	onMount(() =>
		fetch("http://httpbin.org/json", {
			method: "GET"
		})
			.then((response) => response.text())
			.then((data) => (result = data))
	);
</script>

<p>
	{result}
</p>
