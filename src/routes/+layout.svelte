<script lang="ts">
	import classList from '$lib/action/classList';
	import { Navbar, NavBrand, NavHamburger, NavUl, DarkMode, NavLi } from 'flowbite-svelte';
	import '../app.css';
	import type { Snippet, SvelteComponent } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
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

<Navbar class="fixed top-0 z-50 w-full">
	<div class="flex gap-4">
		<NavBrand href="/">
			<img
				src="https://flowbite.com/docs/images/logo.svg"
				class="mr-3 h-6 sm:h-9"
				alt="Flowbite Logo"
			/>
			<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
				Flowbite
			</span>
		</NavBrand>
		<DarkMode class="border text-primary-500 dark:border-gray-800 dark:text-primary-600" />
	</div>

	<NavHamburger />
	<NavUl>
		<NavLi
			href="/"
			activeClass="text-blue-700 dark:text-white"
			nonActiveClass="text-gray-700 dark:text-gray-400">Home</NavLi
		>
	</NavUl>
</Navbar>
<div class="h-screen pt-16 md:pt-20">
	{@render children()}
</div>
