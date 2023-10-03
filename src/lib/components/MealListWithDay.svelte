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
		background: #6b89c4;
		z-index: 1;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
        flex-direction: column;
	}

	p {
		font-size: 1em;
	}
</style>
