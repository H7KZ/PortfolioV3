import type { Experience } from '../../types/global';

const sections: {
	year: string;
	experiences: Experience[];
}[] = [
	{
		year: '2024',
		experiences: []
	},
	{
		year: '2023',
		experiences: [
			{
				firm: 'Precismo',
				firmLink: 'https://precismo.com/',
				icon: '/logos/Precismo.svg',
				color: '#1d66f3',
				position: 'Fullstack Developer',
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
				end_date: new Date('2023-06-17'),
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

export default sections;
