import type { Work } from '../../types/global';

const featured: Work[] = [
	{
		title: 'FIGURIQUE',
		description:
			'Find high-quality 3D-printable figurines in a variety of genres at Your Figurique. Shop now and bring your favorite characters to life!',
		image: '/work/figurique.png',
		imagePosition: 'left',
		skills: [
			'SvelteKit',
			'TypeScript',
			'TailwindCSS',
			'ExpressJS',
			'MongoDB',
			'Figma',
			'Web Design',
			'Logo Design'
		],
		links: {
			website: 'https://figurique.com/'
		},
		year: '2023'
	},
	{
		title: 'My Portfolio v3.0',
		description:
			'My current portfolio. I took a lot of inspiration from Brittany Chiang and her portfolio. Designed in Figma, then built in SvelteKit using TailwindCSS.',
		image: '/work/portfolio3.png',
		imagePosition: 'right',
		skills: ['SvelteKit', 'TailwindCSS', 'Figma'],
		links: {
			github: 'https://github.com/H7KZ/PortfolioV3',
			website: 'https://kominekjan.cz'
		},
		year: '2023'
	},
	{
		title: 'Disenchantment',
		description:
			'Plugin for Minecraft server. Disenchantment is a plugin that allows you to disenchant items and get the enchantment book back. Built with SpigotAPI and Java.',
		image: '/work/disenchantment.png',
		imagePosition: 'left',
		skills: ['Java', 'SpigotAPI'],
		links: {
			github: 'https://github.com/H7KZ/Disenchantment',
			website: 'https://www.spigotmc.org/resources/disenchantment.110741/'
		},
		year: '2023'
	}
];

const work: Work[] = [
	...featured,
	{
		title: 'Goalspire',
		description:
			"School's year project. Advanced To-Do and Goal List with smart algorithm for notifications. Project leader in the frontend development section.",
		image: '/work/goalspire.png',
		imagePosition: 'left',
		skills: ['SvelteKit', 'SCSS', 'TypeScript', 'Figma'],
		links: {
			website: 'https://goalspire.net'
		},
		firm: 'School',
		year: '2022'
	},
	{
		title: 'Weedly.cz',
		skills: ['SvelteKit', 'TailwindCSS', 'TypeScript'],
		links: {
			website: 'https://weedly.cz'
		},
		firm: 'Froneb',
		year: '2023'
	},
	{
		title: 'Extraordinary Gifts',
		skills: ['Java', 'SpigotAPI'],
		links: {
			github: 'https://github.com/H7KZ/ExtraordinaryGifts',
			website: 'https://www.spigotmc.org/resources/extraordinarygifts-1-16-1-19.103226'
		},
		year: '2022'
	},
	{
		title: 'Admin Mode',
		skills: ['Java', 'SpigotAPI'],
		links: {
			github: 'https://github.com/H7KZ/AdminMode',
			website: 'https://www.spigotmc.org/resources/adminmode-1-16-1-19.103466'
		},
		year: '2022'
	},
	{
		title: 'CryptoLounge.cz',
		skills: ['SvelteKit', 'TailwindCSS', 'TypeScript'],
		firm: 'Froneb',
		year: '2021'
	},
	{
		title: 'My Portfolio v2.0',
		description:
			'My own previous portfolio. Designed in Figma and built in SvelteKit using TailwindCSS.',
		image: '/work/portfolio2.png',
		imagePosition: 'right',
		skills: ['SvelteKit', 'TailwindCSS', 'Figma'],
		links: {
			github: 'https://github.com/H7KZ/PortfolioV2',
			website: 'https://v2.kominekjan.cz'
		},
		year: '2022'
	}
];

export { featured, work };
