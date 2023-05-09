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
