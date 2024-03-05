import React from 'react'
import styles from './day.module.scss'

const Day = ({ value, info }) => {
	return (
		<li className={styles.day} onClick={() => console.log(info)}>
			{value}
		</li>
	)
}

export default Day
