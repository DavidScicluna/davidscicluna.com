import { FC } from 'react';

import { Space, useTheme, Divider } from '@davidscicluna/component-library';

import { Center, Show, HStack, VStack } from '@chakra-ui/react';

import { useSpacing, useUserTheme } from '../../common/hooks';

import Code from './components/ErrorCode';
import Description from './components/ErrorDescription';
import { ErrorProps } from './types';

const padding: Space = 2;

const Error: FC<ErrorProps> = (props) => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const spacing = useSpacing();

	const { code = 404, title, subtitle, renderActions } = props;

	return (
		<Center width='100%' height='100%' minHeight='inherit'>
			<VStack spacing={spacing} p={padding}>
				<Show breakpoint={`(max-width: ${theme.breakpoints.md})`}>
					<VStack alignItems='flex-start' divider={<Divider colorMode={colorMode} />} spacing={padding}>
						<Code code={code} />
						<Description title={title} subtitle={subtitle} />
					</VStack>
				</Show>
				<Show breakpoint={`(min-width: ${theme.breakpoints.md})`}>
					<HStack
						alignItems='stretch'
						justifyContent='stretch'
						divider={<Divider colorMode={colorMode} orientation='vertical' />}
						spacing={padding}
					>
						<Code code={code} />
						<Description title={title} subtitle={subtitle} />
					</HStack>
				</Show>

				{renderActions && (
					<HStack width='100%' alignItems='flex-start' spacing={padding}>
						{renderActions({ color, colorMode, size: 'md', variant: 'contained' })}
					</HStack>
				)}
			</VStack>
		</Center>
	);
};

export default Error;
