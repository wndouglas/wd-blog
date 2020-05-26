import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const MultiBackground = ({ className, children }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "london1.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Watch out for CSS's stacking order, especially when styling the individual
  // positions! The lowermost image comes last!
  // `linear-gradient(rgba(220, 15, 15, 0.73), rgba(4, 243, 67, 0.73))`,
  const backgroundFluidImageStack = [
    desktop.childImageSharp.fluid
  ]

  return (
    <BackgroundImage
      Tag={`section`}
      id={`test`}
      className={className}
      fluid={backgroundFluidImageStack}
    >
      <StyledInnerWrapper>
        {children}
      </StyledInnerWrapper>
    </BackgroundImage>
  )
}

const StyledInnerWrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
overflow: hidden;
`

const StyledMultiBackground = styled(MultiBackground)`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
  background-color: linear-gradient(to top, rgba(25, 84, 123, 0.01), 
                                    rgba(255, 216, 155, 0.15));
`

export default StyledMultiBackground