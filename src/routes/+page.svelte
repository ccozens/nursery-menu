<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
    import { currentWeekNumber } from '$lib/stores';

	onMount(() => {
		goto(`/${$currentWeekNumber}`);
	});
</script>
