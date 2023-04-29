<script lang="ts">
	import Burger from '../portfolio/Burger.svelte';
	import NavbarLink from './NavbarLink.svelte';

	let isNavbarOpen = false;
</script>

<div class="absolute left-0 top-0 z-10 flex w-full items-center justify-between px-16 pt-6">
	<h1 class="select-none font-yellowtail text-6xl text-red">K</h1>
	<div class="hidden justify-center gap-8 md:flex lg:gap-16 lg:pr-12">
		<NavbarLink href="/#about" number="01.">About</NavbarLink>
		<NavbarLink href="/#experience" number="02.">Experience</NavbarLink>
		<NavbarLink href="/#work" number="03.">Work</NavbarLink>
		<NavbarLink href="/#contact" number="04.">Contact</NavbarLink>
	</div>
	<div class="flex md:hidden">
		<Burger bind:isNavbarOpen />
	</div>
</div>
<div class="fixed right-0 top-0 {isNavbarOpen ? 'block' : 'hidden'} transition-all duration-300">
	<div class="absolute right-0 top-0 h-screen w-80 bg-gray-darker py-24">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="flex flex-col gap-8 p-8" on:click|preventDefault={() => (isNavbarOpen = false)}>
			<NavbarLink href="/#about" number="01.">About</NavbarLink>
			<NavbarLink href="/#experience" number="02.">Experience</NavbarLink>
			<NavbarLink href="/#work" number="03.">Work</NavbarLink>
			<NavbarLink href="/#contact" number="04.">Contact</NavbarLink>
		</div>
	</div>
</div>
