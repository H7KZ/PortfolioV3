<script lang="ts">
	import NavbarLink from './NavbarLink.svelte';
</script>

<div class="absolute top-0 left-0 w-screen flex items-center justify-between px-16 pt-6">
	<h1 class="font-yellowtail text-6xl text-red select-none">K</h1>
	<div class="flex justify-center gap-16 pr-12">
		<NavbarLink href="/#about" number="01.">About</NavbarLink>
		<NavbarLink href="/#experience" number="02.">Experience</NavbarLink>
		<NavbarLink href="/#work" number="03.">Work</NavbarLink>
		<NavbarLink href="/#contact" number="04.">Contact</NavbarLink>
	</div>
</div>
