<!-- script -->
<script lang="ts">
	import '../app.postcss';
	import { isVegetarian } from '$lib/stores';
	import { MainGrid } from '$lib/components';
	import { getCurrentWeekNumber } from '$lib/functions';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const date = new Date();
	const currentWeekNumber = getCurrentWeekNumber(date);

	onMount(() => {
		goto(`/${currentWeekNumber}`);
	});
</script>

<!-- html -->

<div class="wrapper">
	<header>
		<h1>Nursery menu</h1>
		<div>Week: {currentWeekNumber}</div>
	</header>
	<main>
		<button on:click={() => ($isVegetarian = !$isVegetarian)}
			>{$isVegetarian ? 'Show Meat' : 'Show Vegetarian'}
		</button>
		<MainGrid>
			<slot />
		</MainGrid>
	</main>

	<footer>
		<p>hi</p>
	</footer>
</div>

<style lang="postcss">
	.wrapper {
		display: grid;
		max-height: 100vh;
		grid-template-rows: 5vh 6fr 5vh;
		grid-template-areas:
			'header'
			'main'
			'footer';
	}

	header {
		grid-area: header;
		background-color: #76ec8a;
		text-align: center;
		display: flex;
	}

	main {
		grid-area: main;
		background-color: #d4dfff;
		text-align: center;
		overflow: auto;
	}

	footer {
		grid-area: footer;
		background-color: #ec4d4d;
		text-align: center;
	}
</style>
