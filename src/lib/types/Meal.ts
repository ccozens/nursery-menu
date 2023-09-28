export interface Meal {
	id?: bigint;
	name: string;
	start_time: string;
	end_time: string | null;
}