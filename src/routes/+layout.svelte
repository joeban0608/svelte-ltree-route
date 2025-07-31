<script lang="ts">
	import classList from '$lib/action/classList';
	import {
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		DarkMode,
		NavLi,
		Sidebar,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		uiHelpers,
		SidebarButton,

		Button

	} from 'flowbite-svelte';
	import '../app.css';
	import {
		ArrowRightToBracketOutline,
		ChartOutline,
		EditSolid,
		GridSolid,
		MailBoxSolid,
		ShoppingBagSolid,
		UserSolid
	} from 'flowbite-svelte-icons';

	import { page } from '$app/state';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	const spanClass = 'flex-1 ms-3 whitespace-nowrap';
	const demoSidebarUi = uiHelpers();
	let isDemoOpen = $state(false);
	const closeDemoSidebar = demoSidebarUi.close;
	$effect(() => {
		isDemoOpen = demoSidebarUi.isOpen;
	});
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

<SidebarButton
	onclick={demoSidebarUi.toggle}
	class="fixed top-14 !bg-gray-800 p-2"
	style="z-index:99"
/>
<div class="relative h-screen pt-24 md:pt-20">
	<Sidebar
		isSingle={false}
		backdrop={false}
		isOpen={isDemoOpen}
		closeSidebar={closeDemoSidebar}
		params={{ x: -50, duration: 50 }}
		position="absolute"
		activeClass="p-2"
		nonActiveClass="p-2"
		class="top-auto bottom-0 z-50 h-[calc(100vh-3.5rem)] pt-12 md:h-[calc(100vh-5rem)]"
	>
		<SidebarGroup>
			<Button>
				+ Create
			</Button>
		</SidebarGroup>
	</Sidebar>
	<main class="z-0 h-full md:pl-64">
		{@render children()}
	</main>
</div>
