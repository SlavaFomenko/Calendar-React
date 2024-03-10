import React, { createContext, useState } from 'react'

const EventsContext = createContext({})

const EvetsContextProvider = ({ children }) => {
	const [events, setEvents] = useState({})

	return (
		<EventsContext.Provider value={{ events, setEvents }}>
			{children}
		</EventsContext.Provider>
	)
}

export { EventsContext, EvetsContextProvider }
