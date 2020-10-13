import React, { useState } from "react"
import Layout from "@components/Layout"
import styles from "./styles.module.scss"
import Img from "gatsby-image"
import { Grid, Row, Col } from "@element-softworks/daintree"
import DestinationSearchTile from "@components/DestinationSearchTile"
import DestinationTile from "@components/DestinationTile"

export default function Home({
                               data: { background, destinations: { edges: destinations } }
                             }) {
  const [destionationIndex, setDestionationIndex] = useState(1)

  console.log({ destinations })
  return <Layout>
    <div className={styles.home}>
      <div className={styles.homeBackground}>
        <Img imgStyle={{ objectFit: "contain" }} fluid={background?.childImageSharp?.fluid}/>
      </div>
      <div className={styles.homeContent}>
        <Grid>
          <Row>
            <Col sm={5}>
              <h1>The Sound of Spain...</h1>
              <p>
                Whether you're turning up the tunes in Tenerife, bouncing to the beat in Barcelona or moving to the
                music in Madrid, we've got you covered.
              </p>
              <p>
                You'll also have the opportunity to win a 5 day trip to Spain, courtesy of Norwegian!
              </p>
            </Col>
            <Col sm={6}>
              <Row>
                <Col>
                  <DestinationSearchTile/>
                </Col>
                {destinations?.slice((5 * destionationIndex) - 5, 5 * destionationIndex).map(({ node: destination }) => {
                  console.log({ destination })
                  return <Col xs={4}>
                    <DestinationTile {...destination} />
                  </Col>
                })}
              </Row>
              <a href="https://www.norwegian.com/uk/booking/booking-information/legal/terms-of-use/">* terms and conditionals apply</a>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  </Layout>
}

export const query = graphql`
    query {
        background: file(relativePath: {regex: "/background.jpg/"}) {
            childImageSharp {
                fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        destinations: allDestinationsJson {
            edges {
                node {
                    id
                    departure
                    departureCode
                    name
                    price
                    duration
                }
            }
            totalCount
        }
    }

`
