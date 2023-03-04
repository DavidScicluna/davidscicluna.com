import { FC } from 'react';

import { useTheme, Modal, ModalStack, ModalBody, ScaleFade, utils } from '@davidscicluna/component-library';

import { useConst, Center, Show } from '@chakra-ui/react';

import { Transition } from 'framer-motion';
import { useWindowSize } from 'rooks';
import { useElementSize } from 'usehooks-ts';

import { useUserTheme } from '../../common/hooks';

import SplashscreenLabel from './components/SplashscreenLabel';
import SplashscreenLogo from './components/SplashscreenLogo';
import { SplashscreenProps } from './types';

const { getTransitionConfig, getTransitionDelay, getTransitionDuration, getColor } = utils;

const Splashscreen: FC<SplashscreenProps> = ({ isOpen = false, onClose }) => {
	const theme = useTheme();
	const { colorMode } = useUserTheme();

	const { innerHeight: windowHeight } = useWindowSize();

	const [leftLabelRef, { width: leftLabelWidth, height: leftLabelHeight }] = useElementSize();
	const [rightLabelRef, { width: rightLabelWidth, height: rightLabelHeight }] = useElementSize();

	const delay = useConst<number>(getTransitionDelay({ theme, duration: 'slow' }) * 6);
	const duration = useConst<number>(getTransitionDuration({ theme, duration: 'slow' }));
	const config = useConst<Transition>({ ...getTransitionConfig({ theme }), duration, delay });

	return (
		<Modal isOpen={isOpen} closeOnEsc={false} closeOnOverlayClick={false} onClose={onClose} size='full' spacing={0}>
			<ModalStack>
				<ModalBody background={getColor({ theme, colorMode, type: 'background' })} sx={{ transition: 'none' }}>
					<Center width='100%' height={windowHeight ? `${windowHeight}px` : '100vh'}>
						{/* Top Label */}
						<Center position='absolute' top={0} left='50%' transform='translateX(-50%)' p={2}>
							<ScaleFade in transition={{ enter: { ...config }, exit: { ...config } }}>
								<SplashscreenLabel />
							</ScaleFade>
						</Center>

						{/* Bottom Label */}
						<Center
							position='absolute'
							bottom={0}
							left='50%'
							transform='translateX(-50%) rotate(-180deg)'
							p={2}
						>
							<ScaleFade in transition={{ enter: { ...config }, exit: { ...config } }}>
								<SplashscreenLabel />
							</ScaleFade>
						</Center>

						{/* Left Label */}
						<Show breakpoint='(min-width: 600px)'>
							<Center
								position='absolute'
								top='50%'
								left={-(leftLabelWidth / 2 - leftLabelHeight / 2)}
								transform='translateY(-50%) rotate(-90deg)'
								p={2}
							>
								<ScaleFade in transition={{ enter: { ...config }, exit: { ...config } }}>
									<SplashscreenLabel ref={leftLabelRef} />
								</ScaleFade>
							</Center>

							{/* Right Label */}
							<Center
								position='absolute'
								top='50%'
								right={-(rightLabelWidth / 2 - rightLabelHeight / 2)}
								transform='translateY(-50%) rotate(-270deg)'
								p={2}
							>
								<ScaleFade in transition={{ enter: { ...config }, exit: { ...config } }}>
									<SplashscreenLabel ref={rightLabelRef} />
								</ScaleFade>
							</Center>
						</Show>

						<SplashscreenLogo />
					</Center>
				</ModalBody>
			</ModalStack>
		</Modal>
	);
};

export default Splashscreen;
