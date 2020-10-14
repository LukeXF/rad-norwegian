import React from 'react'
import styles from './styles.module.scss'

const Button = ({ text, ...props }) => {
	return (
		<button className={styles.button} {...props}>
			{text}
			<img alt="submit" src="/images/buttons/refreshing.png" />
		</button>
	)
}

export default Button
