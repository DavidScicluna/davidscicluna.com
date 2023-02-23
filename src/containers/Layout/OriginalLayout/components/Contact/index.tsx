import { FC } from 'react';

import { useTheme, Button, utils } from '@davidscicluna/component-library';

import { useMediaQuery, useBoolean, VStack, Text } from '@chakra-ui/react';

import { dataAttr } from '@chakra-ui/utils';
import { darken, lighten } from 'color2k';
import { useUpdateEffect } from 'usehooks-ts';

import { useSpacing, useUserTheme } from '../../../../../common/hooks';
import { MailOverlay } from '../../../../../components';

const { getColor } = utils;

const transition = 'none';

const Contact: FC = () => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const [isMd] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

	const spacing = useSpacing();

	const [isActive, setIsActive] = useBoolean();
	const [isHovering, setIsHovering] = useBoolean();

	useUpdateEffect(() => (!isHovering && isActive ? setIsActive.off() : undefined), [isHovering]);

	return (
		<MailOverlay>
			<VStack
				data-active={dataAttr(isHovering || isActive)}
				width='100%'
				height={['75vh', '50vh']}
				cursor='pointer'
				alignItems='center'
				justifyContent='center'
				onMouseDown={() => setIsActive.on()}
				onMouseUp={() => setIsActive.off()}
				onMouseEnter={() => setIsHovering.on()}
				onMouseLeave={() => setIsHovering.off()}
				spacing={spacing}
				p={spacing}
				sx={{
					'color': getColor({ theme, colorMode, color, type: 'color' }),
					'background': getColor({ theme, colorMode, color, type: 'light' }),

					'transition': transition,
					'transitionProperty': transition,
					'transitionDuration': transition,
					'transitionTimingFunction': transition,

					'& *': {
						transition: transition,
						transitionProperty: transition,
						transitionDuration: transition,
						transitionTimingFunctio: transition
					}
				}}
				_hover={{
					color: getColor({ theme, colorMode, type: 'background' }),
					background: getColor({ theme, colorMode, color, type: 'color' })
				}}
				_active={{
					color:
						colorMode === 'light'
							? darken(getColor({ theme, colorMode: 'light', type: 'background' }), 0.1)
							: lighten(getColor({ theme, colorMode: 'dark', type: 'background' }), 0.1),
					background:
						colorMode === 'light'
							? darken(getColor({ theme, colorMode, color, type: 'color' }), 0.1)
							: lighten(getColor({ theme, colorMode, color, type: 'color' }), 0.1)
				}}
			>
				<Text
					align='center'
					fontSize={['2xl', '2xl', '3xl', '3xl', '4xl', '4xl']}
					fontWeight='semibold'
					lineHeight='shorter'
					userSelect='none'
					textTransform='uppercase'
				>
					{`Want to get in touch to collaborate on a project you have in mind? Click to talk!`}
				</Text>

				<Button
					color={isHovering || isActive ? (colorMode === 'light' ? 'white' : 'black') : color}
					colorMode={colorMode}
					isActive={isActive}
					size={isSm ? 'md' : isMd ? 'lg' : 'xl'}
				>
					Lets talk
				</Button>
			</VStack>
		</MailOverlay>
	);
};

export default Contact;
