import { rhythm } from "../utils/typography"
import React from 'react'
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Footer = styled.footer`
width: 100vw;
height: ${rhythm(1)};
padding-top: ${rhythm(0.2)};
padding-left: ${rhythm(0.5)};
-webkit-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
-moz-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
box-shadow: 0 -4px 6px -5px #222;
font-size: 75%;
`

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
    }`)

  return (
  <Footer>
    © {data.site.siteMetadata.author}, {new Date().getFullYear()}.
  </Footer>
  )
}