import { FC, useEffect, lazy } from 'react';

import { useLocation, Routes as RRRoutes, Route } from 'react-router';

import { AnimatePresence, PageTransition } from '@davidscicluna/component-library';

import { Suspense } from '../../components';
import DummyAbout from '../../pages/About/DummyAbout';
import DummyHome from '../../pages/Home/DummyHome';
// import DummyProject from '../../pages/Project/DummyProject';
import DummyProjects from '../../pages/Projects/DummyProjects';

import NoMatch from './components/NoMatch';

const Home = lazy(() => import('../../pages/Home/OriginalHome'));
const About = lazy(() => import('../../pages/About/OriginalAbout'));
// const Project = lazy(() => import('../../pages/Project/OriginalProject'));
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

				{/* <Route
					path='/projects/:id'
					element={
						<PageTransition>
							<Suspense fallback={<DummyProject />}>
								<Project />
							</Suspense>
						</PageTransition>
					}
				/> */}

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
