import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../common/data/defaultPropValues';

import { StateProps, AppColorMode } from './types';

const initialState: StateProps = {
	ui: {
		color: defaultColor,
		colorMode: defaultColorMode
	}
};

const appSlice = createSlice({
	name: 'app',
	initialState: { ...initialState },
	reducers: {
		setColorMode: (state: StateProps, action: PayloadAction<AppColorMode>) => {
			state.ui.colorMode = action.payload;
		}
	}
});

export const { setColorMode } = appSlice.actions;

export default appSlice.reducer;
