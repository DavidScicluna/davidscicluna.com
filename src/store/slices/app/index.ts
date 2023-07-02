import { AppColor, AppFullColorMode, defaults } from '@davidscicluna/component-library';

import { defaultLanguage } from '@/common/content/languages';
import { Language } from '@/common/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppSliceStateProps } from './common/types';

const { defaultColor, defaultColorMode } = defaults.props;

const initialState: AppSliceStateProps = {
	ui: {
		theme: {
			color: defaultColor,
			colorMode: defaultColorMode
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
