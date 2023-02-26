import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { defaultLanguage } from '../../../common/content/languages';
import { color as defaultColor, colorMode as defaultColorMode } from '../../../common/data/defaultPropValues';
import { Language } from '../../../common/types';

import { StateProps, AppColorMode } from './types';

const initialState: StateProps = {
	ui: {
		color: defaultColor,
		colorMode: defaultColorMode,
		language: { ...defaultLanguage }
	}
};

const appSlice = createSlice({
	name: 'app',
	initialState: { ...initialState },
	reducers: {
		setColorMode: (state: StateProps, action: PayloadAction<AppColorMode>) => {
			state.ui.colorMode = action.payload;
		},
		setLanguage: (state: StateProps, action: PayloadAction<Language>) => {
			state.ui.language = action.payload;
		}
	}
});

export const { setColorMode, setLanguage } = appSlice.actions;

export default appSlice.reducer;
