export const SET_DATE = 'SET'
export const DELETE_DATE = 'DELETE'

export const setDate = (date) => ({
	type: SET_DATE,
	payload:date
})

export const deleteDate = () => ({
	type: DELETE_DATE,
})
