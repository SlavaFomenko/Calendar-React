import React, { useContext, useState } from 'react'
import { EventsContext } from '../../context/eventsContext'
import styles from './event.module.scss'

const Event = ({ data }) => {
	const [isEditing, setIsEditing] = useState(data.isEdit)
	const [eventName, setName] = useState(data.name)
	const [eventEvent, setEvent] = useState(data.event)

	const eventsContext = useContext(EventsContext)

	const handleSave = () => {
		const updatedEvents = { ...eventsContext.events }
		const dayKey = data.date
		const updatedDayEvents = updatedEvents[dayKey].map(event =>
			event.id === data.id
				? { ...event, name: eventName, event: eventEvent, isEdit: false }
				: event
		)
		updatedEvents[dayKey] = updatedDayEvents

		eventsContext.setEvents(updatedEvents)

		setIsEditing(false)
		data.setDisableButton(false)
	}

	const handleEdit = () => {
		setIsEditing(true)
		data.setDisableButton(true)
	}

	const handleDelete = () => {
		const updatedEvents = { ...eventsContext.events }
		const dayKey = data.date
		const updatedDayEvents = updatedEvents[dayKey].filter(
			event => event.id !== data.id
		)

		if (updatedDayEvents.length === 0) {
			delete updatedEvents[dayKey]
		} else {
			updatedEvents[dayKey] = updatedDayEvents
		}

		eventsContext.setEvents(updatedEvents)
	}

	const handleChangeName = e => {
		setName(e.target.value)
	}

	const handleChangeEvent = e => {
		setEvent(e.target.value)
	}

	if (isEditing) {
		return (
			<li className={styles.form}>
				<input type='text' value={eventName} onChange={handleChangeName} />
				<textarea value={eventEvent} onChange={handleChangeEvent} />
				<button onClick={handleSave}>Save</button>
			</li>
		)
	} else {
		return (
			<li className={styles.event}>
				<span>{eventName}</span>
				<p>{eventEvent}</p>
				<button onClick={handleEdit}>Edit</button>
				<button onClick={handleDelete}>Delete</button>
			</li>
		)
	}
}

export default Event
