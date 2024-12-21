import { configureStore } from '@reduxjs/toolkit'
import brandSlice from './slices/barndsSlice'

export const store = configureStore({
	reducer: {
		brands: brandSlice,
	},
	devTools: true,
})