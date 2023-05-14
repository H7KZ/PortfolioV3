<script lang="ts">
	import ExperienceSection from './ExperienceSection.svelte';
	import type { Experience } from '../../types/global';
	import Header from '../Global/Header.svelte';
	import sections from './experience';

	function renderRightSide(experiences: Experience[]): Experience[] {
		let right: Experience[] = [];
		let i = 1;
		experiences.forEach((ex) => {
			if (i % 2 === 0) {
				right.push(ex);
			}
			i++;
		});

		return right;
	}

	function renderLeftSide(experiences: Experience[]): Experience[] {
		let left: Experience[] = [];
		let i = 1;
		experiences.forEach((ex) => {
			if (i % 2 !== 0) {
				left.push(ex);
			}
			i++;
		});

		return left;
	}
</script>

<div class="flex flex-col items-center justify-center gap-8 px-8 pt-48" id="experience">
	<Header number="02.">My Experience</Header>
	{#each sections as section}
		<div class="flex max-w-md flex-col items-center justify-center gap-4 md:max-w-none">
			{#if section.experiences.length !== 0}
				<div class="flex gap-8">
					<div class="my-6 hidden flex-col gap-24 md:flex">
						{#each renderLeftSide(section.experiences) as experience}
							<ExperienceSection {experience} />
						{/each}
					</div>

					<div class="ml-2 min-h-full w-1 shrink-0 rounded bg-gray md:m-0" />

					<div class="my-6 hidden flex-col gap-24 md:flex">
						<div class="h-9" />
						{#each renderRightSide(section.experiences) as experience}
							<ExperienceSection {experience} />
						{/each}
					</div>

					<div class="my-6 flex flex-col gap-16 md:hidden">
						{#each section.experiences as experience}
							<ExperienceSection {experience} />
						{/each}
					</div>
				</div>
			{/if}
		</div>
		<div class="ml-2 flex w-full max-w-md justify-start md:m-0 md:max-w-none md:justify-center">
			<h1 class="font-firacode text-3xl font-bold text-gray">
				{section.year}
			</h1>
		</div>
	{/each}
</div>
