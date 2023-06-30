import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ModalsSliceStateProps, PlaygroundModal } from './common/types';

export const defaultPlaygroundModal: PlaygroundModal = {
	isOpen: false
};

const initialState: ModalsSliceStateProps = {
	ui: {
		playgroundModal: { ...defaultPlaygroundModal },
		isInternationalizationModalOpen: false
	}
};

const modalsSlice = createSlice({
	name: 'modals',
	initialState: { ...initialState },
	reducers: {
		setPlaygroundModal: (state: ModalsSliceStateProps, action: PayloadAction<PlaygroundModal>) => {
			state.ui.playgroundModal = action.payload;
		},
		toggleInternationalizationModal: (state: ModalsSliceStateProps, action: PayloadAction<boolean>) => {
			state.ui.isInternationalizationModalOpen = action.payload;
		}
	}
});

export const { setPlaygroundModal, toggleInternationalizationModal } = modalsSlice.actions;

export default modalsSlice.reducer;
