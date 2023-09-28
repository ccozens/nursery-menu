import prisma from '$lib/prisma/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// filter for week 1
	const response = await prisma.foods.findMany({
		where: {
			weeks: {
				some: {
					week_number: 1
				}
			}
		}
	});

	return { food: response };
};
