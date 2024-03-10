import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDate } from '../../actions'
import styles from './day.module.scss'

const Day = ({ info }) => {
	const { value, date } = info

	const dateSelector = useSelector(state => state.date)
	const dispatch = useDispatch()

	const setCurrentDate = () => {
		if (!dateSelector.day) {
			dispatch(setDate(date.getTime()))
		} else {
			dispatch(setDate(date))
		}
	}

	return (
		<li className={styles.day} onClick={setCurrentDate}>
			{value}
		</li>
	)
}

export default Day
