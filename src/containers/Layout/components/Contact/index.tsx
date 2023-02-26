import { FC } from 'react';

import { useTheme, Button, utils } from '@davidscicluna/component-library';

import { useMediaQuery, useBoolean, VStack, Text } from '@chakra-ui/react';

import { dataAttr } from '@chakra-ui/utils';
import { darken } from 'color2k';
import { useTranslation } from 'react-i18next';
import { useUpdateEffect } from 'usehooks-ts';

import { useSpacing, useUserTheme } from '../../../../common/hooks';
import { MailOverlay } from '../../../../components';

const { getColor } = utils;

const transition = 'none';

const Contact: FC = () => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const [isMd] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

	const spacing = useSpacing();

	const { t } = useTranslation();

	const [isActive, setIsActive] = useBoolean();
	const [isHovering, setIsHovering] = useBoolean();

	useUpdateEffect(() => (!isHovering && isActive ? setIsActive.off() : undefined), [isHovering]);

	return (
		<MailOverlay>
			<VStack
				data-active={dataAttr(isActive)}
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
					'color': getColor({ theme, colorMode, color, type: 'dark' }),
					'background': getColor({ theme, colorMode, color, type: 'light' }),

					'transition': transition,
					'transitionProperty': transition,
					'transitionDuration': transition,
					'transitionTimingFunction': transition,

					'& button': {
						'&::before': {
							boxShadow: `0 4px 0 0 ${darken(getColor({ theme, colorMode, color, type: 'dark' }), 0.15)}`,
							borderColor: getColor({ theme, colorMode, color, type: 'dark' }),
							backgroundColor: getColor({ theme, colorMode, color, type: 'dark' }),
							background: getColor({ theme, colorMode, color, type: 'dark' })
						}
					},

					'& span': {
						color: getColor({ theme, colorMode, color, type: 'light' })
					},

					'& *': {
						transition: transition,
						transitionProperty: transition,
						transitionDuration: transition,
						transitionTimingFunctio: transition
					}
				}}
				_hover={{
					'color': getColor({ theme, colorMode, color, type: 'light' }),
					'background': getColor({ theme, colorMode, color, type: 'dark' }),

					'& button': {
						'&::before': {
							boxShadow: `0 4px 0 0 ${darken(
								getColor({ theme, colorMode, color, type: 'light' }),
								0.15
							)}`,
							borderColor: getColor({ theme, colorMode, color, type: 'light' }),
							backgroundColor: getColor({ theme, colorMode, color, type: 'light' }),
							background: getColor({ theme, colorMode, color, type: 'light' })
						},

						'&:hover': {
							'&::before': {
								boxShadow: `0 4px 0 0 ${darken(
									getColor({ theme, colorMode, color, type: 'light' }),
									0.15
								)}`,
								borderColor: getColor({ theme, colorMode, color, type: 'light' }),
								backgroundColor: getColor({ theme, colorMode, color, type: 'light' }),
								background: getColor({ theme, colorMode, color, type: 'light' })
							},

							'&:active': {
								'&::before': {
									boxShadow: 'none',
									borderColor: getColor({ theme, colorMode, color, type: 'light' }),
									backgroundColor: getColor({ theme, colorMode, color, type: 'light' }),
									background: getColor({ theme, colorMode, color, type: 'light' })
								}
							}
						},

						'&::active': {
							'&::before': {
								boxShadow: 'none',
								borderColor: getColor({ theme, colorMode, color, type: 'light' }),
								backgroundColor: getColor({ theme, colorMode, color, type: 'light' }),
								background: getColor({ theme, colorMode, color, type: 'light' })
							}
						}
					},

					'& span': {
						color: getColor({ theme, colorMode, color, type: 'dark' })
					},

					'&:active': {
						'color': getColor({ theme, colorMode, color, type: 'light' }),
						'background': getColor({ theme, colorMode, color, type: 'dark' }),

						'& button': {
							'&::before': {
								boxShadow: 'none',
								borderColor: getColor({ theme, colorMode, color, type: 'light' }),
								backgroundColor: getColor({ theme, colorMode, color, type: 'light' }),
								background: getColor({ theme, colorMode, color, type: 'light' })
							}
						},

						'& span': {
							color: getColor({ theme, colorMode, color, type: 'dark' })
						}
					}
				}}
				_active={{
					'color': getColor({ theme, colorMode, color, type: 'light' }),
					'background': getColor({ theme, colorMode, color, type: 'dark' }),

					'& button': {
						'&::before': {
							boxShadow: 'none',
							borderColor: getColor({ theme, colorMode, color, type: 'light' }),
							backgroundColor: getColor({ theme, colorMode, color, type: 'light' }),
							background: getColor({ theme, colorMode, color, type: 'light' })
						}
					},

					'& span': {
						color: getColor({ theme, colorMode, color, type: 'dark' })
					}
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
					{`${t('layout.contact.label')}`}
				</Text>

				<Button color={color} colorMode={colorMode} isActive={isActive} size={isSm ? 'md' : isMd ? 'lg' : 'xl'}>
					{`${t('layout.contact.action')}`}
				</Button>
			</VStack>
		</MailOverlay>
	);
};

export default Contact;
