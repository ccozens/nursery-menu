export interface Food {
	id: bigint;
	vegetarian: boolean | null;
	pudding: boolean | null;
	food: string;
	day: string[];
	meal: string[];
}
