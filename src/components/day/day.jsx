import { format } from 'date-fns'
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDate } from '../../actions'
import { EventsContext } from '../../context/eventsContext'
import styles from './day.module.scss'

const Day = ({ info, disable }) => {
	const { value, date } = info
	const dateSelector = useSelector(state => state.date)
	const dispatch = useDispatch()
	const eventsContext = useContext(EventsContext)

	const [eventsCount, setEventsCount] = useState()

	useEffect(() => {
		if (date) {
			const formattedDate = format(date, 'd-M-yyyy')

			if (eventsContext.events[formattedDate]) {
				setEventsCount(eventsContext.events[formattedDate].length)
			}
		}
	})

	const setCurrentDate = () => {
		if (!disable) {
			if (!dateSelector.day) {
				dispatch(setDate(date.getTime()))
			} else {
				dispatch(setDate(date))
			}
		}
	}

	return (
		<li className={styles.day} onClick={setCurrentDate}>
			{value}

			<span className={styles.event_counter}>{eventsCount}</span>
		</li>
	)
}

export default Day
