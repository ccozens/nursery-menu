export function scrollIntoView(day: string) {
	const el = document.getElementById(day);
	if (!el) return;
	el.scrollIntoView({
		behavior: 'smooth'
	});
}
