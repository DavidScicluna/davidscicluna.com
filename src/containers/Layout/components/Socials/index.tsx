import { FC } from 'react';

import { useTheme, Link, Tooltip, IconButton, HoverOverlay } from '@davidscicluna/component-library';

import { useMediaQuery, HStack } from '@chakra-ui/react';

import icons from '@/common/assets/icons';
import { MailOverlay } from '@/components';
import { useTranslation } from 'react-i18next';

const { Email: EmailIcon, Github: GithubIcon, Linkedin: LinkedinIcon } = icons;

const email = process.env.EMAIL_URL;

const Socials: FC = () => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { t } = useTranslation();

	return (
		<HStack spacing={0}>
			<HoverOverlay>
				{({ isHovering }) => (
					<MailOverlay>
						<Tooltip
							aria-label={`${t('layout.socials.email.aria-label.tooltip', { email })}`}
							color='gray'
							isOpen={isHovering}
							placement='top'
							label={`${t('layout.socials.email.tooltip', { email })}`}
						>
							<IconButton
								aria-label={`${t('layout.socials.email.aria-label.button', { email })}`}
								color='gray'
								size={isSm ? 'xs' : 'md'}
								variant='icon'
							>
								<EmailIcon />
							</IconButton>
						</Tooltip>
					</MailOverlay>
				)}
			</HoverOverlay>

			<HoverOverlay>
				{({ isHovering }) => (
					<Link href={process.env.LINKEDIN_URL} target='_blank'>
						<Tooltip
							aria-label={`${t('layout.socials.linkedin.aria-label.tooltip')}`}
							color='gray'
							isOpen={isHovering}
							placement='top'
							label={`${t('layout.socials.linkedin.tooltip')}`}
						>
							<IconButton
								aria-label={`${t('layout.socials.linkedin.aria-label.button')}`}
								color='gray'
								size={isSm ? 'xs' : 'md'}
								variant='icon'
							>
								<LinkedinIcon />
							</IconButton>
						</Tooltip>
					</Link>
				)}
			</HoverOverlay>

			<HoverOverlay>
				{({ isHovering }) => (
					<Link href={process.env.GITHUB_URL} target='_blank'>
						<Tooltip
							aria-label={`${t('layout.socials.github.aria-label.tooltip')}`}
							color='gray'
							isOpen={isHovering}
							placement='top'
							label={`${t('layout.socials.github.tooltip')}`}
						>
							<IconButton
								aria-label={`${t('layout.socials.github.aria-label.button')}`}
								color='gray'
								size={isSm ? 'xs' : 'md'}
								variant='icon'
							>
								<GithubIcon />
							</IconButton>
						</Tooltip>
					</Link>
				)}
			</HoverOverlay>
		</HStack>
	);
};

export default Socials;
