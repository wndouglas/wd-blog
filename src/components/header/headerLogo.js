import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const LogoWrap = styled.div`
  flex: 1 0 auto;
  justify-content: flex-start;
  margin: -${rhythm(0.5)} 0;
  padding-left: ${rhythm(0.5)};

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 1 0 auto;
  }
`

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
    }`)

  return (
    <LogoWrap as={Link} to="/">
      <h3 style={{ display: `inline-block` }}> {data.site.siteMetadata.title} </h3>
    </LogoWrap>
  )
}