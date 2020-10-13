import React from "react"
import styles from "./styles.module.scss"

const Button = ({ text }) => {
  return <div className={styles.button}>
    {text}
    <img alt="submit" src="/images/buttons/refreshing.png"/>
  </div>
}

export default Button

