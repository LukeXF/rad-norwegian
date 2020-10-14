import React from 'react'

import SEO from '@components/SEO'
import Navigation from '@components/Navigation'
import Footer from '@components/Footer'

// main site style
import '@styles/style.scss'

import styles from './styles.module.scss'

const Layout = ({ children, className = '' }) => {
	return (
		<div className={`${styles.app} ${className}`}>
			<SEO/>
			<Navigation/>
			<main>
				<div className={styles.content}>{children}</div>
				<Footer/>
			</main>
		</div>
	)
}


export default Layout
