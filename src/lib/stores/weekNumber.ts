import { readable, derived } from 'svelte/store';
import { getCurrentWeekNumber } from '$lib/functions';

export const date = readable(new Date());

export const currentWeekNumber = derived(date, ($date) => getCurrentWeekNumber($date));

// get current day as derived store
export const currentDay = derived(date, ($date) => {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return days[$date.getDay()];
});
