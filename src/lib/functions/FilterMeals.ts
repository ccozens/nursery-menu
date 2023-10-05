import type { Food } from '$lib/types';
export function filterMeals(menu: Food[]) {
	const breakfast = menu.filter((item: Food) => item.meal.includes('Breakfast'));
	const snack1 = menu.filter((item: Food) => item.meal.includes('Snack1'));
	const lunch = menu.filter((item: Food) => item.meal.includes('Lunch'));
	const snack2 = menu.filter((item: Food) => item.meal.includes('Snack2'));
	const tea = menu.filter((item: Food) => item.meal.includes('Tea'));

	return {
		breakfast,
		snack1,
		lunch,
		snack2,
		tea
	};
}
