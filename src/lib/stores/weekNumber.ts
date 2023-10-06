import { readable, derived } from 'svelte/store';
import { getCurrentWeekNumber } from '$lib/functions';
import { days } from '$lib/data';

export const date = readable(new Date());

export const currentWeekNumber = derived(date, ($date) => getCurrentWeekNumber($date));

export const currentDay = derived(date, ($date) => {
	const todayNumber = $date.getDay();
	const today = days[todayNumber];
	const yesterday = days[todayNumber - 1];
	const tomorrow = days[todayNumber + 1];
	return { today, yesterday, tomorrow };
});
