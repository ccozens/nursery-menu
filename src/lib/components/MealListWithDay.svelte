<!-- script -->
<script lang="ts">
	import type { Meal } from '$lib/types';
	export let mealsWithDay: Meal[] = [];
</script>

<!-- html -->

{#each mealsWithDay as meal}
	<div class="heading fixed">
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
	}

	.fixed {
		position: sticky;
		left: 0px;
		width: var(--stickyWidth);
		z-index: 1;
		height: 100%;
		width: 100%;
		flex-direction: column;
		background-color: var(--surface-2);
	}

	p {
		font-size: 1em;
	}
</style>
