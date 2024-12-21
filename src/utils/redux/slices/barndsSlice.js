import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../data'

export const getBrands = createAsyncThunk('brands/getBrands', async (_, thunkAPI) => {

	const token = sessionStorage.getItem('token')
	try {
		const headers = {
			'Content-Type': 'application/json',
			'Authorization': `bearer ${token}`,
		}
		const res = await axios(`${BASE_URL}/brands?page=1&size=50`, { headers })

		if (!res.ok) {
			throw Error(`HTTP error! status: ${res.status}`)
		}
		console.log(res.data)

	} catch (error) {
		console.error('Fetch failed:', error)
		return thunkAPI.rejectWithValue(error)
	}
}

)

const brandSlice = createSlice({
	name: 'brands',
	initialState: {
		brands: [],
	},
	extraReducers: (builder) => {
		builder.addCase(getBrands.fulfilled, (state, action) => {
			state.brands = action.payload
		})
	}
})

export default brandSlice.reducer