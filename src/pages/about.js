import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ContactForm from "../components/form"

import { Container, Col } from "react-bootstrap"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const AboutPage = ({ data }) => {
  const post = data.markdown.edges[0].node
  return (
  <Layout>
    <SEO title="About" />
    <Container align='center'>
        <Col xs={4} md={4}>
          <Img fluid={data.image.childImageSharp.fluid} style={{ borderRadius: '50%', border: '1px solid #ddd' }}/>
        </Col>
    </Container>
    <h1>About</h1>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ContactForm/>
  </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    markdown: allMdx(filter: {frontmatter: {title: {eq: "About Page"}}}) {
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
