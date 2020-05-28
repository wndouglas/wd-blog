import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"
import { Container, Col } from "react-bootstrap"

export default ( ) => {
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
        <Col xs={10} md={10}>
          <Img fluid={rpi.childImageSharp.fluid} />
        </Col>
        <br/>
      </Container>
    )
}