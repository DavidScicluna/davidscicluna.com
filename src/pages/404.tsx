import { Button, useTheme } from '@davidscicluna/component-library';

import { Center, useMediaQuery } from '@chakra-ui/react';

import { Meta } from '@/components';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from 'rooks';

import Error from '../containers/Error';
import { useLayoutContext } from '../containers/Layout/common/hooks';

const Error404Page = () => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { t } = useTranslation();

	const { navigationHeight } = useLayoutContext();

	const { innerHeight: windowHeight = 0 } = useWindowSize();

	return (
		<>
			<Meta title={`${t('error404.pageTitle')}`} />
			<Center
				width='100%'
				minHeight={`calc(${windowHeight ? `${windowHeight}px` : '100vh'} - ${navigationHeight}px)`}
			>
				<Error
					code={404}
					title={`${t('error404.title')}`}
					subtitle={`${t('error404.subtitle')}`}
					renderActions={(props) => (
						<>
							<Link href='/'>
								<Button {...props} isFullWidth={isSm}>
									{`${t('error404.action1')}`}
								</Button>
							</Link>

							<Button
								{...props}
								isFullWidth={isSm}
								onClick={() => window.location.reload()}
								variant='outlined'
							>
								{`${t('error404.action2')}`}
							</Button>
						</>
					)}
				/>
			</Center>
		</>
	);
};

export default Error404Page;
