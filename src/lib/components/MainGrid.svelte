<div class="mainGrid">
	<slot />
</div>

<style lang="postcss">
	.mainGrid {
		display: grid;
		height: var(--main-height);
		grid-template-columns: var(--stickyWidth) repeat(5, calc(90vw - var(--stickyWidth)));
		grid-template-rows: 1fr 2fr 1fr 2fr 1fr 2fr;
		grid-auto-flow: column;
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
		place-items: center;
		font-size: 1.2em;

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
			font-size: 1.2em;
		}
	}
</style>
