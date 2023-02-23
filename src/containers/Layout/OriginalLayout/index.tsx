import { FC, createContext } from 'react';

import { useTheme, ScrollToTop, utils } from '@davidscicluna/component-library';

import { useConst, Container, Center } from '@chakra-ui/react';

import { useWindowSize } from 'rooks';
import { useElementSize } from 'usehooks-ts';

import { useUserTheme } from '../../../common/hooks';
import { LayoutContext as LayoutContextType, LayoutProps } from '../types';

import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Playground from './components/Playground';

const { convertREMToPixels, convertStringToNumber, getColor } = utils;

export const LayoutContext = createContext<LayoutContextType>({ width: 0, height: 0 });

const Layout: FC<LayoutProps> = ({ children }) => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const { innerWidth: windowWidth, innerHeight: windowHeight } = useWindowSize();

	const [navigationRef, { width: navigationWidth, height: navigationHeight }] = useElementSize();

	const containerMaxWidth = useConst<number>(convertREMToPixels(convertStringToNumber(theme.breakpoints.xl, 'em')));

	return (
		<>
			<Container
				width='100%'
				maxWidth={`${containerMaxWidth}px`}
				minHeight={windowHeight ? `${windowHeight}px` : '100vh'}
				centerContent
				borderLeftWidth={(windowWidth || 0) >= containerMaxWidth ? '2px' : 0}
				borderRightWidth={(windowWidth || 0) >= containerMaxWidth ? '2px' : 0}
				borderStyle='solid'
				borderColor={getColor({ theme, colorMode, type: 'divider' })}
				p={0}
			>
				<Center
					position='fixed'
					bottom={theme.space[2]}
					right={theme.space[2]}
					zIndex={theme.zIndices.overlay}
					background='transparent'
				>
					<ScrollToTop color={color} colorMode={colorMode} />
				</Center>

				<Center
					ref={navigationRef}
					width='100%'
					height='auto'
					borderBottomWidth='2px'
					borderBottomStyle='solid'
					borderBottomColor={getColor({ theme, colorMode, type: 'divider' })}
					background={getColor({ theme, colorMode, type: 'background' })}
				>
					<Navigation />
				</Center>

				<LayoutContext.Provider value={{ width: navigationWidth, height: navigationHeight }}>
					<Center width='100%'>{children}</Center>
				</LayoutContext.Provider>

				<Center
					width='100%'
					height='auto'
					borderTopWidth='2px'
					borderTopStyle='solid'
					borderTopColor={getColor({ theme, colorMode, type: 'divider' })}
					borderBottomWidth='2px'
					borderBottomStyle='solid'
					borderBottomColor={getColor({ theme, colorMode, type: 'divider' })}
				>
					<Contact />
				</Center>

				<Footer />
			</Container>

			<Playground />
		</>
	);
};

export default Layout;
