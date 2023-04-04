import { FC, Fragment } from 'react';

import { useTheme, Image, utils } from '@davidscicluna/component-library';

import { useBreakpointValue, Center, AspectRatio } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import banner from '../../../../../common/assets/banner';
import portrait from '../../../../../common/assets/portrait';
import { useUserTheme } from '../../../../../common/hooks';
import { HoveringOverlay } from '../../../../../components';

const { checkIsTouchDevice, getColor } = utils;

const isTouchDevice = checkIsTouchDevice();

const Cover: FC = () => {
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
					<AspectRatio width='100%' height='auto' ratio={21 / 9}>
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

					<AspectRatio width='35%' height='auto' position='absolute' bottom={0} zIndex={1} ratio={1 / 1}>
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
				</Fragment>
			)}
		</HoveringOverlay>
	);
};

export default Cover;
