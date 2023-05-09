<script lang="ts">
	import type { Experience } from '../../types/global';

	export let experience: Experience;

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
		'now'
	];
</script>

<div
	class="mx-2 flex w-full flex-col gap-3 font-firacode text-sm sm:text-base md:w-80 lg:w-[26rem]"
	data-aos="slide-up"
	data-aos-once="true"
>
	<div class="flex gap-2 font-montserrat">
		<a href={experience.firmLink} target="__blank">
			<img src={experience.icon} alt={experience.icon} class="h-[56px] w-auto" />
		</a>
		<div class="flex flex-col">
			<a href={experience.firmLink} target="__blank">
				<h3
					style="color: {experience.color};"
					class="text-2xl font-extrabold leading-6 md:text-4xl md:leading-9"
				>
					{experience.firm}
				</h3>
			</a>
			<h4 class="text-base font-bold leading-4 text-gray-light md:text-xl md:leading-5">
				{experience.position}
			</h4>
		</div>
	</div>
	<div class="flex gap-2">
		<div style="background-color: {experience.color};" class="min-h-full w-1 shrink-0 rounded" />
		<div class="flex flex-col gap-1 font-medium text-gray-light">
			<p>
				{`${months[experience.start_date.getMonth()]} ${experience.start_date.getFullYear()} - ${
					months[experience.end_date?.getMonth() ?? 12]
				} ${experience.end_date?.getFullYear() ?? ''}`}
			</p>

			<p>{experience.location}</p>

			<p>{experience.time}</p>

			<p>{experience.work}</p>

			{#if experience.description}
				<p class="mt-6 font-inter text-base text-gray">
					{@html experience.description}
				</p>
			{/if}
		</div>
	</div>
	<div class="font-semibold">
		<p>
			{#each experience.skills as skill, i}
				<span style="color: {experience.color};">
					<span>
						{skill}
					</span>
					{#if i != experience.skills.length - 1}
						<span class="text-gray-light"> • </span>
					{/if}
				</span>
			{/each}
		</p>
	</div>
</div>
