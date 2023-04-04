import { FC, useMemo } from 'react';

import { useTheme, ExternalLink, Button, Divider, utils } from '@davidscicluna/component-library';

import { VStack, Center, Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { useSpacing, useUserTheme } from '../../../../../common/hooks';
import { HoveringOverlay } from '../../../../../components';
import Structure from '../Structure';

import { Certifications as CertificationsType } from './types';

const { getColor } = utils;

const Certifications: FC = () => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const { i18n, t } = useTranslation();

	const spacing = useSpacing();

	const certifications = useMemo<CertificationsType>(() => {
		return [
			{
				title: `${t('about.certifications.udacity')}`,
				company: 'Udacity',
				url: 'https://graduation.udacity.com/confirm/NT477K7H'
			},
			{
				title: `${t('about.certifications.freecodecamp')}`,
				company: 'FreeCodeCamp',
				url: 'https://www.freecodecamp.org/certification/davidscicluna/responsive-web-design'
			}
		];
	}, [i18n.language]);

	return (
		<Structure label={`${t('about.labels.certifications')}`}>
			<VStack
				width='100%'
				alignItems='stretch'
				justifyContent='stretch'
				divider={<Divider colorMode={colorMode} />}
				spacing={spacing}
			>
				{certifications.map(({ title, company, url }, index) => (
					<HoveringOverlay key={index}>
						{(isHovering) => (
							<ExternalLink isFullWidth href={url} target='_blank'>
								<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={2}>
									<VStack width='100%' alignItems='stretch' justifyContent='stretch'>
										<Text
											align='left'
											color={getColor({
												theme,
												colorMode,
												color: isHovering ? color : 'gray',
												type: isHovering ? 'color' : 'text.primary'
											})}
											fontSize='2xl'
											fontWeight='semibold'
											lineHeight='shorter'
										>
											{title}
										</Text>

										<Text
											align='left'
											color={getColor({
												theme,
												colorMode,
												color: isHovering ? color : 'gray',
												type: isHovering ? 'color' : 'text.secondary'
											})}
											fontSize='md'
											fontWeight='medium'
											lineHeight='shorter'
											textTransform='uppercase'
										>
											{company}
										</Text>
									</VStack>

									<Center width='100%' justifyContent='flex-start'>
										<Button
											color={color}
											colorMode={colorMode}
											variant='text'
											sx={{ height: 'auto', p: '0px !important' }}
										>
											See Credential
										</Button>
									</Center>
								</VStack>
							</ExternalLink>
						)}
					</HoveringOverlay>
				))}
			</VStack>
		</Structure>
	);
};

export default Certifications;
