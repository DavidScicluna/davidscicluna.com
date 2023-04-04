import { CommonAboutProps } from '../../common/types';

export type Certification = {
	title: string;
	company: string;
	url: string;
};
export type Certifications = Certification[];

export type CertificationsProps = CommonAboutProps;
