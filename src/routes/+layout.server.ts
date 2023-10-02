import type { LayoutServerLoad } from './$types';
import prisma from '$lib/prisma/prisma';

// retrieve meal names and times from db and order by start_time
export const load: LayoutServerLoad = async ({ setHeaders }) => {
	const meals = await prisma.meals.findMany({
		orderBy: [{ start_time: 'asc' }]
	});

	setHeaders({
		'cache-control': 'max-age=600'
	});

	return { meals };
};
