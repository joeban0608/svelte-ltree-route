<script lang="ts">
	import classList from '$lib/action/classList';
	import {
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		DarkMode,
		NavLi,
		uiHelpers,
		Button
	} from 'flowbite-svelte';
	import '../app.css';
	import type { Snippet } from 'svelte';
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	const spanClass = 'flex-1 ms-3 whitespace-nowrap';
	let isSidebarOpen = $state(true);
	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}
</script>

<svelte:body
	use:classList={[
		'bg-white',
		'text-black',
		'dark:bg-gradient-to-r',
		'dark:from-gray-950',
		'dark:via-purple-950',
		'dark:to-gray-950',
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

<div class="relative h-screen pt-24 md:pt-20">
	{#if isSidebarOpen}
		<aside
			transition:slide={{ axis: 'x', duration: 300, easing: cubicInOut }}
			class="fixed top-auto bottom-0 left-0 z-50 h-[calc(100vh-3.5rem)] w-64 bg-white md:h-[calc(100vh-5rem)] dark:bg-gray-800"
		>
			<div class="cursor-pointer p-4">
				<Button color="dark" onclick={toggleSidebar} size="sm">
					<Icon icon="mdi:arrow-collapse-left" />
				</Button>
			</div>
		</aside>
	{:else}
		<div
			class="fixed top-24 left-4 z-50 cursor-pointer"
			transition:slide={{ duration: 300, easing: cubicInOut }}
		>
			<Button color="dark" onclick={toggleSidebar} size="sm">
				<Icon icon="mdi:arrow-collapse-right" />
			</Button>
		</div>
	{/if}
	<main class="z-0 h-full {isSidebarOpen ? 'md:pl-64' : 'md:pl-20'}">
		{@render children()}
	</main>
</div>
