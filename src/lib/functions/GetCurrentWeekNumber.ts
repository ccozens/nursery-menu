export function getCurrentWeekNumber(date: Date): number {
	const startDate = new Date('2023-09-22'); // Start of week 1
	const diffTime = Math.abs(date.getTime() - startDate.getTime());
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	const weekNumber = Math.ceil(diffDays / 7) % 4 || 4; // 1-2-3-4-1-2-3-4...

	return weekNumber;
}
