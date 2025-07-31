<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte';
</script>

<DarkMode class="border text-primary-500 dark:border-gray-800 dark:text-primary-600" />

<Navbar>
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
	<NavHamburger />
	<NavUl>
		<NavLi
			href="/"
			activeClass="text-blue-700 dark:text-white"
			nonActiveClass="text-gray-700 dark:text-gray-400">Home</NavLi
		>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/services">Services</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>
