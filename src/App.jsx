import { React } from 'react'
import { useSelector } from 'react-redux'
import styles from './App.module.scss'
import Calendar from './calendar'
import DayInfo from './components/day_info/day_info'

function App() {
	const day = useSelector(state => state.date.day)

	// console.log(date)
	return (
		<div className={styles.app}>
			<Calendar />
			{day ? <DayInfo /> : ''}
		</div>
	)
}

export default App
