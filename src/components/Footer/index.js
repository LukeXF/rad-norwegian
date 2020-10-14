import React from 'react'
import styles from './styles.module.scss'
import { Grid, Row, Col } from '@element-softworks/daintree'
import {
	FacebookShareButton,
	TwitterShareButton,
} from 'react-share'

const Footer = () => {
	return <div className={styles.footer}>
		<Grid>
			<Row middle="xs">
				<Col xs={3}>
					<div className={styles.footerLeft}>
						<span>Share this</span>
						<FacebookShareButton>
							<img alt="Share with Facebook" src="/images/footer/facebook_footer.png"/>
						</FacebookShareButton>
						<TwitterShareButton>
							<img alt="Share with Twitter" src="/images/footer/twitter_footer.png"/>
						</TwitterShareButton>
					</div>
				</Col>
				<Col xs={6}>
					<a href="https://www.norwegian.com/uk/" target="_blank" rel="noreferrer noopener">Norwegian.com</a>
					<a href="https://www.norwegian.com/uk/booking/booking-information/legal/terms-of-use/"
					   target="_blank" rel="noreferrer noopener">Terms and conditions</a>
					<a href="https://www.norwegian.com/uk/booking/booking-information/legal/cookies/" target="_blank"
					   rel="noreferrer noopener">Cookies Policy</a>
				</Col>
				<Col xs={3}>
					<div className={styles.footerRight}>
						<a href="http://spotify.com" target="_blank" rel="noreferrer noopener">
							<span>Music by</span>
							<img alt="Spotify" src="/images/footer/spotify_Logo_rgb_white.png"/>
						</a>
					</div>
				</Col>
			</Row>
		</Grid>
	</div>
}

export default Footer

