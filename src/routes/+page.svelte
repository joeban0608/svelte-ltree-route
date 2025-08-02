<script lang="ts">
	import SidebarLeft from '$lib/component/SidebarLeft.svelte';

	let isSidebarOpen = $state(true);
	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}
</script>

<SidebarLeft {isSidebarOpen} {toggleSidebar}></SidebarLeft>
<main
	class="z-0 h-full {isSidebarOpen
		? 'md:pl-64'
		: 'md:pl-20'} transition-[padding-left] duration-300 ease-in-out"
>
	<h1>Home page</h1>
</main>
