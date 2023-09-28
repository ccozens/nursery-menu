<script lang="ts">
	import type { Meal } from '$lib/types';

	export let mealsWithDay: Meal[] = [];
</script>

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

<style lang="postcss">
	.heading {
		font-weight: bold;
		text-transform: capitalize;
	}
</style>
