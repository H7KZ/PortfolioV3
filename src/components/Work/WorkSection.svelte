<script lang="ts">
	import type { Work } from '../../types/global';
	import GitHub from '../../icons/GitHub.svelte';
	import Link from '../../icons/Link.svelte';

	export let work: Work;
</script>

<div
	class="flex h-full min-h-[20rem] w-full max-w-6xl flex-col justify-center gap-2 {work.imagePosition ===
	'right'
		? 'max-lg:items-end'
		: ''} lg:flex-row lg:gap-16"
	data-aos="slide-up"
	data-aos-once="true"
>
	{#if work.imagePosition === 'left'}
		<img
			src={work.image}
			alt="Work"
			class="hidden h-full max-h-[22rem] shadow-[0_0_32px_0_#00000040] lg:block"
		/>
	{/if}
	<img
		src={work.image}
		alt="Work"
		class="block h-full max-h-[22rem] w-min shadow-[0_0_32px_0_#00000040] lg:hidden"
	/>
	<div
		class="flex flex-col justify-between gap-6 {work.imagePosition === 'right' ? 'items-end' : ''}"
	>
		<div class="flex flex-col gap-6 {work.imagePosition === 'right' ? 'items-end text-end' : ''}">
			<div class="flex flex-col {work.imagePosition === 'right' ? 'items-end' : ''}">
				<h3 class="font-firacode text-xs font-medium text-red sm:text-sm">Featured Project</h3>
				<h1 class="font-inter text-3xl font-bold text-gray-light sm:text-4xl">
					{work.title}
				</h1>
			</div>
			<p class="font-inter text-sm font-medium text-gray sm:text-base">
				{work.description}
			</p>
		</div>
		<div class="flex flex-col gap-3">
			<p class="sm:text-lg">
				{#each work.skills as skill, i}
					<span class="font-semibold text-red">
						<span>
							{skill}
						</span>
						{#if i != work.skills.length - 1}
							<span class="text-gray-light"> • </span>
						{/if}
					</span>
				{/each}
			</p>
			<div
				class="flex items-end gap-4 text-gray {work.imagePosition === 'right' ? 'justify-end' : ''}"
			>
				{#if work.links?.github}
					<a
						href={work.links.github}
						target="_blank"
						rel="noopener noreferrer"
						class="transition-all hover:text-red"
					>
						<div class="h-5 w-5">
							<GitHub />
						</div>
					</a>
				{/if}
				{#if work.links?.website}
					<a
						href={work.links.website}
						target="_blank"
						rel="noopener noreferrer"
						class="transition-all hover:text-red"
					>
						<div class="h-4 w-4">
							<Link />
						</div>
					</a>
				{/if}
			</div>
		</div>
	</div>
	{#if work.imagePosition === 'right'}
		<img
			src={work.image}
			alt="Work"
			class="hidden h-full max-h-[22rem] shadow-[0_0_32px_0_#00000040] lg:block"
		/>
	{/if}
</div>
