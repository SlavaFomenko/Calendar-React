import classNames from 'classnames'
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid'
import Event from '../event/event'

import { deleteDate } from '../../actions'
import { EventsContext } from '../../context/eventsContext'
import styles from './day_info.module.scss'

const DayInfo = () => {
	const date = useSelector(state => state.date.day)
	const eventsContext = useContext(EventsContext)
	const [disableButton, setDisableButton] = useState(false)
	const [isAddEvent, setAddEvent] = useState(false) // Включите определение setAddEvent
	const dispatch = useDispatch()

	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear()

	useEffect(() => {
		if (isAddEvent) {
			const id = uniqid()
			const dayKey = `${day}-${month}-${year}`
			const dayEvents = eventsContext.events[dayKey]

			if (dayEvents) {
				eventsContext.setEvents({
					...eventsContext.events,
					[dayKey]: [{ id, name: '', event: '', isEdit: true }, ...dayEvents],
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

	return (
		<div className={classNames(styles.wrapper, styles.visible)}>
			<header>
				<span>
					{day} {month} {year}
				</span>

				<div className={classNames(styles.buttons)}>
					<button
						disabled={disableButton}
						onClick={() => {
							setAddEvent(true)
							setDisableButton(true)
						}}
					>
						add event
					</button>
					<button
						disabled={disableButton}
						onClick={() => {
							dispatch(deleteDate())
						}}
					>
						close
					</button>
				</div>
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
