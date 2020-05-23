import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Header from "./header/header"
import Footer from "./footer"

export default ({ children }) => (
  <>
  <Header />
  <div css={css`
  background: linear-gradient(135deg, rgb(242,235,228) 0%, rgb(228,213,199) 90%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */  
  `}>
    <div css={css`
    margin: 0 auto;
    max-width: 1000px;
    min-height: 200vh;
    padding: ${rhythm(3.5)} ${rhythm(1)} ${rhythm(2)} ${rhythm(1)};
    font-size: 90%;`}>
        {children}
    </div>
  </div>
  <Footer/>
  </>
)