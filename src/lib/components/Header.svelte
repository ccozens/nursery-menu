<!-- script -->
<script lang="ts">
	import { currentWeekNumber } from '$lib/stores';
	import { page } from '$app/stores';
	import { Nav } from '$lib/components';

	$: slug = Number($page.params.slug);
</script>

<!-- html -->
{#if slug === $currentWeekNumber}
	<h1>Current menu <span>{slug})</span></h1>
{:else}
	<h1>Menu: week {slug}</h1>
{/if}

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
		font-size: var(--size-800);
		overflow: hidden;
		text-overflow: ellipsis;

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
