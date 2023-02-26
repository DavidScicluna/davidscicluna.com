import { FC } from 'react';

import { ExternalLink, LinkProps as MailOverlayProps } from '@davidscicluna/component-library';

const email = import.meta.env.VITE_EMAIL_URL;

const MailOverlay: FC<MailOverlayProps> = ({ children }) => {
	return <ExternalLink href={`mailto:${email}`}>{children}</ExternalLink>;
};

export default MailOverlay;
