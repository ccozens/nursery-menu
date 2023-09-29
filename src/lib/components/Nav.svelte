<script lang="ts">
	import { currentWeekNumber } from '$lib/stores';
	import { DownArrow, Hamburger } from '$lib/images';
	const pages = [
		{ name: 'Current', path: `/${$currentWeekNumber}` },
		{ name: 'Week 1', path: '/1' },
		{ name: 'Week 2', path: '/2' },
		{ name: 'Week 3', path: '/3' },
		{ name: 'Week 4', path: '/4' },
		{ name: 'About', path: '/about' }
	];

	$: navOpen = false;
</script>

<!-- html -->

<button on:click={() => (navOpen = !navOpen)}>
	{#if navOpen}
    <DownArrow />
	{:else}
    <Hamburger />
	{/if}
</button>

{#if navOpen}
{#each pages as { name, path }}
	<a href={path}>{name}</a>
{/each}
{/if}

<style>
	button {
		background: none;
		border: none;
	}
</style>
