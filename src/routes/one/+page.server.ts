import prisma from '$lib/prisma/prisma';

export async function load({ route }) {

	function convertRouteToWeekNumber(route: {id: string;}) {
		let weekNumber = 0;
		if (route.id === 'one') {
			weekNumber = 1;
		}
		if (route.id === 'two') {
			weekNumber = 2;
		}
		if (route.id === 'three') {
			weekNumber = 3;
		}
		if (route.id === 'four') {
			weekNumber = 4;
		}
		return weekNumber;
	};

	const weekNumber = convertRouteToWeekNumber(route);

	// filter for week 1
	const response = await prisma.foods.findMany({
		where: {
			weeks: {
				some: {
					week_number: weekNumber
				}
			}
		}
	});

	return { food: response };
};
