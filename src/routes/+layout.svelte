<!-- script -->
<script lang="ts">
	import '../app.postcss';
	import { isVegetarian } from '$lib/stores';
	import { Analytics, Footer, Header } from '$lib/components';
</script>

<!-- html -->

<Analytics />
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

<style lang="postcss">
	header {
		display: flex;
		justify-content: center;
		align-items: center;
		grid-area: header;
		background-color: var(--surface-1);
	}

	main {
		grid-area: main;
		background-color: var(--surface-3);
		text-align: center;
	}

	footer {
		grid-area: footer;
		background-color: var(--surface-1);
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
