import { useTheme, utils } from '@davidscicluna/component-library';

import { useBoolean, useConst } from '@chakra-ui/react';

import { Transition } from 'framer-motion';
import { useTimeout } from 'usehooks-ts';

import { CommonAboutProps } from '../../pages/About/OriginalAbout/common/types';

type UseGetTransitionMetaProps = Pick<CommonAboutProps, 'timeout'>;
type UseGetTransitionMetaReturn = [boolean, Transition];

const { getTransitionConfig, getTransitionDuration, getTransitionDelay } = utils;

const useGetTransitionMeta = ({ timeout }: UseGetTransitionMetaProps): UseGetTransitionMetaReturn => {
	const theme = useTheme();

	const [canTriggerAnimation, setCanTriggerAnimation] = useBoolean();

	const duration = useConst<number>(getTransitionDuration({ theme, duration: 'slow' }));
	const delay = useConst<number>(getTransitionDelay({ theme, duration: 'slow' }));
	const config = useConst<Transition>({ ...getTransitionConfig({ theme }), duration });

	useTimeout(() => setCanTriggerAnimation.on(), timeout);

	return [canTriggerAnimation, { ...config, delay }];
};

export default useGetTransitionMeta;
