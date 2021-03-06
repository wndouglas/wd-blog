import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"
import { Container, Col } from "react-bootstrap"

export default ( ) => {
    const { wealth } = useStaticQuery(
        graphql`
          query {
            wealth: file(relativePath: { eq: "post-plots/wealth.png" }) {
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
          <Img fluid={wealth.childImageSharp.fluid} />
        </Col>
        <br/>
      </Container>
    )
  }