<!-- script -->
<script lang="ts">
	import '../app.postcss';
	import { Analytics, Footer, Header } from '$lib/components';
</script>

<!-- html -->

<Analytics />
<header>
	<Header />
</header>
<main>
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
		overflow: auto;
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
