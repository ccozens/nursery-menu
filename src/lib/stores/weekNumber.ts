import { readable, derived } from 'svelte/store';
import { getCurrentWeekNumber } from '$lib/functions';

export const date = readable(new Date());

export const currentWeekNumber = derived(date, $date => getCurrentWeekNumber($date));