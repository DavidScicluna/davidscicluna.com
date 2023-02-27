import { FC } from 'react';

import { HomeIconCommonProps as HomeJSIconProps } from '../../common/types';
import HomeIcon from '../HomeIcon';

const HomeJSIcon: FC<HomeJSIconProps> = ({ isDummy }) => {
	return <HomeIcon icon='js' isDummy={isDummy} />;
};

export default HomeJSIcon;
