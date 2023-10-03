import type { Meal } from '$lib/types';

export function addPudding(mealArray: Meal[]) {
	const copyMealArray = [...mealArray];
	const pudding = { id: 10n, name: 'Pudding', start_time: '', end_time: '' };
	// add pudding after lunch and tea

	copyMealArray.splice(3, 0, pudding);
	copyMealArray.push(pudding);

	return copyMealArray;
}
