<!-- script -->
<script lang="ts">
	import { addPudding } from '$lib/functions/AddPudding.js';
	import type {Meal} from '$lib/types';

    export let meals: Meal[] = [];
	const mealsWithPudding = addPudding(meals);
	const mealsWithDay = [{ name: 'day', start_time: '', end_time: '' }, ...mealsWithPudding];
</script>

<!-- html -->

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
