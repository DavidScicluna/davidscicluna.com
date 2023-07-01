import { useContext } from 'react';

import { NoUndefinedField } from '@davidscicluna/component-library';

import { LayoutContext } from '../..';
import { LayoutContext as LayoutContextType } from '../types';

const useLayoutContext = (): NoUndefinedField<LayoutContextType> => {
	const { navigationWidth = 0, navigationHeight = 0 } = useContext<LayoutContextType>(LayoutContext);

	return { navigationWidth, navigationHeight };
};

export default useLayoutContext;
