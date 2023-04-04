import { FC, Fragment } from 'react';

import { useTheme, Image, Fade, utils } from '@davidscicluna/component-library';

import { useBreakpointValue, Center, AspectRatio } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import banner from '../../../../../common/assets/banner';
import portrait from '../../../../../common/assets/portrait';
import { inView as defaultInView } from '../../../../../common/data/defaultPropValues';
import { useGetTransitionMeta, useUserTheme } from '../../../../../common/hooks';
import { HoveringOverlay } from '../../../../../components';
import { CommonAboutProps as CoverProps } from '../../common/types';

const { checkIsTouchDevice, getColor } = utils;

const isTouchDevice = checkIsTouchDevice();

const Cover: FC<CoverProps> = ({ inView = defaultInView, timeout }) => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const bannerSize = useBreakpointValue<keyof typeof banner>({
		base: 'xs',
		xs: 'xs',
		sm: 'sm',
		md: 'md',
		lg: 'lg',
		xl: 'xl'
	});
	const portraitSize = useBreakpointValue<keyof typeof portrait>({
		base: 'xs',
		xs: 'xs',
		sm: 'sm',
		md: 'md',
		lg: 'lg',
		xl: 'xl'
	});

	const { t } = useTranslation();

	const [canTriggerAnimation, { delay = 0, ...config }] = useGetTransitionMeta({ timeout });

	return (
		<HoveringOverlay
			as={Center}
			width='100%'
			position='relative'
			borderBottomWidth='2px'
			borderBottomStyle='solid'
			borderBottomColor={getColor({ theme, colorMode, type: 'divider' })}
			overflowX='hidden'
			overflowY='hidden'
		>
			{(isHovering) => (
				<Fragment>
					<Fade
						in={inView && canTriggerAnimation}
						unmountOnExit={false}
						transition={{ enter: { ...config, delay }, exit: { ...config, delay } }}
						style={{ width: '100%', height: 'auto' }}
					>
						<AspectRatio width='100%' height='100%' ratio={21 / 9}>
							<Image
								alt={`${t('about.cover.banner')}`}
								width='inherit'
								height='inherit'
								borderRadius='none'
								src={{
									full: bannerSize ? banner[bannerSize][colorMode] : undefined,
									thumbnail: banner.thumbnail[colorMode]
								}}
							/>
						</AspectRatio>
					</Fade>

					<Fade
						in={inView && canTriggerAnimation}
						unmountOnExit={false}
						transition={{
							enter: { ...config, delay: delay * 1.5 },
							exit: { ...config, delay: delay * 1.5 }
						}}
						style={{ width: '35%', height: 'auto', position: 'absolute', bottom: 0, zIndex: 1 }}
					>
						<AspectRatio width='100%' height='100%' ratio={1 / 1}>
							{portraitSize ? (
								<Image
									alt={`${t('about.cover.banner')}`}
									width='inherit'
									height='inherit'
									fit='contain'
									borderRadius='none'
									src={{
										full: portrait[portraitSize][!isTouchDevice && isHovering ? 'pose' : 'still']
									}}
								/>
							) : (
								<Image
									alt={`${t('about.cover.portrait')}`}
									width='inherit'
									height='inherit'
									fit='contain'
									borderRadius='none'
									src={{
										thumbnail: portrait.thumbnail[!isTouchDevice && isHovering ? 'pose' : 'still']
									}}
								/>
							)}
						</AspectRatio>
					</Fade>
				</Fragment>
			)}
		</HoveringOverlay>
	);
};

export default Cover;
