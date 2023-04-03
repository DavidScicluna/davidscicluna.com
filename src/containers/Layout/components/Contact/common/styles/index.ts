import { memoize } from 'lodash';

import active from './active';
import contact from './contact';
import hover from './hover';
import { ContactStyleProps, ContactStyleReturn } from './types';

export default memoize((props: ContactStyleProps): ContactStyleReturn => {
	const { theme, color, colorMode } = props;

	return {
		contact: contact({ theme, color, colorMode }),
		hover: hover({ theme, color, colorMode }),
		active: active({ theme, color, colorMode })
	};
});
