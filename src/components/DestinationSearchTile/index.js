import React from "react"
import styles from "./styles.module.scss"

const DestinationSearchTile = ({ name, departure, departureCode, price, duration }) => {
  return <div className={styles.destinationSearch}>
    <h2>Choose a destination</h2>
    <img src="/images/buttons/go_icon.png"/>
  </div>
}

export default DestinationSearchTile

