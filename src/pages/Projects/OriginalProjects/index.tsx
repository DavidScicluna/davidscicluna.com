import { FC } from 'react';

import { useTheme, Divider, utils } from '@davidscicluna/component-library';

import { VStack } from '@chakra-ui/react';

import { useInView } from 'react-cool-inview';

import projects from '../../../common/content/projects';
import { useUserTheme } from '../../../common/hooks';

import Project from './components/Project';

const { getTransitionDuration } = utils;

const Projects: FC = () => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const { observe, inView } = useInView({ unobserveOnEnter: true });

	return (
		<VStack ref={observe} width='100%' divider={<Divider colorMode={colorMode} />} spacing={0}>
			{projects.map((project, index) => (
				<Project
					key={project.id}
					{...project}
					direction={index % 2 === 0 ? 'ltr' : 'rtl'}
					inView={inView}
					timeout={getTransitionDuration({ theme, duration: 'slower' }) * 1000 * (index + 1)}
				/>
			))}
		</VStack>
	);
};

export default Projects;
