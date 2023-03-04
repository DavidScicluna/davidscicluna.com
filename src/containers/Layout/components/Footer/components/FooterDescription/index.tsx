import { FC } from 'react';

import { useTheme, utils } from '@davidscicluna/component-library';

import { Text, VStack } from '@chakra-ui/react';

import parser from 'react-html-parser';

import { useGetAbout, useUserTheme } from '../../../../../../common/hooks';

const { getColor } = utils;

const FooterDescription: FC = () => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const paragraphs = useGetAbout();

	return (
		<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={2}>
			{paragraphs.map((paragraph, index) => (
				<Text
					key={index}
					align='left'
					color={getColor({ theme, colorMode, type: 'text.secondary' })}
					fontSize='sm'
					lineHeight='shorter'
					userSelect='none'
					sx={{ '& a': { color: getColor({ theme, colorMode, color, type: 'color' }) } }}
				>
					{parser(paragraph)}
				</Text>
			))}
		</VStack>
	);
};

export default FooterDescription;
