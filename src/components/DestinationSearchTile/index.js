import React from 'react'
import styles from './styles.module.scss'

const DestinationSearchTile = ({ destination }) => (
	<div className={styles.destinationSearch}>
		<div>
			<h2>{destination?.name ?? 'Choose a destination'}</h2>
			<img alt="submit" src="/images/buttons/go_icon.png" />
		</div>
	</div>
)

export default DestinationSearchTile
