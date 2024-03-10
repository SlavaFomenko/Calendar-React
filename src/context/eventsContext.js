import React, { createContext, useEffect, useState } from 'react'

const EventsContext = createContext({})

const EvetsContextProvider = ({ children }) => {
	const [events, setEvents] = useState(() => {
		const storedEvents = localStorage.getItem('events')
		return storedEvents ? JSON.parse(storedEvents) : {}
	})

	useEffect(() => {
		localStorage.setItem('events', JSON.stringify(events))
	}, [events])

	return (
		<EventsContext.Provider value={{ events, setEvents }}>
			{children}
		</EventsContext.Provider>
	)
}

export { EventsContext, EvetsContextProvider }
