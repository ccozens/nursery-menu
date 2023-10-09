<!-- script -->
<script lang="ts">
	import '../app.postcss';
	import { isVegetarian } from '$lib/stores';
	import { Analytics, Footer, Header } from '$lib/components';
</script>

<!-- html -->

<Analytics />
<div class="wrapper">
	<header>
		<Header />
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
		grid-template-rows: var(--header-height) 1fr var(--footer-height);
		grid-template-areas:
			'header'
			'main'
			'footer';
	}

	header {
		display: flex;
		justify-content: center;
		align-items:center;
		grid-area: header;
		background-color: var(--surface-1);
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
