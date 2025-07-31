<script lang="ts">
	import classList from '$lib/action/classList';
	import '../app.css';

	let { children } = $props();
</script>
<svelte:body
	use:classList={[
		'bg-white',
		'text-black',
		'dark:bg-gradient-to-r',
		'dark:from-purple-900',
		'dark:to-gray-900',
		'dark:text-white'
	]}
/>
{@render children()}
