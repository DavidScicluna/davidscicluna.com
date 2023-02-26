import { FC } from 'react';

import { useTheme, ExternalLink, Tooltip, IconButton } from '@davidscicluna/component-library';

import { useMediaQuery, useBoolean, HStack } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import icons from '../../../../../common/assets/icons';
import { useUserTheme } from '../../../../../common/hooks';
import { MailOverlay } from '../../../../../components';

const { Email: EmailIcon, Github: GithubIcon, Linkedin: LinkedinIcon } = icons;

const Socials: FC = () => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { t } = useTranslation();

	const [isHoveringEmail, setIsHoveringEmail] = useBoolean();
	const [isHoveringLinkedin, setIsHoveringLinkedin] = useBoolean();
	const [isHoveringGithub, setIsHoveringGithub] = useBoolean();

	return (
		<HStack spacing={0}>
			<MailOverlay>
				<Tooltip
					aria-label={`${t('layout.socials.email.aria-label.tooltip', {
						email: import.meta.env.VITE_EMAIL_URL
					})}`}
					colorMode={colorMode}
					isOpen={isHoveringEmail}
					placement='top'
					label={`${t('layout.socials.email.tooltip', {
						email: import.meta.env.VITE_EMAIL_URL
					})}`}
				>
					<IconButton
						aria-label={`${t('layout.socials.email.aria-label.button', {
							email: import.meta.env.VITE_EMAIL_URL
						})}`}
						colorMode={colorMode}
						onMouseEnter={() => setIsHoveringEmail.on()}
						onMouseLeave={() => setIsHoveringEmail.off()}
						size={isSm ? 'xs' : 'md'}
						variant='icon'
					>
						<EmailIcon />
					</IconButton>
				</Tooltip>
			</MailOverlay>
			<ExternalLink href='https://www.linkedin.com/in/davidscicluna98/'>
				<Tooltip
					aria-label={`${t('layout.socials.linkedin.aria-label.tooltip')}`}
					colorMode={colorMode}
					isOpen={isHoveringLinkedin}
					placement='top'
					label={`${t('layout.socials.linkedin.tooltip')}`}
				>
					<IconButton
						aria-label={`${t('layout.socials.linkedin.aria-label.button')}`}
						colorMode={colorMode}
						onMouseEnter={() => setIsHoveringLinkedin.on()}
						onMouseLeave={() => setIsHoveringLinkedin.off()}
						size={isSm ? 'xs' : 'md'}
						variant='icon'
					>
						<LinkedinIcon />
					</IconButton>
				</Tooltip>
			</ExternalLink>
			<ExternalLink href='https://github.com/DavidScicluna'>
				<Tooltip
					aria-label={`${t('layout.socials.github.aria-label.tooltip')}`}
					colorMode={colorMode}
					isOpen={isHoveringGithub}
					placement='top'
					label={`${t('layout.socials.github.tooltip')}`}
				>
					<IconButton
						aria-label={`${t('layout.socials.github.aria-label.button')}`}
						colorMode={colorMode}
						onMouseEnter={() => setIsHoveringGithub.on()}
						onMouseLeave={() => setIsHoveringGithub.off()}
						size={isSm ? 'xs' : 'md'}
						variant='icon'
					>
						<GithubIcon />
					</IconButton>
				</Tooltip>
			</ExternalLink>
		</HStack>
	);
};

export default Socials;
