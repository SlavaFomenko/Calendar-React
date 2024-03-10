import { DELETE_DATE, SET_DATE } from '../actions/index'

const initialState = {
	day: null,
}

const dayReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DATE:
			return {
				...state,
				day: new Date(action.payload),
			}
		case DELETE_DATE:
			return {
				...state,
				day: null,
			}
		default:
			return state
	}
}

export default dayReducer
