import { CommonAboutProps } from '../../common/types';

export type Experience = {
	startedAt: string;
	endedAt?: string;
	place: string;
	role: string;
};
export type Experiences = Experience[];

export type ExperienceProps = CommonAboutProps;
