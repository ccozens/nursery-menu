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
	<!-- <MealListWithDay {mealsWithDay} /> -->
	<div class="fixed">Fixed 1</div>
	<div class="fixed">Fixed 2</div>
	<div class="fixed">Fixed 3</div>
	<div class="fixed">Fixed 4</div>
	<div class="fixed">Fixed 5</div>
	<div class="fixed">Fixed 6</div>
	{#each days as day}
		<section>
			<div class="day">
				{day}
			</div>
			<Day {day} {food} />
		</section>
	{/each}
</main>

<style>
	:root {
		--stickyWidth: 10vw;
	}
	main {
		display: grid;
		grid-template-columns: var(--stickyWidth) 1fr;
		grid-template-rows: 1fr, repeat(5, 2fr);
		grid-auto-flow: column;
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
	}

	.fixed {
		position: sticky;
		left: 10px;
		width: var(--stickyWidth);
		z-index: 1;
	}

	section {
		scroll-snap-align: center;
		display: grid;
		grid-template-rows: 1fr, repeat(5, 2fr);
		& .day {
			width: 70vw;
			border: 3px solid red;
		}
	}

	#gallery section p {
		height: 100px;
	}
</style>
