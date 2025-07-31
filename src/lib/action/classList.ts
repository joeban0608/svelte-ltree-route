import type { Action } from 'svelte/action';

const classList: Action<HTMLElement, string[]> = (node, classes) => {
	let cls = classes;
	node.classList.add(...cls);

	return {
		update(newClasses) {
			node.classList.remove(...cls);
			cls = newClasses;
			node.classList.add(...cls);
		},
		destroy() {
			node.classList.remove(...cls);
		}
	};
};

export default classList;