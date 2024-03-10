import classNames from 'classnames'
import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import uniqid from 'uniqid'
import Event from '../event/event'

import { EventsContext } from '../../context/eventsContext'
import styles from './day_info.module.scss'

const DayInfo = () => {
	const date = useSelector(state => state.date.day)
	const eventsContext = useContext(EventsContext)
	const [disableButton, setDisableButton] = useState(false)

	const [events, setEvents] = useState([])
	const [isAddEvent, setAddEvent] = useState(false)

	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear()

	console.log(eventsContext.events)

	useEffect(() => {
		if (isAddEvent) {
			const id = uniqid()
			const dayKey = `${day}-${month}-${year}`
			const dayEvents = eventsContext.events[dayKey]

			if (dayEvents) {
				eventsContext.setEvents({
					...eventsContext.events,
					[dayKey]: [
						...dayEvents,
						{ id: id, name: '', event: '', isEdit: true },
					],
				})
			} else {
				eventsContext.setEvents({
					...eventsContext.events,
					[dayKey]: [{ id, name: '', event: '', isEdit: true }],
				})
			}

			setAddEvent(false)
		}
	}, [isAddEvent])

	console.log(eventsContext.events[`${day}-${month}-${year}`])

	return (
		<div className={classNames(styles.wrapper, styles.visible)}>
			<header>
				<span>
					{day} {month} {year}
				</span>
				<button
					disabled={disableButton}
					onClick={() => {
						setAddEvent(true)
						setDisableButton(true)
					}}
				>
					add event
				</button>
			</header>
			<main>
				<ul>
					{eventsContext.events[`${day}-${month}-${year}`]?.map(event => (
						<Event
							key={event.id}
							data={{
								...event,
								setDisableButton,
								date: `${day}-${month}-${year}`,
							}}
						/>
					))}
					{eventsContext.events[`${day}-${month}-${year}`]?.length === 0 ||
						(eventsContext.events[`${day}-${month}-${year}`] === undefined &&
							'No events')}
				</ul>
			</main>
		</div>
	)
}

export default DayInfo
