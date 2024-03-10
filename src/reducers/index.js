import { SETDATE, DELETEDATE } from '../actions/index'

const initialState = {
	day: null,
}

const dayReducer = (state = initialState, action) => {
	switch (action.type) {
		case SETDATE:
			return {
				...state,
				day: action.payload,
			}
		case DELETEDATE:
			return {
				...state,
				day: null,
			}
		default:
			return state
	}
}

export default dayReducer
