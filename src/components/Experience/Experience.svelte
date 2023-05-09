<script lang="ts">
	import ExperienceSection from './ExperienceSection.svelte';
	import type { Experience } from '../../types/global';
	import Header from '../portfolio/Header.svelte';

	const sections = [
		{
			year: '2024',
			experiences: []
		},
		{
			year: '2023',
			experiences: [
				{
					firm: 'FIGURIQUE',
					firmLink: 'https://figurique.com/',
					icon: '/logos/Figurique.svg',
					color: '#f59e0b',
					position: 'Co-Founder | Lead Developer',
					time: 'Part time',
					start_date: new Date('2023-04-25'),
					end_date: null,
					location: 'Prague, Czech Republic',
					work: 'Remote',
					description: '',
					skills: ['TailwindCSS', 'SvelteKit', 'TypeScript', 'ExpressJS', 'MongoDB']
				},
				{
					firm: 'Precismo',
					firmLink: 'https://precismo.com/',
					icon: '/logos/Precismo.svg',
					color: '#1d66f3',
					position: 'Frontend Developer',
					time: 'Part time',
					start_date: new Date('2023-01-02'),
					end_date: null,
					location: 'Prague, Czech Republic',
					work: 'Remote / Office',
					description:
						'Develop and maintain private web applications for customers of Precismo.<br /><br />Work in well driven environment and huge team of developers.',
					skills: ['ReactJS', 'JavaScript', 'MaterialUI', 'Playwright']
				},
				{
					firm: 'Froneb',
					firmLink: 'https://froneb.com/',
					icon: '/logos/Froneb.svg',
					color: '#2CDC7B',
					position: 'Frontend Developer',
					time: 'Contract',
					start_date: new Date('2022-12-28'),
					end_date: new Date('2023-01-18'),
					location: 'Prague, Czech Republic',
					work: 'Remote',
					description:
						'Developing an ecommerence store.<br /><br />Close collaboration with designers and backend team.',
					skills: ['TailwindCSS', 'TypeScript', 'SvelteKit']
				}
			]
		},
		{
			year: '2022',
			experiences: [
				{
					firm: 'HAXAGON',
					firmLink: 'https://haxagon.cz/',
					icon: '/logos/Haxagon.svg',
					color: '#9228E6',
					position: 'Frontend Developer',
					time: 'Part time',
					start_date: new Date('2022-10-01'),
					end_date: null,
					location: 'Prague, Czech Republic',
					work: 'Remote',
					description:
						'Maintaing and improving e-learning platform.<br /><br />Working in an amazing team of developers and designers.',
					skills: ['UnoCSS', 'TypeScript', 'VueJS']
				},
				{
					firm: 'TV NOVA',
					firmLink: 'https://tv.nova.cz/',
					icon: '/logos/TVNova.svg',
					color: '#D33238',
					position: 'Application Tester',
					time: 'intership',
					start_date: new Date('2022-05-14'),
					end_date: new Date('2022-05-28'),
					location: 'Prague, Czech Republic',
					work: 'Office',
					skills: ['Software testing', 'Manual testing', 'Bug reporting']
				},
				{
					firm: 'Froneb',
					firmLink: 'https://froneb.com/',
					icon: '/logos/Froneb.svg',
					color: '#2CDC7B',
					position: 'Frontend Developer',
					time: 'Contract',
					start_date: new Date('2022-01-01'),
					end_date: new Date('2022-03-31'),
					location: 'Prague, Czech Republic',
					work: 'Remote',
					skills: ['TailwindCSS', 'TypeScript', 'SvelteKit']
				}
			]
		}
	];

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
	<Header number="02.">My Experiences</Header>
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
