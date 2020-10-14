import React, { useState } from 'react'
import Layout from '@components/Layout'
import styles from './styles.module.scss'
import Img from 'gatsby-image'
import { Grid, Row, Col, Divider } from '@element-softworks/daintree'
import DestinationSearchTile from '@components/DestinationSearchTile'
import DestinationTile from '@components/DestinationTile'
import Button from '@components/Button'

export default function Home({
	data: {
		background,
		destinations: { edges: destinations },
	},
}) {
	const [currentDestination, setCurrentDestination] = useState(null)
	const [destionationIndex, setDestionationIndex] = useState(1)
	const [loading, setLoading] = useState(false)

	const handleNextDestinations = () => {
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
			// reset destinationIndex to 1 if the length has reached the maximum amount of destinations, otherwise keep incrementing
			setDestionationIndex(destionationIndex * 5 >= destinations?.length ? 1 : destionationIndex + 1)
		}, 600)
	}

	return (
		<Layout>
			<div className={styles.home}>
				<div className={styles.homeBackground}>
					<Img fluid={background?.childImageSharp?.fluid} />
				</div>
				<div className={styles.homeContent}>
					<Grid>
						<Row>
							<Col xs={12} md={5}>
								<h1>The Sound of Spain...</h1>
								<p>
									Whether you're turning up the tunes in Tenerife, bouncing to the beat in Barcelona
									or moving to the music in Madrid, we've got you covered.
								</p>
								<p>
									You'll also have the opportunity to win a 5 day trip to Spain, courtesy of
									Norwegian!
								</p>
								<Divider margin={2} />
								<div className={styles.homeDesktopCTA}>
									<Button
										text={'More Please'}
										onClick={handleNextDestinations}
										loading={loading}
										icon="/images/buttons/refreshing.png"
									/>
								</div>
							</Col>
							<Col xs={12} md={7}>
								<Row center="md">
									<Col xs={12} lg={9} xl={11}>
										<div className={styles.homeDestinationsWrapper}>
											<div className={styles.homeDestinations}>
												<div className={styles.homeDestinationsDestination}>
													<DestinationSearchTile destination={currentDestination} />
												</div>
												{destinations
													?.slice(5 * destionationIndex - 5, 5 * destionationIndex)
													.map(({ node: destination }) => (
														<div
															key={destination?.name}
															className={styles.homeDestinationsDestination}
														>
															<DestinationTile
																{...destination}
																onMouseEnter={d => setCurrentDestination(d)}
																onMouseLeave={() => setCurrentDestination(null)}
															/>
														</div>
													))}
											</div>
										</div>
										<Divider margin={2} />
										<a href="https://www.norwegian.com/uk/booking/booking-information/legal/terms-of-use/">
											* terms and conditionals apply
										</a>
									</Col>
								</Row>
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query {
		background: file(relativePath: { regex: "/background.jpg/" }) {
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
