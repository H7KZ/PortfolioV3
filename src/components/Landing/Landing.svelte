<script>
	import Button from '../Global/Button.svelte';
</script>

<div class="flex h-screen w-full items-center justify-center">
	<div class="flex flex-col gap-2 px-4">
		<h3 class="font-firacode text-sm text-red md:text-lg lg:text-xl">Hi, my name is</h3>
		<h1 class="font-inter text-4xl font-bold text-gray-light md:text-6xl lg:text-8xl">
			Jan Komínek.
		</h1>
		<h2 class="font-inter text-2xl font-bold text-gray md:text-4xl lg:text-6xl">
			Fullstack web developer.
		</h2>
		<p class="max-w-lg pb-8 font-inter text-sm text-gray md:text-base lg:text-lg">
			Passionate Fullstack Web Developer with expertise in SvelteKit and TailwindCSS. Building
			beautiful & secure web applications at <a
				href="https://precismo.com"
				class="text-red transition-all hover:underline">Precismo</a
			>
			& <a href="https://haxagon.cz" class="text-red transition-all hover:underline">Haxagon</a>.
		</p>
		<Button href="/#experience">Check my experience!</Button>
	</div>
</div>
