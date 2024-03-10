import { configureStore } from '@reduxjs/toolkit'
import dayReducer from '../reducers/index'

const store = configureStore({
	reducer: {
		date: dayReducer,
	},
})

export default store
