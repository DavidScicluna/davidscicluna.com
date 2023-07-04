import { AppColor, AppFullColorMode } from '@davidscicluna/component-library';

import colors from '@/common/content/colors';
import { defaultLanguage, Language } from '@/common/content/languages';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sample } from 'lodash';

import { AppSliceStateProps } from './common/types';

const initialState: AppSliceStateProps = {
	ui: {
		theme: {
			color: sample(colors) || 'blue',
			colorMode: 'system'
		},
		language: { ...defaultLanguage }
	}
};

const appSlice = createSlice({
	name: 'app',
	initialState: { ...initialState },
	reducers: {
		setAppColor: (state: AppSliceStateProps, action: PayloadAction<AppColor>) => {
			state.ui.theme.color = action.payload;
		},
		setAppColorMode: (state: AppSliceStateProps, action: PayloadAction<AppFullColorMode>) => {
			state.ui.theme.colorMode = action.payload;
		},
		setLanguage: (state: AppSliceStateProps, action: PayloadAction<Language>) => {
			state.ui.language = action.payload;
		}
	}
});

export const { setAppColor, setAppColorMode, setLanguage } = appSlice.actions;

export default appSlice.reducer;
