<script>
	import CustomInput from "./CustomInput.svelte";
	import Toggle from "./Toggle.svelte";

	let val = "SRG";
	let price = 0;
	let selectedOption = 1;
	let agreed = false;
	let favColor = "green";
	let favColorArr = ["green"];
	let singleFavColor = "blue";
	$: console.log(val);
	$: console.log(selectedOption);
	$: console.log(price);
	$: console.log(agreed);
	$: console.log(favColor);
	$: console.log(favColorArr);
	$: console.log(singleFavColor);

	// function setValue(event) {
	//   val = event.target.value;
	// }
</script>

<!-- notice if you have a 2-way binding you cant have dynamic binding at the same time (like something={variable}) -->

<!-- <input type="text" value={val} on:input={setValue}> -->
<!-- <input type="text" bind:value={val} /> -->
<CustomInput bind:val />

<Toggle bind:chosenOption={selectedOption} />

<input type="number" bind:value={price} />

<label>
	<input type="checkbox" bind:checked={agreed} />
	Agree to terms?
</label>

<h1>Favorite Color?</h1>
<label>
	<input type="radio" name="color1" value="red" bind:group={favColor} />
	Red
</label>
<label>
	<input type="radio" name="color1" value="green" bind:group={favColor} />
	Green
</label>
<label>
	<input type="radio" name="color1" value="blue" bind:group={favColor} />
	Blue
</label>

<h1>Favorite Color<b>S</b>?</h1>
<label>
	<input type="checkbox" name="color" value="red" bind:group={favColorArr} />
	Red
</label>
<label>
	<input
		type="checkbox"
		name="color"
		value="green"
		bind:group={favColorArr} />
	Green
</label>
<label>
	<input type="checkbox" name="color" value="blue" bind:group={favColorArr} />
	Blue
</label>

<h1>Single fav Color</h1>
<select bind:value={singleFavColor}>
	<option value="green">Green</option>
	<option value="red">Red</option>
	<option value="blue">Blue</option>
</select>
