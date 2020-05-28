import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Container, Col } from "react-bootstrap"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const AboutPageName = "About"

export const AboutPage = ({ data }) => {
  const post = data.markdown.edges[0].node
  return (
  <Layout>
    <SEO title={AboutPageName} />
    <Container align='center'>
        <Col xs={6} md={4}>
          <Img fluid={data.image.childImageSharp.fluid} 
            style={{ borderRadius: '50%', border: '1px solid #ddd' }}/>
        </Col>
    </Container>
    <h1>About</h1>
    <hr/>
    <br/>
    <MDXRenderer>{post.body}</MDXRenderer>
  </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    markdown: allMdx(filter: {frontmatter: {path: {eq: "/about"}}}) {
      edges {
        node {
          body
        }
      }
    }
    image: file(relativePath: { eq: "me_about.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
