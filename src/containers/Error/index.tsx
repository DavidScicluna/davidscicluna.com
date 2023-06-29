import { FC } from 'react';

import { useTheme, Divider } from '@davidscicluna/component-library';

import { Center, Show, HStack, VStack } from '@chakra-ui/react';

import { useSpacing } from '../../common/hooks';

import { ErrorProps } from './common/types';
import ErrorCode from './components/ErrorCode';
import ErrorDescription from './components/ErrorDescription';

const Error: FC<ErrorProps> = (props) => {
	const theme = useTheme();

	const [spacing, { xs: xsSpacing }] = useSpacing();

	const { code = 404, title, subtitle, renderActions } = props;

	return (
		<Center width='100%' height='100%' minHeight='inherit'>
			<VStack spacing={spacing} p={xsSpacing}>
				<Show breakpoint={`(max-width: ${theme.breakpoints.md})`}>
					<VStack alignItems='flex-start' divider={<Divider />} spacing={xsSpacing}>
						<ErrorCode code={code} />
						<ErrorDescription title={title} subtitle={subtitle} />
					</VStack>
				</Show>
				<Show breakpoint={`(min-width: ${theme.breakpoints.md})`}>
					<HStack
						alignItems='stretch'
						justifyContent='stretch'
						divider={<Divider orientation='vertical' />}
						spacing={xsSpacing}
					>
						<ErrorCode code={code} />
						<ErrorDescription title={title} subtitle={subtitle} />
					</HStack>
				</Show>

				{renderActions && (
					<HStack width='100%' alignItems='flex-start' spacing={xsSpacing}>
						{renderActions({ size: 'md', variant: 'contained' })}
					</HStack>
				)}
			</VStack>
		</Center>
	);
};

export default Error;
