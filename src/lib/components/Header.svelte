<!-- script -->
<script lang="ts">
	import { currentWeekNumber } from '$lib/stores';
	import { page } from '$app/stores';
	import { Nav, VegetarianToggle } from '$lib/components';

	$: currentWeekString = String($currentWeekNumber);
	$: pathname = $page.url.pathname;
	$: pathnameSlice = pathname.slice(1);
	const isItDigit = (str: string) => /^\d+$/.test(str);
</script>

<!-- html -->
<!-- display current menu if current week showing, link name as header if not a digit, or menu: week bla if not current week showing -->
{#if pathnameSlice === currentWeekString}
	<h1>Current menu <span>{pathnameSlice})</span></h1>
{:else if !isItDigit(pathnameSlice)}
	<h1>{pathnameSlice}</h1>
{:else}
	<h1>Menu: week {pathnameSlice}</h1>
{/if}

<VegetarianToggle />
<Nav />

<style lang="postcss">
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
		font-size: var(--size-700);
		overflow: hidden;
		text-overflow: ellipsis;
		text-transform: capitalize;
		span::before {
			content: '(';
		}
		@media (min-width: 992px) {
			span::before {
				content: '(week ';
			}
		}
	}
</style>
