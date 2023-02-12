import { FC } from 'react';

import { Divider } from '@davidscicluna/component-library';

import { VStack } from '@chakra-ui/react';

import { range } from 'lodash';

import projects from '../../../common/content/projects';
import { useUserTheme } from '../../../common/hooks';

import DummyProject from './components/DummyProject';

const DummyProjects: FC = () => {
	const { colorMode } = useUserTheme();

	return (
		<VStack width='100%' divider={<Divider colorMode={colorMode} />} spacing={0}>
			{range(projects.length).map((_dummy, index) => (
				<DummyProject key={index} direction={index % 2 === 0 ? 'ltr' : 'rtl'} />
			))}
		</VStack>
	);
};

export default DummyProjects;
