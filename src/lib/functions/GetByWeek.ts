import prisma from '$lib/prisma/prisma';

export async function getByWeek(weekNumber: number) {
	const response = await prisma.foods.findMany({
		where: {
			weeks: {
				some: {
					week_number: weekNumber
				}
			}
		}
	});
	return response;
}
