import { FC } from 'react';

import { useTheme, ExternalLink, Tooltip, IconButton } from '@davidscicluna/component-library';

import { useMediaQuery, useBoolean, HStack } from '@chakra-ui/react';

import icons from '../../../../../common/assets/icons';
import { useUserTheme } from '../../../../../common/hooks';
import { MailOverlay } from '../../../../../components';

const { Email: EmailIcon, Github: GithubIcon, Linkedin: LinkedinIcon } = icons;

const Socials: FC = () => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const [isHoveringEmail, setIsHoveringEmail] = useBoolean();
	const [isHoveringLinkedin, setIsHoveringLinkedin] = useBoolean();
	const [isHoveringGithub, setIsHoveringGithub] = useBoolean();

	return (
		<HStack spacing={0}>
			<MailOverlay>
				<Tooltip
					aria-label='Send email to "hello@davidscicluna.com" (tooltip)'
					colorMode={colorMode}
					isOpen={isHoveringEmail}
					placement='top'
					label='Email: "hello@davidscicluna.com"'
				>
					<IconButton
						aria-label='Send email to "hello@davidscicluna.com" '
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
					aria-label='Open Linkedin Profile Page (tooltip)'
					colorMode={colorMode}
					isOpen={isHoveringLinkedin}
					placement='top'
					label='Linkedin Profile'
				>
					<IconButton
						aria-label='Open Linkedin Profile Page'
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
					aria-label='Open Github Profile Page (tooltip)'
					colorMode={colorMode}
					isOpen={isHoveringGithub}
					placement='top'
					label='Github Profile'
				>
					<IconButton
						aria-label='Open Github Profile Page'
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
