<!-- script -->
<script lang="ts">
	import { Meals } from '$lib/components';
	import type { Food } from '$lib/types';
	import { days } from '$lib/data';

	export let food: Food[] = [];
</script>

<!-- html -->
{#each days as day}
	<div class="day">
		{day}
	</div>
	<Meals {day} {food} />
{/each}

<style lang="postcss">
	.day {
		scroll-snap-align: end;
		font-weight: bold;
		text-transform: capitalize;
		font-size: 1.2em;
		width: 100%;
	}
</style>
