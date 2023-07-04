import { FC } from 'react';

import { Link, LinkProps as MailOverlayProps } from '@davidscicluna/component-library';

const email = process.env.EMAIL_URL;

const MailOverlay: FC<MailOverlayProps> = ({ children }) => {
	return <Link href={`mailto:${email}`}>{children}</Link>;
};

export default MailOverlay;
