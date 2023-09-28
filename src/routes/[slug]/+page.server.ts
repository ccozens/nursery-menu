import { getByWeek } from '$lib/functions';
export async function load({ params }) {
	const slug = Number(params.slug);
	const response = await getByWeek(slug);

	return { food: response };
}
