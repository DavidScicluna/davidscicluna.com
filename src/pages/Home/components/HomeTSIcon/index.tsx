import { FC } from 'react';

import { HomeIconCommonProps as HomeTSIconProps } from '../../common/types';
import HomeIcon from '../HomeIcon';

const HomeTSIcon: FC<HomeTSIconProps> = ({ isDummy }) => {
	return <HomeIcon icon='ts' isDummy={isDummy} />;
};

export default HomeTSIcon;
