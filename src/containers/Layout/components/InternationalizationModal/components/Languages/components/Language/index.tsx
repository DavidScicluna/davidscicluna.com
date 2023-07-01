import { FC } from 'react';

import {
	useTheme,
	Card,
	CardTitle,
	CardSubtitle,
	CardHeader,
	Icon,
	ScaleFade,
	useGetThemeAppearance
} from '@davidscicluna/component-library';

import { useTranslation } from 'react-i18next';

import { LanguageProps } from './common/types';

const Language: FC<LanguageProps> = (props) => {
	const theme = useTheme();

	const { color } = useGetThemeAppearance();

	const { t } = useTranslation();

	const { language, isActive, isSelected, ...rest } = props;
	const { name, iso_639_1 } = language;

	return (
		<Card
			{...rest}
			width='100%'
			color={isActive || isSelected ? color : 'gray'}
			isActive={isActive}
			isFixed={isActive}
			isClickable
			variant={isActive || isSelected ? 'contained' : 'monochrome'}
			p={2}
		>
			<CardHeader
				renderTitle={(props) => <CardTitle {...props}>{name}</CardTitle>}
				renderSubtitle={(props) => (
					<CardSubtitle {...props}>
						{`${t(`layout.internationalizationModal.languages.${iso_639_1}`)}`}
					</CardSubtitle>
				)}
				actions={
					<ScaleFade in={isActive || isSelected} unmountOnExit={false}>
						<Icon
							width='auto'
							height='auto'
							fontSize={theme.fontSizes['2xl']}
							icon={isActive ? 'check' : isSelected ? 'done_all' : 'crop_square'}
							variant='transparent'
						/>
					</ScaleFade>
				}
			/>
		</Card>
	);
};

export default Language;
