<script lang="ts">
	// imports
	import { MainGridHeading, Day } from '$lib/components';
	import { addPudding } from '$lib/functions/AddPudding.js';
	export let data;
	
	const meals = data.meals;
	const mealsWithPudding = addPudding(meals);
	const mealsWithDay = [{ name: 'day', start_time: '', end_time: '' }, ...mealsWithPudding];
	const days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

	const food = data.food;
</script>

<!-- <MainGridHeading {mealsWithDay} /> -->

<!-- {#each days as day}
	<div class="heading">{day}</div>
	<Day {day} {food} />
{/each} -->

<main>
	<aside>
		{#each mealsWithDay as meal}
			<div class="heading">
				{meal.name}
				<p>
					{#if meal.start_time}
						{meal.start_time}
					{/if}
					{#if meal.end_time}
						<span>
							- {meal.end_time}
						</span>
					{/if}
				</p>
			</div>
		{/each}
	</aside>
	<div id="gallery">
		{#each days as day}
			<section class="heading">
				<div class="day">
					{day}
					<Day {day} {food} />
				</div>
			</section>
		{/each}
	</div>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr 3fr;
	}

	aside {
		display: grid;
	}
	#gallery {
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
		display: flex;
	}

	#gallery section {
		scroll-snap-align: center;
		display: grid;

		& .day {
			width: 70vw;
		}
	}

	#gallery section p {
		height: 100px;
	}
</style>
