<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from './Toggle.svelte';

  let val = "Max";
  let selectedOption = 1;

  $: console.log(val);
  $: console.log(selectedOption);

  // function setValue(event) {
  //   val = event.target.value;
  // }
</script>
<!-- notice if you have a 2-way binding you cant have dynamic binding at the same time (like something={variable}) -->
<!-- <input type="text" value={val} on:input={setValue}> -->
<!-- <input type="text" bind:value={val} /> -->
<CustomInput bind:val={val} />

<Toggle bind:chosenOption={selectedOption} />