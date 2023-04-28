<script>
	import { page } from '$app/stores';
	import Button from '../components/portfolio/Button.svelte';
	import Warning from '../icons/Warning.svelte';
</script>

<div class="h-screen w-full flex flex-col gap-4 justify-center items-center">
    <div class="w-28 text-red">
        <Warning />
    </div>
    <h1 class="font-inter text-red text-6xl font-bold">
        {$page.status}
    </h1>
    <h2 class="font-firacode text-gray text-4xl font-bold pb-12">
        {$page?.error?.message}
    </h2>
    <Button href='/'>
        Go back home
    </Button>
</div>