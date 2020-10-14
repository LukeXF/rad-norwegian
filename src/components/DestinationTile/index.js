import React from 'react'
import styles from './styles.module.scss'

const DestinationTile = ({ onMouseEnter, onMouseLeave, ...destination }) => {
	const { name, departure, departureCode, price, duration } = destination

	return (
		<button className={styles.destination} onMouseEnter={() => onMouseEnter(destination)} onMouseLeave={onMouseLeave}>
			<div>
				<h2>{name}</h2>
				<hr />
				Direct from {departure} ({departureCode}) £{price} {duration}*
			</div>
		</button>
	)
}

export default DestinationTile
