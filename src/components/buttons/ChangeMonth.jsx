import React from 'react'
import styles from './ChangeMonth.module.scss'

const ChangeMonth = ({ children, events }) => {
	return (
		<div className={styles.wrapper}>
			<button className={styles.prev} onClick={events.decrementMonth}>
				prev
			</button>
			{children}
			<button className={styles.next} onClick={events.incrementMonth}>
				next
			</button>
		</div>
	)
}

export default ChangeMonth
