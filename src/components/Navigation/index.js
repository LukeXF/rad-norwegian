import React from "react"
import styles from "./styles.module.scss"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Navigation = () => {

  const { logo } = useStaticQuery(graphql`
      query Logo {
          logo: file(relativePath: { regex: "/norwegian_logo.png/" }) {
              childImageSharp {
                  fluid(maxWidth: 129) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <div className={styles.navigation}>
    <a href="https://www.norwegian.com/" aria-label="Norwegian Air">
      <Img alt="Norwegian Air Logo"
      imgStyle={{ objectFit: 'contain' }} className={styles.navigationLogo} fluid={logo?.childImageSharp?.fluid}/>
    </a>
  </div>
}

export default Navigation

