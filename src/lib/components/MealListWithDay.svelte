<!-- script -->
<script lang="ts">
	import { addPudding } from '$lib/functions/AddPudding.js';
	import type { Meal } from '$lib/types';

	export let mealsWithDay: Meal[] = [];
</script>

<!-- html -->

{#each mealsWithDay as meal}
	<div class="heading fixed">
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
		font-size: 1.4em;
	}

	.fixed {
		position: sticky;
		left: 0px;
		width: var(--stickyWidth);
        background: #6b89c4;
		z-index: 1;
	}
</style>
