<!-- script -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { Meals } from '$lib/components';
	import { scrollIntoView } from '$lib/functions';
	import type { Food } from '$lib/types';
	import { days } from '$lib/data';
	import { currentWeekNumber, currentDay } from '$lib/stores';
	import { page } from '$app/stores';
	export let food: Food[] = [];

	// check current page and current week number. If viewing current week, scroll to current day
	$: slug = Number($page.params.slug);
	$: if (slug === $currentWeekNumber) {
		onMount(() => {
			if (days.includes($currentDay)) {
				scrollIntoView($currentDay);
			} else {
				scrollIntoView('Monday');
			}
		});
	}
</script>

<!-- html -->
{#each days as day}
	<div id={day} class="day">
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
