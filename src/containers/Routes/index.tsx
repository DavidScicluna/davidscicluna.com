import { FC, useEffect, lazy } from 'react';

import { useLocation, Routes as RRRoutes, Route } from 'react-router';

import { AnimatePresence } from '@davidscicluna/component-library';

import { Suspense } from '../../components';
import DummyAbout from '../../pages/About/DummyAbout';
import DummyHome from '../../pages/Home/DummyHome';
import DummyProjects from '../../pages/Projects/DummyProjects';

import NoMatch from './components/NoMatch';
import PageTransition from './components/PageTransition';

const Home = lazy(() => import('../../pages/Home/OriginalHome'));
const About = lazy(() => import('../../pages/About/OriginalAbout'));
const Projects = lazy(() => import('../../pages/Projects/OriginalProjects'));

const Routes: FC = () => {
	const location = useLocation();

	useEffect(() => window.scrollTo(0, 0), [location.pathname]);

	return (
		<AnimatePresence>
			<RRRoutes key={location.pathname} location={location}>
				<Route
					path='/'
					element={
						<PageTransition>
							<Suspense fallback={<DummyHome />}>
								<Home />
							</Suspense>
						</PageTransition>
					}
				/>

				<Route
					path='/about'
					element={
						<PageTransition>
							<Suspense fallback={<DummyAbout />}>
								<About />
							</Suspense>
						</PageTransition>
					}
				/>

				<Route
					path='/projects'
					element={
						<PageTransition>
							<Suspense fallback={<DummyProjects />}>
								<Projects />
							</Suspense>
						</PageTransition>
					}
				/>

				<Route
					path='*'
					element={
						<PageTransition>
							<NoMatch />
						</PageTransition>
					}
				/>
			</RRRoutes>
		</AnimatePresence>
	);
};

export default Routes;
