import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ModalsStateProps, PlaygroundModal } from './types';

export const defaultPlaygroundModal: PlaygroundModal = {
	isOpen: false
};

const initialState: ModalsStateProps = {
	ui: {
		playgroundModal: { ...defaultPlaygroundModal },
		isInternationalizationModalOpen: false
	}
};

const modalsSlice = createSlice({
	name: 'modals',
	initialState: { ...initialState },
	reducers: {
		setPlaygroundModal: (state: ModalsStateProps, action: PayloadAction<PlaygroundModal>) => {
			state.ui.playgroundModal = action.payload;
		},
		toggleInternationalizationModal: (state: ModalsStateProps, action: PayloadAction<boolean>) => {
			state.ui.isInternationalizationModalOpen = action.payload;
		}
	}
});

export const { setPlaygroundModal, toggleInternationalizationModal } = modalsSlice.actions;

export default modalsSlice.reducer;
