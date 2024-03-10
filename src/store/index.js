import { configureStore } from '@reduxjs/toolkit'
import dayReducer from '../reducers/index'

const store = configureStore({
	reducer: {
		date: dayReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false, // отключение проверки сериализуемости (https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using)
		}),
})

export default store
