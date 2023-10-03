<script lang="ts">
	// imports
	import { MealListWithDay, Day } from '$lib/components';
	export let data;

	const meals = data.meals;
	const days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

	const food = data.food;

	const mealsWithDay = [{ name: 'day', start_time: '', end_time: '' }, ...meals];
</script>

<!-- <MainGridHeading {mealsWithDay} /> -->

<!-- {#each days as day}
	<div class="heading">{day}</div>
	<Day {day} {food} />
{/each} -->

<main>
	<MealListWithDay {mealsWithDay} />

	{#each days as day}
		<div class="day heading">
			{day}
		</div>
		<Day {day} {food} />
	{/each}
</main>

<style>
	:root {
		--stickyWidth: 30vw;
	}
	main {
		display: grid;
		grid-template-columns: var(--stickyWidth) repeat(5, calc(90vw - var(--stickyWidth)));
		grid-template-rows: 100px repeat(5, 1fr);
		grid-auto-flow: column;
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
	}

	.day {
		scroll-snap-align: end;
		font-weight: bold;
		text-transform: capitalize;
		font-size: 1.4em;
	}
</style>
