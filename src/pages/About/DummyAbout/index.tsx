import { FC } from 'react';

import { Divider } from '@davidscicluna/component-library';

import { VStack } from '@chakra-ui/react';

import { useUserTheme } from '../../../common/hooks';
import Page from '../../../containers/Page';

import DummyAboutMe from './components/DummyAboutMe';
import DummyCertifications from './components/DummyCertifications';
import DummyCover from './components/DummyCover';
import DummyExperience from './components/DummyExperience';
import DummySkills from './components/DummySkills';

const DummyAbout: FC = () => {
	const { colorMode } = useUserTheme();

	return (
		<Page>
			<VStack width='100%' minHeight='inherit' divider={<Divider colorMode={colorMode} />} spacing={0}>
				<DummyCover />
				<DummyAboutMe />
				<DummySkills />
				<DummyExperience />
				<DummyCertifications />
			</VStack>
		</Page>
	);
};

export default DummyAbout;
