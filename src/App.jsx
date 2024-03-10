import { React, useContext } from 'react'
import { useSelector } from 'react-redux'
import styles from './App.module.scss'
import Calendar from './calendar'
import DayInfo from './components/day_info/day_info'

// import { EventsContext } from './context/eventsContext'

function App() {
	const day = useSelector(state => state.date.day)

	return (
		<div className={styles.app}>
			<Calendar />
			{day ? <DayInfo /> : ''}
		</div>
	)
}

export default App
