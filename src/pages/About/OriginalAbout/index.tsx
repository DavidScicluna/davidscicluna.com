import { FC } from 'react';

import { Divider } from '@davidscicluna/component-library';

import { VStack } from '@chakra-ui/react';

import { useUserTheme } from '../../../common/hooks';
import Page from '../../../containers/Page';

import AboutMe from './components/AboutMe';
import Certifications from './components/Certifications';
import Cover from './components/Cover';
import Experience from './components/Experience';
import Skills from './components/Skills';

const About: FC = () => {
	const { colorMode } = useUserTheme();

	return (
		<Page>
			<VStack width='100%' minHeight='inherit' divider={<Divider colorMode={colorMode} />} spacing={0}>
				<Cover />
				<AboutMe />
				<Skills />
				<Experience />
				<Certifications />
			</VStack>
		</Page>
	);
};

export default About;
