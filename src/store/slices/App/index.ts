import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateProps, ColorMode } from './types';

const initialState: StateProps = {
	ui: {
		colorMode: 'system'
	}
};

const appSlice = createSlice({
	name: 'app',
	initialState: { ...initialState },
	reducers: {
		setColorMode: (state: StateProps, action: PayloadAction<ColorMode>) => {
			state.ui.colorMode = action.payload;
		}
	}
});

export const { setColorMode } = appSlice.actions;

export default appSlice.reducer;
