import React from "react"
import styles from "./styles.module.scss"
import { Grid, Row, Col } from "@element-softworks/daintree"

const Footer = () => {
  return <div className={styles.footer}>
    <Grid>
      <Row middle="xs">
        <Col xs={3}>
          <span>Share this</span>
          <img alt="Share with Facebook" src="/images/buttons/facebook_button.png"/>
          <img alt="Share with Twitter" src="/images/buttons/twitter_button.png"/>
        </Col>
        <Col xs={6}>
          <a href="https://www.norwegian.com/uk/">Norwegian.com</a>
          <a href="https://www.norwegian.com/uk/booking/booking-information/legal/terms-of-use/">Terms and conditions</a>
          <a href="https://www.norwegian.com/uk/booking/booking-information/legal/cookies/">Cookies Policy</a>
        </Col>
        <Col xs={3}>

        </Col>
      </Row>
    </Grid>
  </div>
}

export default Footer

