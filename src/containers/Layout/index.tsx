import { FC, createContext } from 'react';

import {
	useConst,
	useTheme,
	ScrollToTop,
	utils,
	useGetColor,
	useBoolean,
	Collapse
} from '@davidscicluna/component-library';

import { Container, Center } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import { useWindowSize } from 'rooks';
import { useElementSize, useIsFirstRender, useTimeout } from 'usehooks-ts';

import Providers from '../Providers';
import Splashscreen from '../Splashscreen';

import { LayoutContext as LayoutContextType, LayoutProps } from './common/types';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InternationalizationModal from './components/InternationalizationModal';
import Navigation from './components/Navigation';
import PlaygroundModal from './components/PlaygroundModal';

const { convertREMToPixels, convertStringToNumber } = utils;

export const LayoutContext = createContext<LayoutContextType>({ navigationWidth: 0, navigationHeight: 0 });

const Layout: FC<LayoutProps> = ({ children }) => {
	const theme = useTheme();

	const isFirstRender = useIsFirstRender();

	const { innerWidth: windowWidth = 0, innerHeight: windowHeight = 0 } = useWindowSize();

	const [navigationRef, { width: navigationWidth = 0, height: navigationHeight = 0 }] = useElementSize();

	const { t } = useTranslation();

	const [isSplashscreenOpen, setSetIsSplashscreenOpen] = useBoolean(isFirstRender);
	const [isRoutesVisible, setSetIsRoutesVisible] = useBoolean();

	const containerMaxWidth = useConst<number>(convertREMToPixels(convertStringToNumber(theme.breakpoints.xl, 'em')));

	const backgroundColor = useGetColor({ color: 'gray', type: 'background' });
	const borderColor = useGetColor({ color: 'gray', type: 'divider' });

	useTimeout(() => setSetIsSplashscreenOpen.off(), isSplashscreenOpen ? 5000 : null);
	useTimeout(() => setSetIsRoutesVisible.on(), isSplashscreenOpen ? 4000 : null);

	return (
		<Providers>
			<Splashscreen isOpen={isSplashscreenOpen} onClose={() => setSetIsSplashscreenOpen.off()} />

			<Container
				as={Collapse}
				width='100%'
				maxWidth={`${containerMaxWidth}px`}
				minHeight={windowHeight ? `${windowHeight}px` : '100vh'}
				centerContent
				borderLeftWidth={(windowWidth || 0) >= containerMaxWidth ? '2px' : 0}
				borderRightWidth={(windowWidth || 0) >= containerMaxWidth ? '2px' : 0}
				borderStyle='solid'
				borderColor={borderColor}
				background={backgroundColor}
				in={isRoutesVisible}
				p={0}
			>
				<Center
					ref={navigationRef}
					width='100%'
					height='auto'
					borderBottomWidth='2px'
					borderBottomStyle='solid'
					borderBottomColor={borderColor}
					background={backgroundColor}
				>
					<Navigation />
				</Center>

				<LayoutContext.Provider value={{ navigationWidth, navigationHeight }}>
					<Center width='100%'>{children}</Center>
				</LayoutContext.Provider>

				<Center
					width='100%'
					height='auto'
					borderTopWidth='2px'
					borderTopStyle='solid'
					borderTopColor={borderColor}
					borderBottomWidth='2px'
					borderBottomStyle='solid'
					borderBottomColor={borderColor}
				>
					<Contact />
				</Center>

				<Footer />

				<Center
					position='fixed'
					bottom={theme.space[2]}
					right={theme.space[2]}
					zIndex={theme.zIndices.overlay}
					background='transparent'
				>
					<ScrollToTop aria-label={t('layout.scrollToTop')} label={t('layout.scrollToTop')} />
				</Center>
			</Container>

			<InternationalizationModal />

			<PlaygroundModal />
		</Providers>
	);
};

export default Layout;
