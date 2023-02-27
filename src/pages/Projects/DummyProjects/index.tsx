import { FC } from 'react';

import { Divider } from '@davidscicluna/component-library';

import { VStack } from '@chakra-ui/react';

import { range } from 'lodash';

import { useGetProjects, useUserTheme } from '../../../common/hooks';
import Page from '../../../containers/Page';

import DummyProject from './components/DummyProject';

const DummyProjects: FC = () => {
	const { colorMode } = useUserTheme();

	const projects = useGetProjects();

	return (
		<Page>
			<VStack width='100%' minHeight='inherit' divider={<Divider colorMode={colorMode} />} spacing={0}>
				{range(projects.length).map((_dummy, index) => (
					<DummyProject key={index} direction={index % 2 === 0 ? 'ltr' : 'rtl'} />
				))}
			</VStack>
		</Page>
	);
};

export default DummyProjects;
