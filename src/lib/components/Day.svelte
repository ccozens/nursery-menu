<!-- script -->
<script lang="ts">
	// imports
	import type { Food } from '$lib/types';
	import { isVegetarian } from '$lib/stores';
	import { getMeat } from '$lib/functions';

	// props
	export let food;
	export let day: string = '';

	const menu = food.filter((item: Food) => item.day.includes(day));
	const breakfast = menu.filter((item: Food) => item.meal.includes('Breakfast'));
	const snack1 = menu.filter((item: Food) => item.meal.includes('Snack1'));
	const lunch = menu.filter((item: Food) => item.meal.includes('Lunch'));
	const snack2 = menu.filter((item: Food) => item.meal.includes('Snack2'));
	const tea = menu.filter((item: Food) => item.meal.includes('Tea'));

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
	<div class="meal">
		{#each item as food}
			{#if !food.pudding}
				<p>{food.food}</p>
				<hr />
			{:else}
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
		font-size: 1.5em;
	}

	.meal {
		border: 1px solid #e2e8f8;
	}
</style>
