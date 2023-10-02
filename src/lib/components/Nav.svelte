<script lang="ts">
	import { currentWeekNumber } from '$lib/stores';
	import { DownArrow, Hamburger } from '$lib/images';
	import { slide, fade } from 'svelte/transition';

	const pages = [
		{ name: 'Current menu', path: `/${$currentWeekNumber}` },
		{ name: 'Week 1', path: '/1' },
		{ name: 'Week 2', path: '/2' },
		{ name: 'Week 3', path: '/3' },
		{ name: 'Week 4', path: '/4' },
		{ name: 'About', path: '/about' }
	];

	$: navOpen = false;
	export let popover_id: string;
</script>

<!-- html -->

<button on:click={() => (navOpen = !navOpen)} popovertarget={popover_id}>
	{#if navOpen}
		<DownArrow />
		<nav popover id={popover_id}>
			{#each pages as { name, path }}
				<a href={path}>{name}</a>
			{/each}
		</nav>
	{:else}
		<Hamburger />
	{/if}
</button>

<style>
	button {
		background: none;
		border: none;
	}

	[popover] {
		background-color: palegoldenrod;
		padding: 10px;
		width: var(--nav-width);
		inset: var(--header-height) 0 auto calc(100vw-var(--nav-width));
		display: flex;
		flex-direction: column;
		& a {
			font-size: 2em;
		}
	}

	[popover]::backdrop {
		background-color: oklch(0% 0 0 / 0.5);
	}
</style>
