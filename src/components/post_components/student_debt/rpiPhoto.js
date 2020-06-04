import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"
import { Container, Col } from "react-bootstrap"

const RPI = () => {
    const { rpi } = useStaticQuery(
        graphql`
          query {
            rpi: file(relativePath: { eq: "post-plots/rpi.png" }) {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `
      )
    return (
      <Container align='center'>
        <Col>
          <Img fluid={rpi.childImageSharp.fluid} />
        </Col>
        <br/>
      </Container>
    )
}

export default RPI