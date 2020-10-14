import React from 'react'
import styles from './styles.module.scss'

const DestinationTile = ({ onMouseEnter, onMouseLeave, ...destination }) => {
	const { name, departure, departureCode, price, duration } = destination

	return (
		<button
			className={styles.destination}
			onMouseEnter={() => onMouseEnter(destination)}
			onMouseLeave={onMouseLeave}
		>
			<a
				target="_blank"
				rel="noreferrer noopener"
				href={`https://www.norwegian.com/uk/booking/flight-tickets/farecalendar/?D_City=${departureCode}&A_City=${name}`}
			>
				<h2>{name}</h2>
				<hr />
				Direct from {departure} ({departureCode}) £{price} {duration}*
			</a>
		</button>
	)
}

export default DestinationTile
