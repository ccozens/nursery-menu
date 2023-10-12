<script lang="ts">
	import { isVegetarian } from '$lib/stores';
</script>

<button on:click={() => ($isVegetarian = !$isVegetarian)}>
	{$isVegetarian ? 'Meat' : 'Vegetarian'}
</button>

<style>
	button {
		cursor: pointer;
		background-color: var(--surface-1);
		width: 33%;
		height: var(--size-700);
		border-radius: 0.5rem;
		font-size: var(--size-500);
		color: var(--text-1);
		transition: color 0.5s ease-in-out;
	}

    @media (min-width: 992px) {
        button {
            width: 20%;
        }

        button::after {
            content: ' Menu';
        }
    }
</style>
