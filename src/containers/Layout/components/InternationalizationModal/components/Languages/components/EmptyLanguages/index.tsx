import { FC } from 'react';

import {
	Button,
	StateLabel,
	StateLabelActions,
	StateLabelBody,
	StateLabelIcon,
	StateLabelStack,
	StateLabelSubtitle,
	StateLabelTitle,
	useGetColor,
	useTheme
} from '@davidscicluna/component-library';

import { useMediaQuery } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { EmptyLanguagesProps } from './common/types';

const EmptyLanguages: FC<EmptyLanguagesProps> = ({ query, onClear }) => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { t } = useTranslation();

	const borderColor = useGetColor({ color: 'gray', type: 'divider' });

	return (
		<StateLabel borderRadius='base' borderWidth='2px' borderStyle='dashed' borderColor={borderColor}>
			<StateLabelStack>
				<StateLabelIcon
					width='auto'
					height='auto'
					fontSize={theme.fontSizes['6xl']}
					borderRadius='full'
					icon='search'
					category='outlined'
					variant='contained'
					p={2}
				/>

				<StateLabelBody>
					<StateLabelTitle>{t('layout.internationalizationModal.empty.title')}</StateLabelTitle>
					<StateLabelSubtitle>
						{t('layout.internationalizationModal.empty.subtitle', { query })}
					</StateLabelSubtitle>
				</StateLabelBody>

				<StateLabelActions
					renderActions={(props) => (
						<Button {...props} isFullWidth={isSm} onClick={onClear}>
							{`${t('layout.internationalizationModal.empty.action')}`}
						</Button>
					)}
				/>
			</StateLabelStack>
		</StateLabel>
	);
};

export default EmptyLanguages;
