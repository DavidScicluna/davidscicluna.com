import { FC, useState, useCallback } from 'react';

import { IconButton, IconButtonIcon } from '@davidscicluna/component-library';

import { useConst, VStack, SimpleGrid } from '@chakra-ui/react';

import { sort } from 'fast-sort';
import { sample } from 'lodash';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import allLanguages from '../../../../../../common/content/languages';
import { useUserTheme } from '../../../../../../common/hooks';
import { Languages as LanguagesType } from '../../../../../../common/types';
import SearchBar from '../../../../../../components/SearchBar';

import Language from './components/Language';
import { LanguagesProps } from './types';
import { getLanguages } from './utils';

const Languages: FC<LanguagesProps> = ({ form }) => {
	const { color, colorMode } = useUserTheme();

	const { i18n, t } = useTranslation();

	const { control, setValue } = form;

	const placeholderLanguage = useConst(sample(allLanguages.map(({ iso_639_1 }) => iso_639_1)) || i18n.language);

	const [languages, setLanguages] = useState<LanguagesType>([...allLanguages]);

	const handleSubmit = useCallback((query: string) => {
		setLanguages(getLanguages(query));
	}, []);

	const handleClear = useCallback(() => {
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

			{/* // TODO: Show Empty if found nothing from search */}
			<Controller
				control={control}
				name='language'
				render={({ field: { value, name } }) => (
					<SimpleGrid width='100%' columns={[1, 2, 3]} spacing={2}>
						{sort(languages)
							.asc(({ name }) => name)
							.map((language) => (
								<Language
									key={language.iso_639_1}
									language={language}
									isActive={language.iso_639_1 === value.iso_639_1 || false}
									onClick={() => setValue(name, language, { shouldDirty: true })}
								/>
							))}
					</SimpleGrid>
				)}
			/>
		</VStack>
	);
};

export default Languages;
