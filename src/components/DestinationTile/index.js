import React from 'react'
import styles from './styles.module.scss'

const DestinationTile = ({ name, departure, departureCode, price, duration }) => (
	<div className={styles.destination}>
		<div>
			<h2>{name}</h2>
			<hr />
			Direct from {departure} ({departureCode}) £{price} {duration}*
		</div>
	</div>
)

export default DestinationTile
