import { convertRouteToWeekNumber, getByWeek } from '$lib/functions';
export async function load({ params }) {
	const slug = params.slug;
	
	const weekNumber = await convertRouteToWeekNumber(slug);
	const response = await getByWeek(weekNumber);

	return { food: response };
}
