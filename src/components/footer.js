import { rhythm } from "../utils/typography"
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
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
  <footer
    style={{
      position: 'static',
      bottom: 0,
      left: 0,
      zIndex: 2,
      width: `100vw`,
      height: rhythm(1.75),
      maxHeight: rhythm(1.75),
      padding: `${rhythm(0.5)} ${rhythm(1)}`,
      textAlign: `left`,
      borderTop: `2px solid #33333320`,
    }}>
    © {data.site.siteMetadata.author}, {new Date().getFullYear()}.
  </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer