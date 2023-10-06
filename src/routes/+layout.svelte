<!-- script -->
<script lang="ts">
	import '../app.postcss';
	import { isVegetarian } from '$lib/stores';
	import { Analytics, Nav, Footer } from '$lib/components';
	import { page } from '$app/stores';
	const slug = $page.params.slug;
</script>

<!-- html -->

<Analytics />
<div class="wrapper">
	<header>
		<h1>Menu: week {slug}</h1>
		<Nav />
	</header>
	<main>
		<button on:click={() => ($isVegetarian = !$isVegetarian)}
			>{$isVegetarian ? 'Show Meat' : 'Show Vegetarian'}
		</button>
		<slot />
	</main>
	<footer>
		<Footer />
	</footer>
</div>

<style lang="postcss">
	.wrapper {
		display: grid;
		min-height: 100vh;
		grid-template-rows: var(--header-height) 1fr calc(var(--header-height)/2);
		grid-template-areas:
			'header'
			'main'
			'footer';
	}

	header {
		display: flex;
		justify-content: center;
		align-items: center;
		grid-area: header;
		background-color: var(--surface-1);
		h1 {
			width: 100%;
			text-align: center;
			background: linear-gradient(
				90deg in oklch longer hue,
				oklch(80% 0.3 34) 0%,
				oklch(90% 0.3 200) 50%,
				oklch(80% 0.3 316) 100%
			);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			font-size: var(--size-800);
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}

	main {
		grid-area: main;
		background-color: var(--surface-3);
		text-align: center;
		overflow: auto;
	}

	footer {
		grid-area: footer;
		background-color: var(--surface-1);
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
