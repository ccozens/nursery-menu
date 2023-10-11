<script lang="ts">
</script>

<div class="card">
	<slot />
</div>

<style>
	.card {
		background-color: var(--surface-1);
        width: 80%;
        margin: 1rem auto;
		border-radius: 0.5rem;
		box-shadow: 0 0 0.5rem var(--text-2);
		padding: 1rem;
	}
</style>
