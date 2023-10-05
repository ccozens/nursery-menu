<script lang="ts">
	// imports
	import { MainGrid, MealListWithDay, Day } from '$lib/components';
	export let data;

	const days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
	const { meals, food } = data;

	const mealsWithDay = [{ name: 'day', start_time: '', end_time: '' }, ...meals];
</script>

<MainGrid>
	<MealListWithDay {mealsWithDay} />

	<Day {days} {food} />
</MainGrid>
