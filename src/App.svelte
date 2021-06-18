<script lang="ts">
  import { store } from "./store";
  let edit: boolean = false;
</script>

<main>
	{#if edit}
    <label for="name">Name:</label>
    <input type="text" id="name" bind:value={$store.name}/><br/>
    
    <label for="age">Age:</label>
    <input type="number"  id="number" bind:value={$store.age}/><br/>

    <label for="admin">Admin:</label>
    <input type="checkbox" id="admin" bind:checked={$store.admin}/><br/>
	{:else}
		Name: {$store.name}<br/>
		Age: {$store.age}<br/>
		Admin: {$store.admin ? "Yes" : "No"}
	{/if}
</main>


<button on:click={() => (edit = !edit)}>
  {edit ? "Close" : "Edit"}
</button>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
</style>