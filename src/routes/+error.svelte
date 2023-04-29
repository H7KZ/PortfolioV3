<script>
	import { page } from '$app/stores';
	import Button from '../components/portfolio/Button.svelte';
	import Warning from '../icons/Warning.svelte';
</script>

<div class="flex h-screen w-full flex-col items-center justify-center gap-4">
	<div class="w-28 text-red">
		<Warning />
	</div>
	<h1 class="font-inter text-6xl font-bold text-red">
		{$page.status}
	</h1>
	<h2 class="pb-12 font-firacode text-4xl font-bold text-gray">
		{$page?.error?.message}
	</h2>
	<Button href="/">Go back home</Button>
</div>
