<div class="mainGrid">
	<slot />
</div>

<style lang="postcss">
	.mainGrid {
		display: grid;
		height: 100%;
		grid-template-columns: var(--stickyWidth) repeat(5, calc(90vw - var(--stickyWidth)));
		grid-template-rows: 1fr 3fr 2fr 3fr 2fr 3fr;
		grid-auto-flow: column;
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
		place-items: center;
		font-size: var(--size-500);

		& * {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	@media (min-width: 768px) {
		.mainGrid {
			grid-template-columns: var(--stickyWidth) repeat(5, calc(70vw - var(--stickyWidth)));
		}
	}
	@media (min-width: 992px) {
		.mainGrid {
			grid-template-columns: var(--desktopStickyWidth) repeat(5, 1fr);
			overflow-x: hidden;
		}
	}
</style>
