import { FC } from 'react';

import { useTheme, utils } from '@davidscicluna/component-library';

import { useMediaQuery, useBoolean } from '@chakra-ui/react';

import { useIsFirstRender, useTimeout } from 'usehooks-ts';

import Router from '../Router';
import Routes from '../Routes';
import Splashscreen from '../Splashscreen';

const { checkIsTouchDevice } = utils;

const isTouchDevice = checkIsTouchDevice();

const Container: FC = () => {
	const theme = useTheme();

	const [isLg] = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);

	const isFirstRender = useIsFirstRender();

	const [isSplashscreenOpen, setSetIsSplashscreenOpen] = useBoolean(isFirstRender);
	const [isRoutesVisible, setSetIsRoutesVisible] = useBoolean();

	useTimeout(() => setSetIsSplashscreenOpen.off(), isSplashscreenOpen ? 10000 : null);
	useTimeout(() => setSetIsRoutesVisible.on(), isLg && isTouchDevice ? (isSplashscreenOpen ? 5000 : null) : 0);

	return (
		<Router>
			{isLg && isTouchDevice && (
				<Splashscreen isOpen={isSplashscreenOpen} onClose={() => setSetIsSplashscreenOpen.off()} />
			)}

			{isRoutesVisible && <Routes />}
		</Router>
	);
};

export default Container;
