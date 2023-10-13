<script lang="ts">
	import { pages } from '$lib/stores';
	import { DownArrow, Hamburger } from '$lib/images';
	import { slide } from 'svelte/transition';

	$: navOpen = false;
</script>

<!-- html -->

<button on:click={() => (navOpen = !navOpen)}>
	{#if navOpen}
		<DownArrow />
		<dialog in:slide>
			{#each $pages as { name, path }}
				<a href={path} target="_self">{name}</a>
			{/each}
		</dialog>
	{:else}
		<Hamburger />
	{/if}
</button>

<style>
	button {
		background: none;
		border-radius: 0.5rem;
		height: var(--size-800);
		margin-left: auto;
		color: var(--text-1);
	}

	dialog {
		background: linear-gradient(var(--yellow-3), var(--yellow-2), var(--yellow-1));
		padding: 10px;
		width: var(--nav-width);
		inset: var(--header-height) 0 auto calc(100vw-var(--nav-width));
		display: flex;
		flex-direction: column;
		box-shadow: 0 0 5px 1px var(--yellow-3);

		& a {
			font-size: 2em;
			text-decoration: none;
			color: var(--swatch-7);
			position: relative;
		}
	}
	a::before,
	a::after {
		content: '';
		position: absolute;
		bottom: 0;
		width: 0%;
		height: 2px;
		background-color: var(--swatch-7);
		transition: width 0.3s ease-in-out;
	}

	a::before {
		left: 50%;
		transform: translateX(-50%);
	}

	a::after {
		right: 50%;
		transform: translateX(50%);
	}

	a:hover::before,
	a:hover::after {
		width: 50%;
	}

	dialog::backdrop {
		background-color: oklch(1% 0 0 / 0.5);
	}

	@media (min-width: 992px) {
		dialog {
			width: calc(var(--nav-width) / 2);
			inset: var(--header-height) 0 auto calc(100vw-calc(var(--nav-width) / 2));
		}
	}
</style>
