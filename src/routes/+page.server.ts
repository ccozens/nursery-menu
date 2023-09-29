import { redirect } from '@sveltejs/kit';
import { currentWeekNumber } from '$lib/stores';
import { get } from 'svelte/store';

export async function load() {
	const weekNumber = get(currentWeekNumber);
	throw redirect(307, `/${weekNumber}`);
}
