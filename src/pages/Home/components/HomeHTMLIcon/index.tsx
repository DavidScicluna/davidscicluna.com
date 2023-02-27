import { FC } from 'react';

import { HomeIconCommonProps as HomeHTMLIconProps } from '../../common/types';
import HomeIcon from '../HomeIcon';

const HomeHTMLIcon: FC<HomeHTMLIconProps> = ({ isDummy }) => {
	return <HomeIcon icon='html' isDummy={isDummy} />;
};

export default HomeHTMLIcon;
