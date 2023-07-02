import { FC } from 'react';

import { useGetColor } from '@davidscicluna/component-library';

import { Text, VStack } from '@chakra-ui/react';

import { useGetAbout } from '@/common/hooks';
import parser from 'html-react-parser';

const FooterDescription: FC = () => {
	const paragraphs = useGetAbout();

	const textColor = useGetColor({ color: 'gray', type: 'text.secondary' });
	const anchorColor = useGetColor({ type: 'color' });

	return (
		<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={2}>
			{paragraphs.map((paragraph, index) => (
				<Text
					key={index}
					align='left'
					color={textColor}
					fontSize='sm'
					lineHeight='shorter'
					userSelect='none'
					sx={{ '& a': { color: anchorColor } }}
				>
					{parser(paragraph)}
				</Text>
			))}
		</VStack>
	);
};

export default FooterDescription;
