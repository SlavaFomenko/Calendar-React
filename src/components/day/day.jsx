import React from 'react'
import styles from './day.module.scss'
// import { useDispatch, useSelector } from 'react-redux'

const Day = ({ info }) => {
	// const date = useSelector(state => state.date)
	// const dispatch = useDispatch()
	// console.log(info)

	const { value, date } = info

	return (
		<li className={styles.day} onClick={() => console.log(date)}>
			{value}
		</li>
	)
}

export default Day
