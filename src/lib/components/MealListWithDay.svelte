<!-- script -->
<script lang="ts">
	import type { Meal } from '$lib/types';
	export let mealsWithDay: Meal[] = [];
</script>

<!-- html -->

{#each mealsWithDay as meal}
	<div class="heading fixed {meal.name === 'snack' ? 'snack' : ''}">
		<p>{meal.name}</p>
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
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.fixed {
		position: sticky;
		left: 0px;
		width: 100%;
		z-index: 1;
		background-color: var(--surface-2);
	}

	.snack {
		background-color: var(--surface-3);
	}
</style>
