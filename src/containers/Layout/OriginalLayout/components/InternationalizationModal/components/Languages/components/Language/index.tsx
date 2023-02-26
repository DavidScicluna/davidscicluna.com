import { FC } from 'react';

import { useTheme, Card, CardHeader, Icon, ScaleFade, utils } from '@davidscicluna/component-library';

import { Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { useUserTheme } from '../../../../../../../../../common/hooks';

import { LanguageProps } from './types';

const { getColor } = utils;

const Language: FC<LanguageProps> = (props) => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const { t } = useTranslation();

	const { language, isActive, ...rest } = props;
	const { name, iso_639_1 } = language;

	return (
		<Card
			{...rest}
			color={isActive ? color : 'gray'}
			colorMode={colorMode}
			isLight={!isActive}
			isClickable
			isFullWidth
			variant={isActive ? 'contained' : 'outlined'}
			p={2}
		>
			<CardHeader
				renderTitle={(props) => (
					<Text
						{...props}
						color={getColor({ theme, colorMode, type: isActive ? 'background' : 'text.primary' })}
						fontSize='md'
						fontWeight='semibold'
					>
						{name}
					</Text>
				)}
				renderSubtitle={(props) => (
					<Text
						{...props}
						color={getColor({ theme, colorMode, type: isActive ? 'background' : 'text.secondary' })}
						fontSize='sm'
						fontWeight='medium'
					>
						{`${t(`layout.internationalizationModal.languages.${iso_639_1}`)}`}
					</Text>
				)}
				actions={
					<ScaleFade in={isActive} unmountOnExit={false}>
						<Icon
							width={theme.fontSizes['2xl']}
							height={theme.fontSizes['2xl']}
							fontSize={theme.fontSizes['2xl']}
							icon='check'
							color={getColor({ theme, colorMode, type: 'background' })}
						/>
					</ScaleFade>
				}
			/>
		</Card>
	);
};

export default Language;
