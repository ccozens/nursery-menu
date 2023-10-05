<!-- script -->
<script lang="ts">
	// imports
	import type { Food } from '$lib/types';
	import { isVegetarian } from '$lib/stores';
	import { getMeat, filterMeals } from '$lib/functions';

	// props
	export let food;
	export let day: string = '';

	const menu: Food[] = food.filter((item: Food) => item.day.includes(day));
	const { breakfast, snack1, lunch, snack2, tea } = filterMeals(menu);

	$: dayMenu = [
		breakfast,
		snack1,
		getMeat(lunch, $isVegetarian),
		snack2,
		getMeat(tea, $isVegetarian)
	];
</script>

<!-- html -->
{#each dayMenu as item}
	<div class="meal {item === snack1 || item === snack2 ? 'snack' : ''}">
		{#each item as food}
			{#if !food.pudding}
				<p>{food.food}</p>
			{:else}
				<hr />
				<p>Pudding: {food.food}</p>
			{/if}
		{/each}
	</div>
{/each}

<style lang="postcss">
	p::first-letter {
		text-transform: capitalize;
	}

	p {
		font-size: 1em;
	}

	.snack {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background-color: var(--overlay);
	}
</style>
