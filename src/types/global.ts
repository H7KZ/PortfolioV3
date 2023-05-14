export type Experience = {
	firm: string;
	firmLink: string;
	icon: string;
	color: string;
	position: string;
	time: string;
	start_date: Date;
	end_date: Date | null;
	location: string;
	work: string;
	description?: string;
	skills: string[];
};

export type Work = {
	title: string;
	description?: string;
	image?: string;
	imagePosition?: 'left' | 'right';
	skills: string[];
	links?: {
		github?: string;
		website?: string;
	};
	year: string;
	firm?: string;
};
