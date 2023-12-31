
# Nursery menu

My son's nursery has a 4-weekly rotating menu, and I always forget where it is up to. So: a web app! This is build using [sveltekit](https://kit.svelte.dev), with a [supabase database](https://supabase.com/) and [prisma ORM](https://www.prisma.io/), and is deployed to [https://nursery-menu.vercel.app/](https://nursery-menu.vercel.app/).

## Development
A few notes on things I found worked well / hadn't done before:

### Horizontal scrolling grid
This was a fun one. I wanted the first column (meal names and times) fixed, and the remainder (day and menu items) I wanted to scroll horizontally so that you could see 1 day at a time clearly on mobile. I set up a [svelte REPL, 'css carousel'](https://svelte.dev/repl/c1f52b819cfd4e6aa218083919c4ef63?version=4.2.1) while building this out, based largely on [Well-controlled scrolling with CSS Scroll Snap from web.dev](https://web.dev/articles/css-scroll-snap).

### Showing the current week
One of the problems I wanted to solve was remembering which of the 4 weeks the nursery is on. So, I created a function _getCurrentWeekNumber_ which calculates current week based on how many days have passed since a source of truth (in this case, that 2023-09-22 was week 1), and storing the current week in a derived store _currentWeekNumber_. The load function in top level _+page.server.ts+_ then uses this load the current week using [sveltekit's redirect helper](https://kit.svelte.dev/docs/load#redirects).

### Supabase x Prisma
Supabase have a page called [supabase works with prisma](https://supabase.com/partners/integrations/prisma) and it really does work very easily. Setup was easy, apart from a [well-discussed type error from the browser on deploymnet](https://github.com/prisma/prisma/issues/12504), which I resolved using [this fix suggested in the comments](https://github.com/prisma/prisma/issues/12504#issuecomment-1541963336).
Note I only set up read from supabase and all data entry was via prisma studio, for my own ease.

### Transitions
I set up transitions for the nav dropdown using [svelte/transition](https://svelte.dev/docs/svelte-transition), and for the menu icon using CSS transitions. Initially I tried using svelte transitions for both but this resulted in jerky behaviour, I think because of how svelte processes two simultaneous transitions.


### Favicon
The favicon is a [cheeseburger from flaticons](https://www.flaticon.com/free-icon/cheeseburger_1923515), free to use with attribution.