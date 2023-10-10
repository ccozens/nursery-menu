<script lang="ts">
	// imports
	import { MainGrid, MealListWithDay, Day } from '$lib/components';
	export let data;
	const { meals, food } = data;

	const mealsWithDay = [{ name: 'day', start_time: '', end_time: '' }, ...meals];
</script>

<MainGrid>
	<MealListWithDay {mealsWithDay} />

	<Day {food} />
</MainGrid>
