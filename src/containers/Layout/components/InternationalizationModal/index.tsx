import { FC, useEffect } from 'react';

import {
	Modal,
	ModalStack,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	Button,
	CloseIconButton
} from '@davidscicluna/component-library';

import { Text } from '@chakra-ui/react';

import { useSelector } from '@/common/hooks';
import { setLanguage } from '@/store/slices/app';
import { toggleInternationalizationModal } from '@/store/slices/modals';
import { omit } from 'lodash';
import { useForm, useFormState } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { InternationalizationModalForm } from './common/types';
import Languages from './components/Languages';

const InternationalizationModal: FC = () => {
	const { i18n, t } = useTranslation();

	const dispatch = useDispatch();
	const language = useSelector((state) => state.app.ui.language);
	const isInternationalizationModalOpen = useSelector((state) => state.modals.ui.isInternationalizationModalOpen);

	const form = useForm<InternationalizationModalForm>({ defaultValues: { language: { ...language } } });
	const { control, reset, handleSubmit } = form;

	const { isDirty } = useFormState({ control });

	const handleClose = (): void => {
		dispatch(toggleInternationalizationModal(false));
	};

	const handleSubmitForm = ({ language }: InternationalizationModalForm): void => {
		dispatch(setLanguage({ ...language }));

		reset({ language });

		i18n.changeLanguage(language.iso_639_1);

		handleClose();
	};

	useEffect(() => reset({ language: { ...language } }), [isInternationalizationModalOpen]);

	return (
		<Modal isOpen={isInternationalizationModalOpen} onClose={handleClose} size='3xl'>
			<ModalStack as={Form} onSubmit={handleSubmit(handleSubmitForm)}>
				<ModalHeader
					renderTitle={(props) => <Text {...props}>{`${t('layout.internationalizationModal.title')}`}</Text>}
					renderSubtitle={(props) => (
						<Text {...props}>{`${t('layout.internationalizationModal.subtitle')}`}</Text>
					)}
					renderCancel={(props) => (
						<CloseIconButton {...omit(props, ['icon', 'category'])} hasTooltip={false} />
					)}
				/>
				<ModalBody>
					<Languages {...form} />
				</ModalBody>
				<ModalFooter
					renderCancel={(props) => (
						<Button {...props}>{`${t('layout.internationalizationModal.cancel')}`}</Button>
					)}
					renderAction={(props) => (
						<Button {...props} isDisabled={!isDirty} type='submit'>
							{`${t('layout.internationalizationModal.action')}`}
						</Button>
					)}
				/>
			</ModalStack>
		</Modal>
	);
};

export default InternationalizationModal;
