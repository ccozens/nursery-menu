export 	async function convertRouteToWeekNumber(slug: string) {
	let weekNumber = 0;
	if (slug === 'one') {
		weekNumber = 1;
	}
	if (slug === 'two') {
		weekNumber = 2;
	}
	if (slug === 'three') {
		weekNumber = 3;
	}
	if (slug === 'four') {
		weekNumber = 4;
	}
	return weekNumber;
};