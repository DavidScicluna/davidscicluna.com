import { FC } from 'react';

import { useTheme, Divider, utils } from '@davidscicluna/component-library';

import { useConst, VStack } from '@chakra-ui/react';

import { useInView } from 'react-cool-inview';

import { useUserTheme } from '../../../common/hooks';
import Page from '../../../containers/Page';

import AboutMe from './components/AboutMe';
import Certifications from './components/Certifications';
import Cover from './components/Cover';
import Experience from './components/Experience';
import Skills from './components/Skills';

const { getTransitionDuration } = utils;

const About: FC = () => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	// const { innerHeight } = useWindowSize();

	const { observe, inView } = useInView<HTMLDivElement>({
		unobserveOnEnter: true
		// rootMargin: `${(innerHeight || 0) / 10}px 0px`
	});

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
				<Cover inView={inView} timeout={timeout * 1000} />
				<AboutMe inView={inView} timeout={timeout * 2000} />
				<Skills inView={inView} timeout={timeout * 3000} />
				<Experience inView={inView} timeout={timeout * 4000} />
				<Certifications inView={inView} timeout={timeout * 5000} />
			</VStack>
		</Page>
	);
};

export default About;
