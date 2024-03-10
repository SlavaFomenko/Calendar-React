import classNames from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './day_info.module.scss'

const DayInfo = () => {
	const date = useSelector(state => state.date.day)

	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getYear() + 1900

	console.log(day)

	return (
		<div className={classNames(styles.wrapper, styles.visible)}>
			{/* Ваш контент для DayInfo */}
			{day} {month} {year}
		</div>
	)
}

export default DayInfo
