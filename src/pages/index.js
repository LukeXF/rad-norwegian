import React from "react"
import Layout from "../components/Layout"
import styles from "./styles.module.scss"
import Img from "gatsby-image"
import { Grid, Row, Col } from "@element-softworks/daintree"

export default function Home({
                               data: { logo }
                             }) {
  return <Layout>
    <div className={styles.home}>
      <div className={styles.homeBackground}>
        <Img imgStyle={{ objectFit: "contain" }} fluid={logo?.childImageSharp?.fluid}/>
      </div>
      <div className={styles.homeContent}>
        <Grid>
          <Row>
            <Col sm={5}>
              <h1>The Sound of Spain</h1>
              <p>
                Whether you're turning up the tunes in Tenerife, bouncing to the beat in Barcelona or moving to the
                music in Madrid, we've got you covered.
              </p>
              <p>
                You'll also have the opportunity to win a 5 day trip to Spain, courtesy of Norwegian!
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  </Layout>
}

export const query = graphql`
    query {
        logo: file(relativePath: {regex: "/background.jpg/"}) {
            childImageSharp {
                fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
