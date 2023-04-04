import { FC } from 'react';

import { DummyCard, DummyCardHeader } from '@davidscicluna/component-library';

import { useUserTheme } from '../../../../../../../../common/hooks';

const DummyLanguage: FC = () => {
	const { colorMode } = useUserTheme();

	return (
		<DummyCard color='gray' colorMode={colorMode} isLight isFullWidth variant='outlined' p={2}>
			<DummyCardHeader hasTitle hasSubtitle />
		</DummyCard>
	);
};

export default DummyLanguage;
