import { FC } from 'react';

import { useGetColor } from '@davidscicluna/component-library';

import { VStack, Text } from '@chakra-ui/react';

import { ErrorDescriptionProps } from './common/types';

const ErrorDescription: FC<ErrorDescriptionProps> = ({ title, subtitle }) => {
	const textPrimaryColor = useGetColor({ color: 'gray', type: 'text.primary' });
	const textSecondaryColor = useGetColor({ color: 'gray', type: 'text.secondary' });

	return (
		<VStack alignItems='flex-start' justifyContent='center' spacing={0.5}>
			<Text align='left' color={textPrimaryColor} fontSize='4xl' fontWeight='bold' lineHeight='shorter'>
				{title}
			</Text>
			<Text align='left' color={textSecondaryColor} fontSize='md' lineHeight='shorter'>
				{subtitle}
			</Text>
		</VStack>
	);
};

export default ErrorDescription;
