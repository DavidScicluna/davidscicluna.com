import { FC } from 'react';

import { useTheme, utils } from '@davidscicluna/component-library';

import { VStack, Text } from '@chakra-ui/react';

import parser from 'react-html-parser';
import { useTranslation } from 'react-i18next';

import { useGetAbout, useSpacing, useUserTheme } from '../../../../../common/hooks';
import Structure from '../Structure';

const { getColor } = utils;

const AboutMe: FC = () => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const { t } = useTranslation();

	const spacing = useSpacing();

	const paragraphs = useGetAbout();

	return (
		<Structure label={`${t('about.labels.aboutMe')}`}>
			<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={spacing}>
				{paragraphs.map((paragraph, index) => (
					<Text
						key={index}
						align='left'
						color={getColor({ theme, colorMode, type: 'text.secondary' })}
						fontSize='xl'
						lineHeight='shorter'
						userSelect='none'
						sx={{ '& a': { color: getColor({ theme, colorMode, color, type: 'color' }) } }}
					>
						{parser(paragraph)}
					</Text>
				))}
			</VStack>
		</Structure>
	);
};

export default AboutMe;
