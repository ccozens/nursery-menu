<div class="mainGrid">
	<slot />
</div>

<style lang="postcss">
	.mainGrid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: 2em, repeat(5, 1fr);
		grid-gap: 0.5em;
	}
</style>
