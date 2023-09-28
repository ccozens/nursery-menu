import type { Food } from '$lib/types';

export function getMeat(meal: Food[], $isVegetarian: boolean) {
	// define pudding
	const pudding = meal.filter((item: Food) => item.pudding);
	// define veg option
	const veg = meal.filter((item: Food) => item.vegetarian && !item.pudding);

	// if not vegetarian
	if (!$isVegetarian) {
		// define meat option
		const meat = meal.filter((item: Food) => !item.vegetarian);
		// if no meat option return veg option
		if (meat.length === 0) {
			return [...veg, ...pudding];
		}
		// else if there is a meat option, return meat option
		return [...meat, ...pudding];
	} else {
		// otherwise return veg option
		return [...veg, ...pudding];
	}
}
