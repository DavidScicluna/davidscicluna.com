import { FC } from 'react';

import { useTheme, Divider, utils } from '@davidscicluna/component-library';

import { useConst, VStack } from '@chakra-ui/react';

import { useInView } from 'react-cool-inview';

import { useGetProjects, useUserTheme } from '../../../common/hooks';
import Page from '../../../containers/Page';

import Project from './components/Project';

const { getTransitionDuration } = utils;

const Projects: FC = () => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	// const { innerHeight } = useWindowSize();

	const { observe, inView } = useInView<HTMLDivElement>({
		unobserveOnEnter: true
		// rootMargin: `${(innerHeight || 0) / 10}px 0px`
	});

	const projects = useGetProjects();

	const timeout = useConst<number>(getTransitionDuration({ theme, duration: 'slower' }));

	return (
		<Page>
			<VStack
				ref={observe}
				width='100%'
				minHeight='inherit'
				divider={<Divider colorMode={colorMode} />}
				spacing={0}
			>
				{projects.map((project, index) => (
					<Project
						key={project.id}
						{...project}
						direction={index % 2 === 0 ? 'ltr' : 'rtl'}
						inView={inView}
						timeout={timeout * ((index + 1) * 1000)}
					/>
				))}
			</VStack>
		</Page>
	);
};

export default Projects;
