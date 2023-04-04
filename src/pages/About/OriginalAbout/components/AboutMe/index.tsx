import { FC } from 'react';

import { useTheme, SlideFade, utils } from '@davidscicluna/component-library';

import { VStack, Text } from '@chakra-ui/react';

import parser from 'react-html-parser';
import { useTranslation } from 'react-i18next';

import { inView as defaultInView } from '../../../../../common/data/defaultPropValues';
import { useGetAbout, useGetTransitionMeta, useSpacing, useUserTheme } from '../../../../../common/hooks';
import { CommonAboutProps as AboutMeProps } from '../../common/types';
import Structure from '../Structure';

const { getColor } = utils;

const AboutMe: FC<AboutMeProps> = ({ inView = defaultInView, timeout }) => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const { t } = useTranslation();

	const spacing = useSpacing();

	const paragraphs = useGetAbout();

	const [canTriggerAnimation, { delay = 0, ...config }] = useGetTransitionMeta({ timeout });

	return (
		<Structure inView={inView} timeout={timeout} label={`${t('about.labels.aboutMe')}`}>
			<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={spacing}>
				{paragraphs.map((paragraph, index) => (
					<SlideFade
						key={index}
						in={inView && canTriggerAnimation}
						unmountOnExit={false}
						transition={{
							enter: { ...config, delay: delay * Number(index + 1) },
							exit: { ...config, delay: delay * Number(index + 1) }
						}}
					>
						<Text
							align='left'
							color={getColor({ theme, colorMode, type: 'text.secondary' })}
							fontSize='xl'
							lineHeight='shorter'
							userSelect='none'
							sx={{ '& a': { color: getColor({ theme, colorMode, color, type: 'color' }) } }}
						>
							{parser(paragraph)}
						</Text>
					</SlideFade>
				))}
			</VStack>
		</Structure>
	);
};

export default AboutMe;
