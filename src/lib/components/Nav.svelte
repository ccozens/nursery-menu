<script lang="ts">
	import { currentWeekNumber } from '$lib/stores';
	import { DownArrow, Hamburger } from '$lib/images';
	import { slide, fade } from 'svelte/transition';

	const pages = [
		{ name: 'Current', path: `/${$currentWeekNumber}` },
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

<button
	on:click={() => (navOpen = !navOpen)}
	popovertarget={popover_id}
>
	{#if navOpen}
		<DownArrow />
	{:else}
		<Hamburger />
	{/if}
</button>

<nav popover id={popover_id} class={navOpen ? 'mainNav' : ''}>
	{#each pages as { name, path }}
		<a href={path}>{name}</a>
	{/each}
</nav>

<style>
	button {
		background: none;
		border: none;
	}

	.mainNav {
		background-color: palegoldenrod;
		display: flex;
		flex-direction: column;
		padding: 10px;
        width: 50vw;
        inset: var(--header-height) var(--nav-width);
        border: solid green 3px;
		& a {
			font-size: 3em;
		}
	}

	.mainNav::backdrop {
		background-color: oklch(0% 0 0 / 0.5);
	}
</style>
