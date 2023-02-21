import { FC } from 'react';

import { ExternalLink, LinkProps as MailOverlayProps } from '@davidscicluna/component-library';

const email = 'hello@davidscicluna.com';

const MailOverlay: FC<MailOverlayProps> = ({ children }) => {
	return <ExternalLink href={`mailto:${email}`}>{children}</ExternalLink>;
};

export default MailOverlay;
