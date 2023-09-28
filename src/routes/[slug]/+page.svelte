<script lang="ts">
	// imports
	import { MainGridHeading, Day } from '$lib/components';

	export let data;
	const meals = data.meals;
	const mealsWithDay = [{ name: 'day', start_time: '', end_time: '' }, ...meals];

	const days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

	const food = data.food;
</script>

<MainGridHeading {mealsWithDay} />

{#each days as day}
	<div class="heading">{day}</div>
	<Day {day} {food} />
{/each}
