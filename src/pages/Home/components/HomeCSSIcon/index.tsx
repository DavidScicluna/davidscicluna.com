import { FC } from 'react';

import { HomeIconCommonProps as HomeCSSIconProps } from '../../common/types';
import HomeIcon from '../HomeIcon';

const HomeCSSIcon: FC<HomeCSSIconProps> = ({ isDummy }) => {
	return <HomeIcon icon='css' isDummy={isDummy} />;
};

export default HomeCSSIcon;
