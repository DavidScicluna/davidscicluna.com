import { FC, lazy } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { useIsFirstRender, useTimeout } from 'usehooks-ts';

import { useCheckColorMode } from '../../common/hooks';
import { Suspense } from '../../components';
import DummyLayout from '../Layout/DummyLayout';
import Router from '../Router';
import Routes from '../Routes';
import Splashscreen from '../Splashscreen';

const Layout = lazy(() => import('../Layout/OriginalLayout'));

const Container: FC = () => {
	const isFirstRender = useIsFirstRender();

	const [isSplashscreenOpen, setSetIsSplashscreenOpen] = useBoolean(isFirstRender);
	const [isRoutesVisible, setSetIsRoutesVisible] = useBoolean();

	useCheckColorMode();

	useTimeout(() => setSetIsSplashscreenOpen.off(), isSplashscreenOpen ? 5000 : null);
	useTimeout(() => setSetIsRoutesVisible.on(), isSplashscreenOpen ? 4000 : null);

	return (
		<Router>
			<Splashscreen isOpen={isSplashscreenOpen} onClose={() => setSetIsSplashscreenOpen.off()} />

			{isRoutesVisible && (
				<Suspense
					fallback={
						<DummyLayout>
							<Routes />
						</DummyLayout>
					}
				>
					<Layout>
						<Routes />
					</Layout>
				</Suspense>
			)}
		</Router>
	);
};

export default Container;
