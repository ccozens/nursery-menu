<script lang="ts">
	const mockLyrics = [
		'Is this the real life? Is this just fantasy?',
		"I'm a creep, I'm a weirdo. What the hell am I doing here?",
		"It's a beautiful day, don't let it get away.",
		'Oh, I want to dance with somebody. I want to feel the heat with somebody.',
		'All the small things, true care, truth brings.',
		"I'm on the pursuit of happiness and I know, everything that shines ain't always gonna be gold.",
		"She's got a smile that it seems to me, reminds me of childhood memories.",
		"So take a look at me now, 'cause there's just an empty space."
	];

	const images = [
		'https://source.unsplash.com/400x300/?nature',
		'https://source.unsplash.com/400x300/?portrait',
		'https://source.unsplash.com/400x300/?landscape',
		'https://source.unsplash.com/400x300/?dance',
		'https://source.unsplash.com/400x300/?abstract',
		'https://source.unsplash.com/400x300/?gold',
		'https://source.unsplash.com/400x300/?smile',
		'https://source.unsplash.com/400x300/?space'
	];

	import { Day } from '$lib/components';
	export let data;
	const meals = data.meals;
	const mealsWithDay = [{ name: 'day', start_time: '', end_time: '' }, ...meals];

	const days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

	const food = data.food;
</script>

<!-- <div id="gallery">
	{#each mockLyrics as lyric, index}
		<section>
			<p>{lyric}</p>
			<img src={images[index]} alt="random unsplash" />
		</section>
	{/each}
</div> -->

<div id="gallery">
	{#each days as day}
		<section class="heading">
			{day}
			<Day {day} {food} />
		</section>
	{/each}
</div>

<style>
	#gallery {
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
		display: flex;
	}

	#gallery section {
		scroll-snap-align: center;
	}

	#gallery section p {
		height: 100px;
	}
</style>
