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
		const currentDate = new Date(
			subMonths(date, 1).getFullYear(),
			subMonths(date, 1).getMonth(),
			prevMonthLastDay
		)
		days.unshift(
			<Day
				key={currentDate}
				info={{ value: prevMonthLastDay, date: currentDate }}
			/>
		)

		prevMonthLastDay--
		startOfMonthIndex--
	} while (startOfMonthIndex - 1 > 0)

	let currentDay = 1

	do {
		const currentDate = new Date(
			date.getFullYear(),
			date.getMonth(),
			currentDay
		)
		days.push(
			<Day key={currentDate} info={{ value: currentDay, date: currentDate }} />
		)
		currentDay++
	} while (currentDay <= endOfMonth(date).getDate())

	currentDay = 1
	while (days.length < 42) {
		const currentDate = new Date(
			date.getFullYear(),
			date.getMonth() + 1,
			currentDay
		)
		days.push(
			<Day key={currentDate} info={{ value: currentDay, date: currentDate }} />
		)
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
						<Day key={day} info={{ value: day }} />
					))}
				</ul>
				<ul className={styles.monthDays}>{days}</ul>
			</main>
		</section>
	)
}

export default Calendar
