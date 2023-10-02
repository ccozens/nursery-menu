<!-- script -->
<script lang="ts">
	import '../app.postcss';
	import { isVegetarian } from '$lib/stores';
	import { MainGrid, Nav } from '$lib/components';
	import { page } from '$app/stores';
	const slug = $page.params.slug;
</script>

<!-- html -->

<div class="wrapper">
	<header>
		<h1>Nursery menu: week {slug}</h1>
		<Nav />
	</header>
	<main>
		<button on:click={() => ($isVegetarian = !$isVegetarian)}
			>{$isVegetarian ? 'Show Meat' : 'Show Vegetarian'}
		</button>
		<MainGrid>
			<slot />
		</MainGrid>
	</main>


</div>

<style lang="postcss">
	.wrapper {
		display: grid;
		max-height: 100vh;
		grid-template-rows: var(--header-height) 6fr 5vh;
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
		background-color: black;
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
			stroke: 1px white;
		}
	}

	main {
		grid-area: main;
		background-color: #2459f6;
		text-align: center;
		overflow: auto;
	}

	footer {
		grid-area: footer;
		background-color: #ec4d4d;
		text-align: center;
	}
</style>
