import {
	addMonths,
	endOfMonth,
	format,
	getDay,
	startOfMonth,
	subMonths,
} from 'date-fns'
import React, { useState } from 'react'
import styles from './Calendar.module.scss'
import ChangeMonth from './components/buttons/ChangeMonth'
import Day from './components/day/day'

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const Calendar = () => {
	const [date, setData] = useState(new Date())

	const incrementMonth = () => {
		setData(date => addMonths(date, 1))
	}
	const decrementMonth = () => {
		setData(date => subMonths(date, 1))
	}

	const days = []

	const firstDayOfMonth = startOfMonth(date)
	let startOfMonthIndex = getDay(firstDayOfMonth)
	let prevMonthLastDay = endOfMonth(subMonths(date, 1)).getDate()

	do {
		days.unshift(<Day value={prevMonthLastDay} />)
		prevMonthLastDay--
		startOfMonthIndex--
	} while (startOfMonthIndex - 1 > 0)

	let currentDay = 1

	do {
		days.push(<Day value={currentDay} />)
		currentDay++
	} while (currentDay <= endOfMonth(date).getDate())

	currentDay = 1
	while (days.length < 35) {
		days.push(<Day value={currentDay} />)
		currentDay++
	}

	return (
		<section className={styles.wrapper}>
			<header>
				<ChangeMonth events={{ incrementMonth, decrementMonth }}>
					<span>{format(date, 'dd.MM.yyyy')}</span>
				</ChangeMonth>
			</header>
			<main className={styles.shedule}>
				<ul className={styles.weekDays}>
					{DAYS_OF_WEEK.map(day => (
						<Day value={day} />
					))}
				</ul>
				<ul className={styles.monthDays}>{days}</ul>
			</main>
		</section>
	)
}

export default Calendar
