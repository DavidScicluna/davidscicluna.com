import { useContext } from 'react';

import { NoUndefinedField } from '@davidscicluna/component-library';

import { LayoutContext } from '../..';
import { LayoutContext as LayoutContextType } from '../../types';

const useLayoutContext = (): NoUndefinedField<LayoutContextType> => {
	const { width, height } = useContext<LayoutContextType>(LayoutContext);

	return { width, height };
};

export default useLayoutContext;
