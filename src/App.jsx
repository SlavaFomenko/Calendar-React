import { React } from 'react'
import styles from './App.module.scss'
import Calendar from './calendar'

function App() {
	console.log('hello')
	return (
		<div className={styles.app}>
			<Calendar />
		</div>
	)
}

export default App
