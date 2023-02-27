import { FC } from 'react';

import { HomeIconCommonProps as HomeReactIconProps } from '../../common/types';
import HomeIcon from '../HomeIcon';

const HomeReactIcon: FC<HomeReactIconProps> = ({ isDummy }) => {
	return <HomeIcon icon='react' isDummy={isDummy} />;
};

export default HomeReactIcon;
