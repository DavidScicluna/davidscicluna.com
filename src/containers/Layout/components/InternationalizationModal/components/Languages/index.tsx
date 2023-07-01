import { FC, useState, useCallback } from 'react';

import { useConst, StateOverlay, SearchBar, ClearIconButton } from '@davidscicluna/component-library';

import { VStack, SimpleGrid } from '@chakra-ui/react';

import { sort } from 'fast-sort';
import { omit, range, sample } from 'lodash';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import allLanguages from '../../../../../../common/content/languages';
import { useSelector } from '../../../../../../common/hooks';
import { Languages as LanguagesType } from '../../../../../../common/types';

import { LanguagesProps } from './common/types';
import { getLanguages } from './common/utils';
import DummyLanguage from './components/DummyLanguage';
import EmptyLanguages from './components/EmptyLanguages';
import Language from './components/Language';

const Languages: FC<LanguagesProps> = ({ control, setValue }) => {
	const { i18n, t } = useTranslation();

	const language = useSelector((state) => state.app.ui.language);

	const placeholderLanguage = useConst<string>(
		sample(allLanguages.map(({ iso_639_1 }) => iso_639_1)) || i18n.language
	);

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
				renderClear={(props) => <ClearIconButton {...omit(props, ['icon', 'category'])} hasTooltip={false} />}
				placeholder={`${t('layout.internationalizationModal.placeholder', {
					language: `${t(`layout.internationalizationModal.languages.${placeholderLanguage}`)}`
				})}`}
				onFilter={handleSubmit}
				onClear={handleClear}
			/>

			<StateOverlay
				width='100%'
				renderEmpty={() => <EmptyLanguages query={query} onClear={handleClear} />}
				// renderSpinner={() => <Spinner color={primaryColor} mode='pulse' size={size} />}
				renderDummy={() => (
					<SimpleGrid width='100%' columns={[1, 2, 3]} spacing={2}>
						{range(12).map((_dummy, index) => (
							<DummyLanguage key={index} />
						))}
					</SimpleGrid>
				)}
				renderContent={() => (
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
				)}
				state={query.length && languages.length === 0 ? 'empty' : languages.length > 0 ? 'default' : 'loading'}
			/>
		</VStack>
	);
};

export default Languages;
