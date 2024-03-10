export const SETDATE = 'SET'
export const DELETEDATE = 'DELETE'

export const setDate = (date) => ({
	type: SETDATE,
	payload:date
})

export const deleteDate = () => ({
	type: DELETEDATE,
})
