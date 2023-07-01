import { FC } from 'react';

import { DummyCard, DummyCardHeader, CardTitle, CardSubtitle } from '@davidscicluna/component-library';

const DummyLanguage: FC = () => {
	return (
		<DummyCard width='100%' color='gray' variant='monochrome' p={2}>
			<DummyCardHeader
				renderTitle={(props) => <CardTitle {...props}>Native</CardTitle>}
				renderSubtitle={(props) => <CardSubtitle {...props}>Name</CardSubtitle>}
			/>
		</DummyCard>
	);
};

export default DummyLanguage;
