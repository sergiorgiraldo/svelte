<script>
    export let val;

    export function empty(){
        val = "EMPTY";
    }
</script>

<input type="text" bind:value={val}>