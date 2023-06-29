import { FC } from 'react';

import { useGetColor } from '@davidscicluna/component-library';

import { Text } from '@chakra-ui/react';

import { ErrorCodeProps } from './common/types';

const ErrorCode: FC<ErrorCodeProps> = ({ code }) => {
	const color = useGetColor({ type: 'color' });

	return (
		<Text align='right' color={color} fontSize='9xl' fontWeight='extrabold' lineHeight={1}>
			{code}
		</Text>
	);
};

export default ErrorCode;
