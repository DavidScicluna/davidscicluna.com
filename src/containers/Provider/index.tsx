import { FC } from 'react';

import { DSCLProvider, DSCLProviderProps as ProviderProps } from '@davidscicluna/component-library';

import { useSelector } from '../../common/hooks';

const Provider: FC<ProviderProps> = ({ children }) => {
	const { color, colorMode } = useSelector((state) => state.app.ui.theme);

	return (
		<DSCLProvider color={color} colorMode={colorMode}>
			{children}
		</DSCLProvider>
	);
};

export default Provider;
