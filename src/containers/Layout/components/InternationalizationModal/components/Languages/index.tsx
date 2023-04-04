import { FC, useState, useCallback } from 'react';

import {
	useTheme,
	StateOverlay,
	StateLabel,
	StateLabelStack,
	StateLabelIcon,
	StateLabelBody,
	StateLabelTitle,
	StateLabelSubtitle,
	StateLabelActions,
	Spinner,
	SearchBar,
	Button,
	IconButton,
	IconButtonIcon,
	utils
} from '@davidscicluna/component-library';

import { useMediaQuery, useConst, VStack, SimpleGrid } from '@chakra-ui/react';

import { sort } from 'fast-sort';
import { range, sample } from 'lodash';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import allLanguages from '../../../../../../common/content/languages';
import { useSelector, useUserTheme } from '../../../../../../common/hooks';
import { Languages as LanguagesType } from '../../../../../../common/types';

import DummyLanguage from './components/DummyLanguage';
import Language from './components/Language';
import { LanguagesProps } from './types';
import { getLanguages } from './utils';

const { getColor } = utils;

const Languages: FC<LanguagesProps> = ({ form }) => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { i18n, t } = useTranslation();

	const language = useSelector((state) => state.app.ui.language);

	const { control, setValue } = form;

	const placeholderLanguage = useConst(sample(allLanguages.map(({ iso_639_1 }) => iso_639_1)) || i18n.language);

	const [query, setQuery] = useState<string>('');
	const [languages, setLanguages] = useState<LanguagesType>([...allLanguages]);

	const handleSubmit = useCallback((query: string) => {
		setQuery(query);
		setLanguages(getLanguages(query));
	}, []);

	const handleClear = useCallback(() => {
		setQuery('');
		setLanguages([...allLanguages]);
	}, [allLanguages]);

	return (
		<VStack width='100%' spacing={2}>
			<SearchBar
				color={color}
				colorMode={colorMode}
				renderClear={({ icon, category, ...rest }) => (
					// TODO: Replace with ClearIconButton from component-lib
					<IconButton {...rest} size='xs'>
						<IconButtonIcon icon={icon} category={category} />
					</IconButton>
				)}
				placeholder={`${t('layout.internationalizationModal.placeholder', {
					language: `${t(`layout.internationalizationModal.languages.${placeholderLanguage}`)}`
				})}`}
				isFullWidth
				onFilter={handleSubmit}
				onClear={handleClear}
			/>

			<StateOverlay
				width='100%'
				renderEmpty={() => (
					<StateLabel
						color={color}
						colorMode={colorMode}
						borderRadius='base'
						borderWidth='2px'
						borderStyle='dashed'
						borderColor={getColor({ theme, colorMode, type: 'divider' })}
					>
						<StateLabelStack>
							<StateLabelIcon
								width={theme.fontSizes['8xl']}
								height={theme.fontSizes['8xl']}
								fontSize={theme.fontSizes['6xl']}
								icon='search'
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
									<Button {...props} isFullWidth={isSm} onClick={handleClear}>
										{`${t('layout.internationalizationModal.empty.action')}`}
									</Button>
								)}
							/>
						</StateLabelStack>
					</StateLabel>
				)}
				renderSpinner={() => <Spinner size='6xl' thickness={160} speed={140} />}
				renderContent={({ state }) =>
					state === 'default' ? (
						<Controller
							control={control}
							name='language'
							render={({ field: { value, name } }) => (
								<SimpleGrid width='100%' columns={[1, 2, 3]} spacing={2}>
									{sort(languages)
										.asc(({ name }) => name)
										.map((l) => (
											<Language
												key={l.iso_639_1}
												language={l}
												isActive={l.iso_639_1 === value.iso_639_1 || false}
												isSelected={l.iso_639_1 === language.iso_639_1 || false}
												onClick={() => setValue(name, l, { shouldDirty: true })}
											/>
										))}
								</SimpleGrid>
							)}
						/>
					) : (
						<SimpleGrid width='100%' columns={[1, 2, 3]} spacing={2}>
							{range(12).map((_dummy, index) => (
								<DummyLanguage key={index} />
							))}
						</SimpleGrid>
					)
				}
				state={query.length && languages.length === 0 ? 'empty' : languages.length > 0 ? 'default' : 'loading'}
			/>
		</VStack>
	);
};

export default Languages;
