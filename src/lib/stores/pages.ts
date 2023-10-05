import { derived } from 'svelte/store';
import { currentWeekNumber } from './weekNumber';

export const pages = derived(currentWeekNumber, ($currentWeekNumber) => [
	{ name: 'Current menu', path: `/${$currentWeekNumber}` },
	{ name: 'Week 1', path: '/1' },
	{ name: 'Week 2', path: '/2' },
	{ name: 'Week 3', path: '/3' },
	{ name: 'Week 4', path: '/4' },
	{ name: 'About', path: '/about' }
]);
