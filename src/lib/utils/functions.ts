export function debounce(func: () => unknown, timeout: number = 300): () => void {
	let timer: number | undefined;
	return (...args: []) => {
		if (!timer) {
		func.apply(debounce, args);
		}
		if (timer)
		clearTimeout(timer);
		timer = setTimeout(() => {
		timer = undefined;
		}, timeout);
	};
}