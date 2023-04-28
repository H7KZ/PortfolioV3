<script>
	import Button from "../portfolio/Button.svelte";

</script>
<div class="h-screen w-full flex justify-center items-center">
    <div class="flex flex-col gap-2">
        <h3 class="font-firacode text-red text-xl">
            Hi, my name is
        </h3>
        <h1 class="font-inter text-gray-light text-8xl font-bold">
            Jan Komínek.
        </h1>
        <h2 class="font-inter text-gray text-6xl font-bold">
            Fullstack web developer.
        </h2>
        <p class="max-w-lg font-inter text-gray text-lg pb-8">
            Passionate Fullstack Web Developer with expertise in SvelteKit and TailwindCSS. Building beautiful & secure web applications at <a href="https://precismo.com" class="text-red transition-all hover:underline">Precismo</a> & <a href="https://haxagon.cz" class="text-red transition-all hover:underline">Haxagon</a>.
        </p>
        <Button href='/#experience'>
            Check my experience!
        </Button>
    </div>
</div>
