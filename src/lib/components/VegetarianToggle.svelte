<script lang="ts">
	import { isVegetarian } from '$lib/stores';
</script>

<button on:click={() => ($isVegetarian = !$isVegetarian)}>
	{$isVegetarian ? 'Show Meat' : 'Show Vegetarian'}
</button>

<style>
	button {
		cursor: pointer;
		background-color: var(--surface-1);
		width: 20%;
		height: var(--size-700);
		border-radius: 0.5rem;
		font-size: var(--size-500);
		color: var(--text-1);
		transition: color 0.5s ease-in-out;
	}
</style>
