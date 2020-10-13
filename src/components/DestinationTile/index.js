import React from "react"
import styles from "./styles.module.scss"

const DestinationTile = ({ name, departure, departureCode, price, duration }) => {
  return <div className={styles.destination}>
    <h2>{name}</h2>
    <hr/>
    Direct from {departure} ({departureCode})
    £{price} {duration}*
  </div>
}

export default DestinationTile

