<script lang="ts">
	import { Card, Subcard } from '$lib/components';
</script>

<Card>
	<Subcard>
		<h2>What is this site?</h2>
		<p>
			My son's nursery has a 4-weekly rotating menu, and I always forget where it is up to. So: a
			web app! This is build using <a href="https://kit.svelte.dev" target="_blank">sveltekit</a>,
			with a
			<a href="https://supabase.com/" target="_blank">supabase database</a>
			and <a href="https://www.prisma.io/" target="_blank">prisma ORM</a>, and is deployed to
			<a href="https://nursery-menu.vercel.app/" target="_blank">https://nursery-menu.vercel.app/</a
			>.
		</p>
	</Subcard>
</Card>

<Card>
	<Subcard>
		<h2>Development</h2>
		<p>A few notes on things I found worked well / hadn't done before:</p>
	</Subcard>

	<Subcard>
		<h3>Horizontal scrolling grid</h3>
		<p>
			This was a fun one. I wanted the first column (meal names and times) fixed, and the remainder
			(day and menu items) I wanted to scroll horizontally so that you could see 1 day at a time
			clearly on mobile. I set up a <a
				href="https://svelte.dev/repl/c1f52b819cfd4e6aa218083919c4ef63?version=4.2.1"
				target="_blank">svelte REPL, 'css carousel'</a
			>
			while building this out, based largely on
			<a href="https://web.dev/articles/css-scroll-snap" target="_blank"
				>Well-controlled scrolling with CSS Scroll Snap from web.dev</a
			>.
		</p>
	</Subcard>

	<Subcard>
		<h3>Showing the current week</h3>
		<p>
			One of the problems I wanted to solve was remembering which of the 4 weeks the nursery is on.
			So, I created a function _getCurrentWeekNumber_ which calculates current week based on how
			many days have passed since a source of truth (in this case, that 2023-09-22 was week 1), and
			storing the current week in a derived store _currentWeekNumber_. The load function in top
			level _+page.server.ts+_ then uses this load the current week using <a
				href="https://kit.svelte.dev/docs/load#redirects"
				target="_blank">sveltekit's redirect helper</a
			>.
		</p>
	</Subcard>
	<Subcard>
		<h3>Supabase x Prisma</h3>
		<p>
			Supabase have a page called <a
				href="https://supabase.com/partners/integrations/prisma"
				target="_blank">supabase works with prisma</a
			>
			and it really does work very easily. Setup was easy, apart from a
			<a href="https://github.com/prisma/prisma/issues/12504" target="_blank"
				>well-discussed type error from the browser on deploymnet</a
			>, which I resolved using
			<a
				href="https://github.com/prisma/prisma/issues/12504#issuecomment-1541963336"
				target="_blank">this fix suggested in the comments</a
			>. Note I only set up read from supabase and all data entry was via prisma studio, for my own
			ease.
		</p>
	</Subcard>
	<Subcard>
		<h3>Transitions</h3>
		<p>
			I set up transitions for the nav dropdown using
			<a href="https://svelte.dev/docs/svelte-transition" target="_blank">svelte/transition</a>, and
			for the menu icon using CSS transitions. Initially I tried using svelte transitions for both
			but this resulted in jerky behaviour, I think because of how svelte processes two simultaneous
			transitions.
		</p>
	</Subcard>
	<Subcard>
		<h2>Code</h2>
		<p>
			The code is all open, apart from the database access keys, <a
				href="https://github.com/ccozens/nursery-menu"
				target="_blank">at GitHub</a
			>.
		</p>
	</Subcard>
	<Subcard>
		<h2>Contact</h2>
		<p>
			If you have any questions, comments or requests, please get in touch <a
				href="mailto:officechrisgarden@gmail.com">via email</a
			>.
		</p>
	</Subcard>
</Card>

<style>
</style>
