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

	function hasPudding(array: Food[]): boolean {
		return array.some((item) => item.pudding === true);
	}
</script>

<!-- html -->
{#each dayMenu as item}
	<div class="meal {item === snack1 || item === snack2 ? 'snack' : ''}">
		{#if hasPudding(item)}
			{#each item as food}
				<div class="meal">
					{#if !food.pudding}
						<p>{food.food}</p>
					{:else}
						<p>Pudding: {food.food}</p>
					{/if}
				</div>
			{/each}
		{:else}
			{#each item as food}
				<p>{food.food}</p>
			{/each}
		{/if}
	</div>
{/each}

<style lang="postcss">
	p::first-letter {
		text-transform: capitalize;
	}

	p {
		font-size: 1em;
	}

	.meal {
		height: 100%;
		padding: 0.2em;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.snack {
		width: 100%;
		background-color: var(--overlay);
	}
</style>
