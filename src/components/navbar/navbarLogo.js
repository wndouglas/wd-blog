import React from "react"
import { useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const LogoWrap = styled.div`
  flex: 1 0 auto;
  margin: -10px ${rhythm(1)};

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