import React from 'react'
import styles from './styles.module.scss'

const Button = ({ text, icon, loading, ...props }) => {
	return (
		<button className={`${styles.button} ${loading ? styles.buttonLoading : ''}`} {...props}>
			{text}
			{!!icon && (
				<div className={styles.buttonIcon}>
					<img alt="submit" src={icon} />
				</div>
			)}
		</button>
	)
}

export default Button
