<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import { Button } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';

	interface Props {
		isSidebarOpen: boolean;
		toggleSidebar: () => void;
	}

	let { isSidebarOpen = $bindable(), toggleSidebar }: Props = $props();
</script>

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
