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

<div class="gridContainer">
	<MealListWithDay {mealsWithDay} />

	{#each days as day}
		<div class="day heading">
			{day}
		</div>
		<Day {day} {food} />
	{/each}
</div>

<style lang="postcss">
	:root {
		--stickyWidth: 30vw;
		--desktopStickyWidth: 10vw;
	}

	.gridContainer {
		display: grid;
		grid-template-columns: var(--stickyWidth) repeat(5, calc(90vw - var(--stickyWidth)));
		grid-template-rows: 1fr repeat(5, 2fr);
		grid-auto-flow: column;
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
		place-items: center;
	}

	.day {
		scroll-snap-align: end;
		font-weight: bold;
		text-transform: capitalize;
		font-size: 1em;
		width: 100%;
	}

	@media (min-width: 768px) {
		.gridContainer {
			grid-template-columns: var(--stickyWidth) repeat(5, calc(70vw - var(--stickyWidth)));
			font-size: 1.2em;
		}
	}
	@media (min-width: 992px) {
		.gridContainer {
			grid-template-columns: var(--desktopStickyWidth) repeat(5, 1fr);
			font-size: 1.2em;
			overflow-x: hidden;
		}
	}
</style>
